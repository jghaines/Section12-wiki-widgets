import { useState, useEffect } from "react";

const Search = (props) => {
    const [term, setTerm] = useState('');

    useEffect( () => {
        const search = async () => {
            await axios.get(
                'https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term,
                    },
                }
            );
        }
        search();
    }, [term]);

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
