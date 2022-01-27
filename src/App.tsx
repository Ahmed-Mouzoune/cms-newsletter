import { Link, Outlet } from 'react-router-dom';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  );
}

export default App;
