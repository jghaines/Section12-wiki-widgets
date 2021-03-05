import { useState } from "react";

import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Route from './Route';
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

  return (
    <div>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          prompt="Select a colour"
          options={colourOptions}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
}

export default App;
