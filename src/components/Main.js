import React from "react";
import HornedBeasts from "./HornedBeasts";
import Hornsform from "./Hornsform";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeFilter: 0,
      hornFilter: -1,
    };
  }
  changeFilter = (changeFilter) => {
    console.log('coming from main');
    this.setState({
      changeFilter: changeFilter,
    });
  };
  render() {
    console.log(this.state.changeFilter);
    return (
      <main>
        <Hornsform changeFilter={this.changeFilter} />

        {this.props.Horned.filter((element) => {
            if (this.state.changeFilter === element.horns) {
              return element;
            } else if (this.state.changeFilter === 0) {
              return element;
            }
          })
          .map((beast) => {
            return (
              <HornedBeasts
                title={beast.title}
                image_url={beast.image_url}
                description={beast.description}
                keyword={beast.keyword}
                horns={beast.horns}
                hornFunction={this.props.hornedBeastsFav}
                favBeast={this.props.favBeast}
                updatingShow={this.props.updatingShow}
                dataModeling={this.props.dataModeling}
              />
            );
          })}
      </main>
    );
  }
}

export default Main;
