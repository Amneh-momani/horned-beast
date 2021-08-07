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
      title: '',
      image_url: '',
      description: '',
      horn: '',
      keyword: '',
      favoriteBeast: 0,
      shown: false,
    };
  }

  dataModeling = (
    title,
    image_url,
    description,
    horn,
    keyword,
    favoriteBeast
  ) => {
    this.setState({
      title: title,
      image_url: image_url,
      description: description,
      horn: horn,
      keyword: keyword,
      favoriteBeast: favoriteBeast,
    });
  };

  updatingShow = () => {
    this.setState({
      shown: !this.state.shown,
    });
  };


  render() {
    return (
      <div>

        <Header />
        <SelectedBeast
          shown={this.state.shown}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          favoriteBeast={this.state.favoriteBeast}
          updatingShow={this.updatingShow}
        />
        <Main
          hornData={Horned}
          favBeast={this.state.favoriteBeast}
          updatingShow={this.updatingShow}
          dataModeling={this.dataModeling}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
