import { useState } from 'react';
import Fond from './fond/fond'; // Import du composant Fond (majuscule)

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Fond />
      <main>
      </main>
    </>
  );
}

export default App;
