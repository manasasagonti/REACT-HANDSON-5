import logo from './logo.svg';
import './App.css';
import PureCompo from './PureCompo';
import HOCCall from './HOCCall';
import HOC from './HOC';

function App() {
  return (
    <div className="App">
      
      <PureCompo />
      <HOC />
      <HOCCall value={HOC}  />
       {/* <HOCCall value = {HOC} />  */}
    </div>
  );
}

export default App;
