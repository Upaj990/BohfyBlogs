import './App.css';
import Navbar from './components/Navbar';
import Contactform from './components/Contactform';

function App() {
  return (
    <>
    
<Navbar title="Blog" aboutText="About us"/>
<div className="container">
  <Contactform heading="Write your content here..."/>
</div>

    </>
  );
}

export default App;
