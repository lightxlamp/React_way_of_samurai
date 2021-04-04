import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

let MessagesData = [
    {content: 'Morning', id: 1},
    {content: 'Call in 5 mins?', id: 2},
    {content: 'OK', id: 3},
]

// let DialogItems_ = [
//     <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} state={DialogsData[0].state}/>,
//     <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} state={DialogsData[1].state}/>,
//     <DialogItem name={DialogsData[2].name} id={DialogsData[3].id} state={DialogsData[2].state}/>
// ]

 
let Messageitems = MessagesData.map(message => {
    return <Message content={message.content}></Message>;
})

const Dialogs = (props) => {
    let DialogItems = props.DialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} state={dialog.state}/>;
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