import { Routes, Route, Navigate } from 'react-router-dom';
import Presskit from './Presskit';

function App() {
  return (
    <>
      <Routes>
        <Route path="presskit" element={<Presskit />} />
        <Route path="*" element={<Navigate to="presskit" />} />
      </Routes>
    </>
  );
}

export default App;
