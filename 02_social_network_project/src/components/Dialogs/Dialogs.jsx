import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.scss'
import PropTypes from 'prop-types';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    let isActive = props.state === 'active' ? s.active : '';
    let classes = s.dialogs__item + ' ' + isActive;
    return (
        <li className={classes}><NavLink to={path}>{props.name}</NavLink></li>
    )
}

const states = {
    active: 'active',
    inactive: 'inactive'
}

DialogItem.propTypes = {
    variant: PropTypes.oneOf([ 'active', 'inactive']).isRequired
};

const Message = (props) => {
    return (
        <li className={s.message}>{props.content}</li>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
           <ul className={s.dialogs__list}>
               <DialogItem name="Matteo" id="1" state/>
               <DialogItem name="Erick" id="2"/>
               <DialogItem name="James" id="3" state={states.active}/>
               <DialogItem name="Anmary" id="4"/>
               <DialogItem name="Janet" id="5" />
               <DialogItem name="Tilek" id="6"/>
               <DialogItem name="Mike" id="7"/>
               <DialogItem name="Samuel" id="8"/>
           </ul>

           <ul className={s.messages}>
                <Message content="Morning"></Message>
                <Message content="Call in 5 mins?"></Message>
                <Message content="OK"></Message>
           </ul>
        </div>
        // Testing two different naming approaches. Will see what code looks better
    )
}

export default Dialogs;