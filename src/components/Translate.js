import { useState } from 'react';

import Convert from './Convert';
import Dropdown from './Dropdown';

const Translate = () => {
    const languageOptions = [
        { value: 'af', label:'Afrikaans' },
        { value: 'ar', label:'Arabic' },
        { value: 'de', label:'German' },
        { value: 'fr', label:'French' },
        { value: 'hi', label:'Hindi' },
    ];

    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={ e => setText(e.target.value) } />
                </div>
            </div>
            <Dropdown
                prompt="Select a language"
                options={languageOptions}
                selected={selectedLanguage}
                onSelectedChange={setSelectedLanguage}
            />
            <h3>Output</h3>
            <Convert language={selectedLanguage} text={text} />
        </div>
    );
}

export default Translate;
