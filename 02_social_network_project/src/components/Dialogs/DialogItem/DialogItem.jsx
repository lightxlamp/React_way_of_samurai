import s from './../Dialogs.module.scss'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    let isActive = props.state === 'active' ? s.active : '';
    let classes = s.dialogs__item + ' ' + isActive;
    return (
        <li className={classes} key={props.name}><NavLink to={path}>{props.name}</NavLink></li>
    )
}

DialogItem.propTypes = {
    variant: PropTypes.oneOf([ 'active', 'inactive'])
};

export default DialogItem;