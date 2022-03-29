
import { useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import Lists from './components/list/List';

function App() {
  const [contacsList, setContactList] = useState([{name:"Mustafa A.", phone_number:"0555 555 55 55"},{name:"Kemal A.", phone_number:"0531 444 44 44"},{name:"Ahmet L.", phone_number:"0531 333 33 33"},{name:"Özgür Y.", phone_number:"0531 222 22 22"}]);
  console.log(contacsList);
  return (
    <div className='app'>
      <Lists contacsList={contacsList}/>
      <Form setContactList={setContactList} contacsList={contacsList}/>
    </div>
  );
}

export default App;
