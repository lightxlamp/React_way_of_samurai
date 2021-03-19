import './App.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import ProfilePage from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <ProfilePage></ProfilePage>
      {/* Have questions about 'ProfilePage', should we move only content there. And left content-wrapper here? */}
    </div>
  );
}

export default App;
