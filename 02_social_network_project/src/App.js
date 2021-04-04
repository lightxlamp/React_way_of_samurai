import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfilePage from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App(props) {
    return (
        <Router>
            <div className="App">
                <Header></Header>
                <Nav></Nav>
                <div className="App-main">  
                    <Route path="/dialogs"><Dialogs DialogsData={props.AppState.dialogs} MessagesData={props.AppState.messages}></Dialogs></Route>
                    <Route path="/profile"><ProfilePage PostsData={props.AppState.posts}></ProfilePage></Route>
                    <Route path="/news"><News></News></Route>
                    <Route path="/music"><Music></Music></Route>
                    <Route path="/settings"><Settings></Settings></Route>

                    {/* <Route path="/dialogs" render={
                        () => <Dialogs DialogsData={props.DialogsData} MessagesData={props.MessagesData} />
                    }/> */} 

                    {/* <Route path="/dialogs">  /dialogs/spam/deleted - handled by this Route. as well. To avoid this we use 'exact'
                        <Dialogs></Dialogs>
                    </Route> */}
                </div>

                {/* Have question about 'ProfilePage', should we move only content there. And left content-wrapper here? */}
                {/* Yes, I was correct XD <3. We did this way later  */}
            </div>
        </Router>
    );
}

export default App;
