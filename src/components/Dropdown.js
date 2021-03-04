const Dropdown = ({ prompt, options, selected, onSelectedChange }) => {
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
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>

            </div>
        </div>
    );
    
}

export default Dropdown;
