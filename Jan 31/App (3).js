import logo from './logo.svg';
import './App.css';
function App() {
  const button = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => button("You Clicked ME !")}>Click me!</button>
  );
}


export default App;
