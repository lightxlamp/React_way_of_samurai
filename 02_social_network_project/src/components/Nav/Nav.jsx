import { NavLink } from 'react-router-dom'
import s from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={s.App__nav}>
            <ul className={s.menu}>
                {/* two classes */} 
                <li className={`${s.item} ${s.active}`}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>   
                    {/* changes link in address bar preventDefault's redirection */}
                    {/* Instead of <a href="/profile">Profile</a> */}
                </li>     
                <li className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>  
                </li>       
                <li className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>  
                </li>      
                <li className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>  
                </li>       
                <li className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>  
                </li>
            </ul>
        </nav>
    )
}

export default Nav;