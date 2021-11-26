import React from 'react';
import './App.css';
import UserList from './Ccomponets';

class App extends React.Component {
  render() {

    let clientsList = this.props.clientsList;

  return (
    <div className="App">
      
      <header className="App-header">
        <h1 className='h1color'>Search for a client in the English alphabet</h1>
    
        <p className="clientsList">{this.props.clientsList}</p>
        <UserList/>
        
      </header>

    </div>
  );
}
}
export default App;
