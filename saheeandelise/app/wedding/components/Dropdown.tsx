import React, { useEffect, useState } from 'react';

import Select, { SingleValue } from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

interface SelectionProp {
    value: string;
    label: string;
}

const selectionChoices: SelectionProp[] = [
    {value: "DESC", label: "Order by: Lastest Photos"}, 
    {value: "ASC", label: "Order by: First Uploaded"}
]



interface DropdownProps {
    updateSelection: (selection: string) => void;
}

const customStyles = {
    option: (provided: any, state: { isFocused: any; }) => ({
      ...provided,//#570034
      backgroundColor: state.isFocused ? '#f7cde6' : '#ffffff',
      color: '#000000'
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


const Dropdown: React.FC<DropdownProps> = ({ updateSelection }) => {

    const [selected, setSelected] = useState<SingleValue<SelectionProp>>(selectionChoices[0]);

    const handleChange = (
        selectedOption: SingleValue<SelectionProp>,
    ) => {
        if(selectedOption) {
            setSelected(selectedOption)
            updateSelection(selectedOption.value)
        }
        
    };

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Select
            isSearchable={false}
            isClearable={false}
            components={animatedComponents}
            value={selected}
            isMulti={false}
            options={selectionChoices}
            onChange={handleChange}
            styles={customStyles}
        />
    );
}

export default Dropdown;