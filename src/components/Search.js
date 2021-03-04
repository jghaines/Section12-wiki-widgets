import { useState, useEffect } from "react";

//import axios from 'axios';

const Search = (props) => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState('');
    const [results, setResults] = useState([]);
    
    useEffect( () => {
        const timeoutId = setTimeout(
            () => setDebouncedTerm(term),
            500 /*ms*/
        );

        return () => {
            clearTimeout( timeoutId );
        };
    }, [term]);

    useEffect( () => {
        const search = () => {
            setResults([
                { title: `Title ${debouncedTerm} #1`, snippet: 'Snippet', pageid: 5311, },
                { title: `Title ${debouncedTerm} #2`, snippet: '<em>Snippet</em>', pageid: 5312, },
            ]);
        }

/*
        const search = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debouncedTerm,
                    },
                }
            );
            setResults(data.query.results);
        };
*/
        search();
    }, [debouncedTerm]);

    const renderedResults = results.map( result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });

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
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;
