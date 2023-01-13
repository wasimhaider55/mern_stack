import Navebar from './Navebar'
import Home from './Home';

const App = () => {
  return (
    <div className="App">
        <Navebar/>
        <div className="content">
            <Home />
        </div>
        </div>
  );
}

export default App