import s from './../Dialogs.module.scss'

const Message = (props) => {
    return (
        <li className={s.message} key={s.message}>{props.content}</li>
    )
}

export default Message;