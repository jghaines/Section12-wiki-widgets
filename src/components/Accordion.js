import AccordionItem from './AccordionItem';

const Accordion = (props) => {
    const renderedItems = props.items.map( (item, i) => {
        return (
            <AccordionItem
                key={`item-${i}`}
                item={item}
            />);
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}

export default Accordion;
