import React from 'react';
import './App.css';
import Header from './component/Header';
import GoalList from './component/GoalList';

function App() {
  return (
    <div className="App">
      <Header />
      <GoalList />
    </div>
  );
}

export default App;