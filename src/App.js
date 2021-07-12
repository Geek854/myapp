import logo from './logo.svg';
import './App.css';

function Message(props){
  return <p className="Message_border">Message - {props.text} </p>  
}
function App() {
    return ( <div className = "App">
        <header className = "App-header" >
        <img src = { logo }className = "App-logo"alt = "logo" />
        <p> Edit < code > src / App.js </code> and save to reload.</p >
        <a className = "App-link" href = "https://reactjs.org" target = "_blank" rel = "noopener noreferrer" > Learn React </a>    
        <Message text="Welcome!"/>
        </header> 
        </div>
    );
}
export default App;