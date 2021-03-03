import AccordionItem from './AccordionItem';

const Accordion = (props) => {
    const onItemClick = (index) => {
        console.log(index);
    }

    const renderedItems = props.items.map( (item, index) => {
        return (
            <AccordionItem
                key={`item-${index}`}
                item={item}
                index={index}
                onItemClick={() => onItemClick(index)}
            />);
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}

export default Accordion;
