import React from "react";
import Main from "./components/Main";
import Horned from "./components/horned.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast ";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: null,
      image_url: null,
      description: null,
      count: 0,
    };
  }

  modalData = () => {
    this.setState({
      title: null,
      image_url: null,
      description: null,
      count: 0,
    });
  };

  modalUpdateVisible = () => {
    this.setState({
      visible: this.state.visible
    });
  };

  render() {
    return (
      <div>
        <SelectedBeast
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          visible={this.state.visible}
          modalUpdateVisible={this.modalUpdateVisible}
          modalData={this.modalData}
        />
        <Header />
        <Main
          data={Horned}
          modalUpdateVisible={this.modalUpdateVisible}
          modalData={this.modalData}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
