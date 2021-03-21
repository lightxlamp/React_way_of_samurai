import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfilePage from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Nav></Nav>
            {/*<ProfilePage></ProfilePage>*/}
            <Dialogs></Dialogs>
            {/* Have questions about 'ProfilePage', should we move only content there. And left content-wrapper here? */}
        </div>
    );
}

export default App;
