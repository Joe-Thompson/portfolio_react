import './css/index.css';
import Landing from './components/Landing';
import Nav from "./components/Nav";
import ContactForm from "./components/Contact_Form";

function App() {
  return (
    <div className="App">
        <Nav />
        <Landing />
        <ContactForm />
    </div>
  );
}

export default App;
