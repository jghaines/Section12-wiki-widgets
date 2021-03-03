import Accordion from './Accordion';
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

function App() {
  // eslint-disable-next-line
  const ignore = <Accordion items={items} />; 

  return (
      <Search />
  );
}

export default App;
