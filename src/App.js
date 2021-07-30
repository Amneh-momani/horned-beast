import React from "react";
import Main from "./components/Main";
import Horned from "./components/data.json";
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
      click: 0
    };
  }

  modalData = (title, description, image_url, click) => {
    this.setState({
      title: title,
      image_url: image_url,
      description: description,
      click: click
    });
  };

  modalUpdateVisible = () => {
    this.setState({
      visible: !this.state.visible,
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
          click={this.state.click}
          modalUpdateVisible={this.modalUpdateVisible}
          modalData={this.modalData}
          select={this.props.selectHorn}
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
