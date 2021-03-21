import s from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={s.App__nav}>
            <ul className={s.menu}>
                <li className={s.item}>Profile</li>
                <li className={s.item}>Messages</li>
                <li className={s.item}>News</li>
                {/* two classes */}
                <li className={`${s.item} ${s.active}`}>Music</li>
                <li className={s.item}>Settings</li>
            </ul>
        </nav>
    )
}

export default Nav;