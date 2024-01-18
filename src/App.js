import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SeedViewer from './components/SeedViewer';
import Seed from './Seed';
import MouseToSeed from './MouseToSeed';
import PasswordEditor from './components/PasswordEditor';
import Hero from './components/Hero';
import Generator from './Generator';

function App() {
  const [seedText, setSeedText] = useState('\n\n\n                Move mouse here to seed \n\n\n')
  let [password, setPassword] = useState('');


  useEffect(() => {
    let seed = new Seed(128);
    let generator = new Generator(seed);
    new MouseToSeed(seed, setSeedText);
  }, []);          

  function onPEClick() {
    let generator = new Generator();
    let password = generator.generate();
    setPassword(password);
    navigator.clipboard.writeText(password);
  }

  return (
    <div className="App">
      <Hero/>
      <SeedViewer seed={seedText}/>
      <PasswordEditor onClick={onPEClick} password={password}/>
    </div>
  );
}

export default App;
