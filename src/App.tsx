import { Route, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import Nav from './components/Nav';
import Home from './pages/Home';
import SavedRepos from './pages/SavedRepos';


const App: Component = () => {
  return (
    <div class='container mx-auto'>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/savedrepos"} element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export default App;
