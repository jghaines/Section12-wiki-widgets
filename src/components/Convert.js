import { useState, useEffect } from 'react';

import axios from 'axios';

const GOOGLE_API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'; // provided by Stephen Grider for Referer localhost:3000 // cspell-disable-line

const Convert = ({ language, text }) => {
    const [debouncedText, setDebouncedText] = useState(text);
    const [translatedText, setTranslatedText] = useState('');

    useEffect( () => {        
        const debounce = () => setDebouncedText(text);
        const timerId = setTimeout( debounce, 500 /*ms*/);
        return () => clearTimeout(timerId, debounce);
    }, [text]);

    useEffect( () => {
        const doTranslation = async () => {
            const { data } = await axios.post( "https://translation.googleapis.com/language/translate/v2",
                {/*no body*/},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: GOOGLE_API_KEY,
                    }
                }
            );
            setTranslatedText(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">
                {translatedText}
            </h1>
        </div>
    );
}

export default Convert;

