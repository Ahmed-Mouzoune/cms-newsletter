import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { getLinks } from './SidebarData';

export default function Sidebar() {
    const links : any = getLinks();
    const test = () => {
    console.log('test');
    }
    return (
        <>
            <nav className="main-menu">
                <ul>
                    {links.map((link : any, i : number) => (
                        <li key={i}>
                            <Link
                                to={link.url}
                            >
                                <span className={`bi bi-${link.icon} icon-style`}></span>
                                <span className="nav-text">{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="logout">
                    <li>
                        <a href="#">
                            <span className="bi bi-box-arrow-in-left icon-style"></span><span
                                className="nav-text">
                                    Logout
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}