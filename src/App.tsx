import React, { useState } from 'react';
import './App.css';
import { ListContainer, ListProps } from './components/List/List';


function App() {
  return (
    <div className='main-container'>
      <div className='title'>Daily To-Do List</div>
      <ListContainer title='Home' list={[]}/>
    </div>
  );
}

export default App;
