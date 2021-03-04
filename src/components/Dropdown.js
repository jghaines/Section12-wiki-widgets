import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ prompt, options, selected, onSelectedChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect( () => {
        const onBodyClick = e => {
            if ( ref.current && ref.current.contains(e.target)) {
                return;
            }
            setIsOpen(false);
        };
        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, []); // run-once

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
        <div 
            ref={ref}
            className="ui form"
        >
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
