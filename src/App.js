import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  constructor(props) {
    super(props);
    this.state = {
      click: 20,
    };
  }

  getclickedImg = () => {
    this.setState({
      click: this.state.click - 1,
    });
  };
  return (
    <div>
      <Header />
      <Main /> {this.state.cookiesJar}
      <Footer />
    </div>
  );
}

export default App;
