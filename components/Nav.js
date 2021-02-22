import navstyles from '../styles/Nav.module.css'
import Link from 'next/link'
const Nav = () => {
    return (
        <div>
            <nav className={navstyles.nav}>
            <ul>
                <li>
                <Link href='/'><a>Home</a></Link>
                </li>
                <li>
                <Link href='/about'><a>About</a></Link>
                </li>
            </ul>

            </nav>
        </div>
    )
}

export default Nav
