import Accordion from './Accordion';

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
  return (
      <Accordion items={items} />
  );
}

export default App;
