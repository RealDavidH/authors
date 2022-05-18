import {Route, Routes} from 'react-router-dom'
import React from 'react'
import Main from './components/Main';
import Form from './components/Form';
import Edit from './components/Edit';

function App() {
  return (
    <div>
      <h1 className='w-50 m-auto'>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/add/author' element={<Form />}/>
        <Route path='/edit/:id' element={<Edit />}/>
      </Routes>
    </div>
  );
}

export default App;
