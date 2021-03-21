import s from './Dialogs.module.scss'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
           <ul className={s.dialogs__list}>
               <li className={s.dialogs__item}>Matteo</li>
               <li className={s.dialogs__item}>Erick</li>
               <li className={s.dialogs__item + ' ' + s.active }>James</li>
               <li className={s.dialogs__item}>Anmary</li>
               <li className={s.dialogs__item}>Janet</li>
               <li className={s.dialogs__item}>Tilek</li>
               <li className={s.dialogs__item}>Mike</li>
               <li className={s.dialogs__item}>Samuel</li>
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