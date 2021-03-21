import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfilePage from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Nav></Nav>
            <div className="App-main">  
                <Router>
                    <Route path="/dialogs" >
                        <Dialogs></Dialogs>
                    </Route>
                    <Route path="/profile">
                        <ProfilePage></ProfilePage>
                    </Route>
                    <Route path="/news">
                        <News></News>
                    </Route>
                    <Route path="/music">
                        <Music></Music>
                    </Route>
                    <Route path="/settings">
                        <Settings></Settings>
                    </Route>
                </Router>
            </div>

            {/* Have question about 'ProfilePage', should we move only content there. And left content-wrapper here? */}
            {/* Yes, I was correct XD <3. We did this way later  */}
        </div>
    );
}

export default App;
