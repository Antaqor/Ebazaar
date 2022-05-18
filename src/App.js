import './styles/App.css';
import Header from "./containers/Header";
import Slider from "./containers/Slider";
import Category from "./containers/Category";
import Products from "./containers/Products";
import Footer from "./containers/Footer";
import Topbar from "./containers/Topbar";
import Bottom from "./containers/Bottom";

function App() {
  return (
    <div className="App">
        <Topbar/>
        <Header/>
        <Slider/>
        <Category/>
        <Products/>
        <Footer/>
        <Bottom/>
    </div>
  );
}

export default App;
