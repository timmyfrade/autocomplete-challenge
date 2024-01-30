import React, { useState } from "react";
import './Autocomplete.css';

const AutocompleteInput = (props) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");
  
    const onChange = e => {
        // { fruits } data comes from App.js
        const { fruits } = props; 

        // Get the current value from input
        const input = e.currentTarget.value; 

        // Filter {fruits} array, turn the selected fruit and input value into LowerCase.
        // Return the position of the same value from {const input}.
        // Add {newFilteredFruits} to setFiltered state.
        const newFilteredFruits = fruits.filter(
            fruit => fruit.toLowerCase().indexOf(input.toLowerCase()) > -1
        );
        setActive(0);
        setFiltered(newFilteredFruits);
        setIsShow(true);
        setInput(e.currentTarget.value)
    };

    /* On click, new input value will be selected fruit from the list*/
    const onClick = e => {
        setActive(0);
        setFiltered([]);
        setIsShow(false);
        setInput(e.currentTarget.innerText)
    };

    /* Select fruit with keyboard - Arrow Up, Arrow Down and Enter key */
    const onKeyDown = e => {
        switch (e) {
            case e.keyCode === 13: // 'Enter' key
                setActive(0);
                setIsShow(false);
                setInput(filtered[active])
            case e.keyCode === 38: // 'Up Arrow' key
                return (active === 0) ? null : setActive(active - 1);
            case e.keyCode === 40: // 'Down Arrow' key
                return (active - 1 === filtered.length) ? null : setActive(active + 1);
            default:
                break;
        }
    };

    /* Render Input, fruit list and 'Not Found' */
    const renderInput = () => {
        if (isShow && input) {
            if (filtered.length) {
                return (
                    <ul className="autocomplete">
                        {filtered.map((fruit, index) => {
                            let className;

                            if (index === active) {
                                className = "active";
                            }
                            return (
                                <li className={className} key={fruit} onClick={onClick}>
                                    {fruit}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                return (
                    <div className="not-found">
                        <div>Not found</div>
                    </div>
                );
            }
        }
        return <></>;
    };
    
    return (
        <div className="input-container">
            <h1 className="input-title">Froogle</h1>
            <input
                data-testid="input-test"
                className="input-autocomplete"
                placeholder="Search for fruits..."
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={input}
            />
            {renderInput()}
        </div>
      );

};

export default AutocompleteInput;