// Pay attention.. it works without 'import React from "react"' like in lesson (dec 2018 =)
import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={s.App__header}>
            <img src='https://www.teamunify.com/casnsta/team-logo/default/stas-blue_059474-tsm-small.png'></img>
        </header>
    )
}

export default Header;