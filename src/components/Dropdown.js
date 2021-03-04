const Dropdown = props => {
    const renderedOptions = props.options.map( option => {
        return (
            <div key={option.value} className="item">
                {option.label}
            </div>
        );
    });
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">{props.prompt}</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">...</div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>

            </div>
        </div>
    );
    
}

export default Dropdown;
