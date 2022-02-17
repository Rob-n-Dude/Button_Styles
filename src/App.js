import { useState } from 'react';
import './App.css';
import { Controls } from './Controls';
import { Page } from './page';

function App() {
  const [page, setPage] = useState(0);

  return (
    <>
      <Page pageNum={page} />
      <Controls setPage={setPage} />
    </>
  );
}

export default App;
