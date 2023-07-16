
import './App.css';
import { Component } from 'react';
import CardList from './components/card_list/card_list.component'
import {SearchBar }from './components/search_bar/searchBar.component'
class App extends Component{
   constructor(){
    super()

    this.state={monsters: [],
    searchField:""}
   } 
   componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
  
    .then(response => this.setState({monsters: response}))
  }
  

render() {
  const {monsters, searchField} = this.state;
  const filterMonsters= monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return(
    <div>
      <h1>Monsteres Rolodex</h1>
      <SearchBar placeholder={'search'} changeHandler={e => this.setState({searchField: e.target.value})} />
      <CardList monsters={filterMonsters} />
    </div>
  )
};


}


export default App;






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
