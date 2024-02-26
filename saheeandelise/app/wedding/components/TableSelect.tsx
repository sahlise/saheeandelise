import React, { useState } from 'react';

import Select, { ActionMeta, MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { guests } from '../data/guestList';

const animatedComponents = makeAnimated();

interface GuestDropDownProp {
    value: string; // The date to count down to, in ISO format (e.g., '2023-12-31')
    label: string;
}

interface TablePreferencesProps {
    updatePreferences: (preferences: string[]) => void;
}

const customStyles = {
    option: (provided: any, state: { isFocused: any; }) => ({
      ...provided,//#570034
      backgroundColor: state.isFocused ? '#f7cde6' : '#ffffff',
    }),
    control: (provided: any, state: { menuIsOpen: any; }) => ({
        ...provided,
        borderColor: state.menuIsOpen ? '#570034' : '#d1d5db',
        boxShadow: state.menuIsOpen ? '#570034' : '#d1d5db',
      })
  };

  const MAX_SELECTION = 6; 

const TablePreferences: React.FC<TablePreferencesProps> = ({ updatePreferences }) => {

    const [selected, setSelected] = useState<MultiValue<GuestDropDownProp>>([]);

    const getGuestData = () => {
        const selectGuestList: GuestDropDownProp[] = []
        guests.forEach(guest => {
            var label = "";
            const people = guest.people;
            
            if(people.length > 2) {
                //we only want to use the first two names in the list with a ...
                const firstPerson = people[0];
                const secondPerson = people[1];
                label = firstPerson.firstName + " " + firstPerson.lastName + " and " + secondPerson.firstName + " " + secondPerson.lastName + "..."
                
            } else if (people.length > 1) {
                //we only want to use the first two names in the list
                const firstPerson = people[0];
                const secondPerson = people[1];
                label = firstPerson.firstName + " " + firstPerson.lastName + " and " + secondPerson.firstName + " " + secondPerson.lastName
                
            } 
            else if (people.length > 0) {
                //we will just use the only name in the list
                const firstPerson = people[0];
                label = firstPerson.firstName + " " + firstPerson.lastName
                
            } else {
                //we have no people? just skip them
                return;
            }
            
            selectGuestList.push({ label: label, value: guest.groupId })
        })


        return selectGuestList;
    }

    const handleChange = (
        selectedOptions: MultiValue<GuestDropDownProp>, // Use MultiValue for multi-select
        actionMeta: ActionMeta<GuestDropDownProp>
    ) => {
        if (selectedOptions.length <= MAX_SELECTION) {
            setSelected(selectedOptions);
            updatePreferences(selectedOptions.map(option => option.value))
        } 
        

        //console.log(selectedOptions.map(option => option.id)); 
        // Perform additional actions based on selected options and actionMeta
    };

    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            value={selected}
            isMulti
            options={getGuestData()}
            onChange={handleChange}
            styles={customStyles}
        />
    );
}

export default TablePreferences;