import { useState } from 'react';

const Dropdown = ({ prompt, options, selected, onSelectedChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const renderedOptions = options.map( option => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                onClick={ () => onSelectedChange(option) }
                className="item" 
            >
                {option.label}
            </div>
        );
    });
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">{prompt}</label>
                <div
                    onClick={ () => setIsOpen(!isOpen) }
                    className={`ui selection dropdown ${ isOpen ? 'visible active': '' }`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${ isOpen ? 'visible transition': '' }`}>
                        {renderedOptions}
                    </div>
                </div>

            </div>
        </div>
    );
    
}

export default Dropdown;
