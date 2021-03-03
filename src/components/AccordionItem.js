import React from "react";

const AccordionItem = (props) => {
    return (
        <React.Fragment>
            <div
                className="active title"
                onClick={props.onItemClick}
            >
                <i className="dropdown icon"></i>
                {props.item.title}
            </div>
            <div className="active content">
                <p>{props.item.content}</p>
            </div>
        </React.Fragment>
    );
};

export default AccordionItem;
