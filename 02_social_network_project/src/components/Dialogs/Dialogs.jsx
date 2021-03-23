import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.scss'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
           <ul className={s.dialogs__list}>
               <li className={s.dialogs__item}><NavLink to="/dialogs/1">Matteo</NavLink></li>
               <li className={s.dialogs__item}><NavLink to="/dialogs/2">Erick</NavLink></li>
               <li className={s.dialogs__item + ' ' + s.active }><NavLink to="/dialogs/3">James</NavLink></li>
               <li className={s.dialogs__item}><NavLink to="/dialogs/4">Anmary</NavLink></li>
               <li className={s.dialogs__item}><NavLink to="/dialogs/5">Janet</NavLink></li>
               <li className={s.dialogs__item}><NavLink to="/dialogs/6">Tilek</NavLink></li>
               <li className={s.dialogs__item}><NavLink to="/dialogs/7">Mike</NavLink></li>
               <li className={s.dialogs__item}><NavLink to="/dialogs/8">Samuel</NavLink></li>
           </ul>
           <ul className={s.messages}>
                <li className={s.message}>Morning</li>
                <li className={s.message}>Call in 5 mins?</li>
                <li className={s.message}>OK</li>
           </ul>
        </div>
        // Testing two different naming approaches. Will see what code looks better
    )
}

export default Dialogs;