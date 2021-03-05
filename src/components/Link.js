const Link = ({ href, children, className }) => {
    const onClick = event => {
        event.preventDefault();
    };

    return (
        <a href={href} onClick={onClick} className={className}>
            {children}
        </a>
    );
}

export default Link;
