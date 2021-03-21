import s from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={s.App__nav}>
            <ul className={s.menu}>
                {/* two classes */} 
                <li className={`${s.item} ${s.active}`}>
                    <a href="/profile">Profile</a>
                </li>     
                <li className={s.item}>
                    <a href="/dialogs">Messages</a>
                </li>       
                <li className={s.item}>
                    <a href="/news">News</a>
                </li>      
                <li className={s.item}>
                    <a href="/music">Music</a>
                </li>       
                <li className={s.item}>
                    <a href="/settings">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;