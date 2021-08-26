import './App.css';
import Header from './component/header';
import LetsClick from './component/letsClick';
import Users from './component/users';

function App() {
  return (
    <div className="App">
      <h1 className='app_c'>Welcome !!!</h1>
      <Users />
      <Header />
      <LetsClick />
    </div>
  );
}

export default App;
