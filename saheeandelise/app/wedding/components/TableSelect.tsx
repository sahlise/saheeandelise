import React, { useEffect, useState } from 'react';

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
    currentGroupId: string;
    selectedGroupIds: string[];
}

const customStyles = {
    option: (provided: any, state: { isFocused: any; }) => ({
      ...provided,//#570034
      backgroundColor: state.isFocused ? '#f7cde6' : '#ffffff',
    }),
    control: (provided: any, state: { menuIsOpen: any; isFocused: any; }) => ({
        ...provided,
        borderColor: state.menuIsOpen || state.isFocused ? '#570034' : '#d1d5db',
        boxShadow: state.menuIsOpen || state.isFocused ? '#570034' : '#d1d5db',
        '&:hover': {
      borderColor: state.isFocused ? '#570034' : '#d1d5db', // Changes the border color on hover
    },
      }),
    menuList: (styles: any) => {
        return {
          ...styles,
          maxHeight: 136
        };
      }
  };

  const MAX_SELECTION = 6; 

const TablePreferences: React.FC<TablePreferencesProps> = ({ updatePreferences, currentGroupId, selectedGroupIds }) => {

    const mapIdToGuestDropDownProp = (): GuestDropDownProp[] => {
        const selectGroups: GuestDropDownProp[] = []

        if(selectedGroupIds) {
            selectedGroupIds.forEach(groupId => {
                let selectedGroup = guests.find(guest => guest.groupId === groupId)
                if(selectedGroup) {
                    selectGroups.push({ label: selectedGroup.groupName, value: selectedGroup.groupId });
                }
                
            })
        }

        return selectGroups;
    }
    
    const [selected, setSelected] = useState<MultiValue<GuestDropDownProp>>(mapIdToGuestDropDownProp());

    useEffect(() => {
        setSelected(mapIdToGuestDropDownProp());
      }, [selectedGroupIds]);

    const getGuestData = () => {
        const selectGuestList: GuestDropDownProp[] = []
        guests.forEach(guest => {
            if(guest.groupId != currentGroupId) {
                //we are on the current group, skip them so they are not in the list
                selectGuestList.push({ label: guest.groupName, value: guest.groupId })
            }
            
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