import { useState } from "react";

import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';


const items = [
  {
    title: 'Item #1',
    content: 'Content of item',
  },
  {
    title: 'Item #2',
    content: 'Content of item',
  },
];

const colourOptions = [
  { value: 'red', label:'Red' },
  { value: 'green', label:'Green' },
  { value: 'blue', label:'Blue' },
];

function App() {
  const [selected, setSelected] = useState(colourOptions[0]);

  // eslint-disable-next-line
  const _ignore = <Accordion items={items} />; 
  // eslint-disable-next-line
  const __ignore = <Search />;
  // eslint-disable-next-line
  const ___ignore = <Dropdown
    prompt="Select a colour"
    options={colourOptions}
    selected={selected}
    onSelectedChange={setSelected}
  />
;


  return (
    <Translate />
  );
}

export default App;
