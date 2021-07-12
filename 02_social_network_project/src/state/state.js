// https://youtu.be/GW5PwlzXBDc?t=482 - Diagram

const linkStates = {
    active: 'active',
    inactive: 'inactive'
}

let state = {
    profilePage: {
        posts: [
            {id: 1, title: 'React vs Vue: What is the best choice for 2021?', likes: 78},        
            {id: 2, title: 'Isolated React component development environment with a living style guide', likes: 183},        
            {id: 3, title: 'GRID: A simple visual cheatsheet for CSS Grid Layout', likes: 1721}, 
        ]
    },
    dialogsPage: {
        messages: [
            {content: 'Morning', id: 1},
            {content: 'Call in 5 mins?', id: 2},
            {content: 'OK', id: 3},
        ],
        dialogs : [
            {name: 'Matteo', id: 1},
            {name: 'Erick', id: 2},
            {name: 'James', id: 3, state : linkStates.active},
            {name: 'Anmary', id: 4},
            {name: 'Janet', id: 5},
            {name: 'Tilek', id: 6},
            {name: 'Mike', id: 7},
            {name: 'Samuel', id: 8},
        ],
    }
}

export default state;