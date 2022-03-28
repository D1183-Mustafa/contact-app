
import { useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import List from './components/list/List';

function App() {
  const [contacsList, setContactList] = useState([]);
  console.log(contacsList);
  return (
    <div>
      <List contacsList={contacsList}/>
      <Form setContactList={setContactList} contacsList={contacsList}/>
    </div>
  );
}

export default App;
