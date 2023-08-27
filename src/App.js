import './App.css';
import React from 'react';
import Comments from './components/Comments';
function App() {
  return (
    <div className="App">
     <Comments CurrentUserId="1"></Comments>
    </div>
  );
}

export default App;
