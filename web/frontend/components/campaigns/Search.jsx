import { Listbox, Combobox, Icon } from '@shopify/polaris';
import { SearchMinor } from '@shopify/polaris-icons';
import { useState, useCallback, useMemo } from 'react';
const Search = () => {


    const [selectedOption, setSelectedOption] = useState();
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState();

    const updateText = useCallback(
        (value) => {
            setInputValue(value);

            // if (value === '') {
            //     setOptions(deselectedOptions);
            //     return;
            // }

            //const filterRegex = new RegExp(value, 'i');
            // const resultOptions = deselectedOptions.filter((option) =>
            //     option.label.match(filterRegex),
            // );
            // setOptions(resultOptions);
            //console.log(value);
        },
    );

    return (

        <Combobox
            activator={
                <Combobox.TextField
                    prefix={<Icon source={SearchMinor} />}
                    onChange={updateText}
                    label="Search tags"
                    labelHidden
                    value={inputValue}
                    placeholder="Search "
                    autoComplete="off"
                />
            }
        >

        </Combobox>

    );
};

export default Search;
