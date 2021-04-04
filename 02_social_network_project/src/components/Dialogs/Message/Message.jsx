import s from './../Dialogs.module.scss'

const Message = (props) => {
    return (
        <li className={s.message} key={props.content}>{props.content}</li>
    )
}

export default Message;