import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Jasim','DepJol','BappaRaz'];
  return (
    <div className="App">
      <Nayok name={nayoks[0]}></Nayok>
      <Nayok name="Sakib Khan"></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <Nayok name={nayoks[1]} age="56"></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function Nayok(props){
  const nayokStyle={
    border:'2px solid purple',
    margin:'20px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayak-{props.name}</h1>
      <h3>I have done 5 movies in {props.age || 30} years</h3>
    </div>
  )
}

export default App;
