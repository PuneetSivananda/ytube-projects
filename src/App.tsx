import { Route, Routes } from '@solidjs/router';
import { Component, createEffect, createSignal } from 'solid-js';
import Nav from './components/Nav';
import Home from './pages/Home';
import SavedRepos from './pages/SavedRepos';

const [userName, setUserName] = createSignal("PuneetSivananda")
const [repos, setRepos] = createSignal([])

createEffect(async () => {
  const result = await fetch(`https://api.github.com/users/${userName()}/repos?sort=created`)
  setRepos(await result.json())
})

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

export { userName, setUserName, repos }
export default App;
