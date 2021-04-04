import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let DialogItems = props.DialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} state={dialog.state}/>
    })

    let MessageItems = props.MessagesData.map((message) => {
        return <Message content={message.content} key={message.id} />
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
               { MessageItems }
           </ul>
        </div> 
    )
}

export default Dialogs;