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

let DialogsData = [
    {name: 'Matteo', id: 1},
    {name: 'Erick', id: 2},
    {name: 'James', id: 3, state : states.active},
    {name: 'Anmary', id: 4},
    {name: 'Janet', id: 5},
    {name: 'Tilek', id: 6},
    {name: 'Mike', id: 7},
    {name: 'Samuel', id: 8},
];

let MessagesData = [
    {content: 'Morning', id: 1},
    {content: 'Call in 5 mins?', id: 2},
    {content: 'OK', id: 3},
]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
           <ul className={s.dialogs__list}>
               <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} state={DialogsData[0].state}/>
               <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
               <DialogItem name={DialogsData[2].name} id={DialogsData[3].id}/>
           </ul>

           <ul className={s.messages}>
                <Message content={MessagesData[0].content}></Message>
                <Message content={MessagesData[1].content}></Message>
           </ul>
        </div> 
    )
}

export default Dialogs;