// import logo from './logo.svg';
// import './App.css';

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

// import React, { useState, useEffect } from "react";

// const App = props => {
//  const [ users, setUsers ] = useState([]);
//  useEffect(() => {
//  fetch('https://reqres.in/api/users?page=2')
// .then(res => res.json())
// .then(json => {
//  setUsers(json.data);
//  });
//  }, []);
//  return (
//  <ul>
//  {users.map(u => <li key={u.id}>{u.first_name}</li>)}
//  </ul>
//  );
// }
// export default App;

//GET

import React, { useState } from "react";
const App = props => {
  const [users, setUsers] = useState([]);
  const add = () => {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ first_name: 'Ei Thiri' })
    }).then(res => res.json()).then(tom => {
      setUsers([...users, tom]);
    });
  }
  return (
    <div>
      <ul>
        {users.map(u =>
          <li key={u.id}>{u.first_name}</li>)}
      </ul>
      <button onClick={add}>New User</button>
    </div>
  );
}
export default App;

//Data