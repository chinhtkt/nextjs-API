import headerstyle from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerstyle.title}>
                <span>WebDev</span> New
            </h1>
            <p className={headerstyle.description}>loloolololololololol</p>
        </div>
    )
}

export default Header
