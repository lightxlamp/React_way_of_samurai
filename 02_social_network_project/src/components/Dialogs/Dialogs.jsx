import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let DialogItems = props.DialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} state={dialog.state}/>;
    })

    let Messageitems = props.MessagesData.map(message => {
        return <Message content={message.content}></Message>;
    })
    
    return (
        <div className={s.dialogs}>
           <ul className={s.dialogs__list}>
               {/* {
                   ['Array', 'printed', 'automatically']
               } */}
                { DialogItems }
           </ul>

           <ul className={s.messages}>
               { Messageitems }
           </ul>
        </div> 
    )
}

export default Dialogs;