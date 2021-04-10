import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="">
        <text>Sign Up</text>
          <div>
            <input type="text" placeholder="Username"/>
          </div>
          <div>
            <input type="text" placeholder="Password"/>
          </div>
          <div>
            <input type="text" placeholder="Confirm Password"/>
          </div>
          <div>
            <button>Create Account</button>
          </div>
          <text>You have already <a href="#">an Account</a></text>
        </form>
      </header>
    </div>
  );
}

export default App;
