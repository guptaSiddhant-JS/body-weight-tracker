
import './App.css';
import NameHeader from './components/NameHeader.jsx'
import Seprate from './components/Seprate'
import NewWeight from './components/NewWeight/NewWeight.jsx'
function App() {
  return (
    <div>
        <NameHeader />
        <Seprate/>

        <div>
           <NewWeight />
        </div>
    </div>
   
  );
}

export default App;
