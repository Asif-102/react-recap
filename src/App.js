import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks,setNayoks]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setNayoks(data))
  },[])
  // const nayoks = [{name:'Jasim',age:56},{name:'DepJol',age:61},{name:'BappaRaz',age:43},{name:'Omar Sani',age:48},{name:'Alamgir',age:68}];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nayok =><Nayok name={nayok.name} key={nayok.id} age={nayok.age}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count,setCount] = useState(0);
  return(
    <div>
      <button onClick={()=>setCount(count + 1)}>Add Movie</button>
      <h5>Number of movies: {count}</h5>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movie I have acted:{props.movies} </h4>
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
