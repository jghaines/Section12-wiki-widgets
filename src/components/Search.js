import { useState, useEffect } from "react";

//import axios from 'axios';

const Search = (props) => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect( () => {
        setResults([
            { title: `Title ${term} #1`, snippet: 'Snippet', pageId: 5311, },
            { title: `Title ${term} #2`, snippet: '<em>Snippet</em>', pageId: 5312, },
        ]);
    

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
        }
        if (term){
            search();
        }
*/
    }, [term]);


    const renderedResults = results.map( result => {
        return (
            <div key={result.pageId} className="item">
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
