import { useState } from 'react';
import Fond from './fond/fond'; // Import du composant Fond (majuscule)
import Header from './header/header';
import './index.css'

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Fond />
      <main>
        <Header></Header>
      </main>
    </>
  );
}

export default App;
