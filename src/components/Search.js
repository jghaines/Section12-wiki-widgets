import { useState, useEffect } from "react";

//import axios from 'axios';

const Search = (props) => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect( () => {
        const search = () => {
            setResults([
                { title: `Title ${term} #1`, snippet: 'Snippet', pageid: 5311, },
                { title: `Title ${term} #2`, snippet: '<em>Snippet</em>', pageid: 5312, },
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
                        srsearch: term,
                    },
                }
            );
            setResults(data.query.results);
        };
*/
        if ( term && !results.length ) { // on first load
            search()
        } else {
            const timeoutId = setTimeout(
                () => {
                    if (term){
                        search();
                    }    
                }, 500 /*ms*/
            );
    
            return () => {
                clearTimeout( timeoutId );
            };
        }

    }, [term]);


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
