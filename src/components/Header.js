import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" key="/" className="item">
                Accordion
            </Link>
            <Link href="/dropdown" key="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/search" key="/search" className="item">
                Search
            </Link>
            <Link href="/translate" key="/translate" className="item">
                Translate
            </Link>
        </div>
    )
}

export default Header;
