import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const states = {
    active: 'active',
    inactive: 'inactive'
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

// let DialogItems_ = [
//     <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} state={DialogsData[0].state}/>,
//     <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} state={DialogsData[1].state}/>,
//     <DialogItem name={DialogsData[2].name} id={DialogsData[3].id} state={DialogsData[2].state}/>
// ]

let DialogItems = DialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} state={dialog.state}/>;
})
 
let Messageitems = MessagesData.map(message => {
    return <Message content={message.content}></Message>;
})

const Dialogs = (props) => {
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