import { useState } from "react";

import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';

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
  // eslint-disable-next-line
  const _ignore = <Accordion items={items} />; 
  // eslint-disable-next-line
  const __ignore = <Search />;

  const [selected, setSelected] = useState(colourOptions[0]);

  return (
      <Dropdown
        prompt="Select a colour"
        options={colourOptions}
        selected={selected}
        onSelectedChange={setSelected}
      />
  );
}

export default App;
