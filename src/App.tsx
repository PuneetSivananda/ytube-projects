import type { Component } from 'solid-js';
import Nav from './components/Nav';


const App: Component = () => {
  return (
    <div>
      <Nav />
      <h1 class='text-blue-300 text-3xl font-bold underline'>App Component</h1>
    </div>
  );
};

export default App;
