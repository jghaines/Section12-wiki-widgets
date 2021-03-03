import { useState } from "react";

const Search = (props) => {
    const [term, setTerm] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input"
                        value={term}
                        onChange={ e => setTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;
