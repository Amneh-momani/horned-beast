import React from 'react';
import Horned from '../assest/horned.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class HornedBeasts extends React.Component {
    
    constructor(props) {
        super(props);
        this.image_url=image_url;
         this.title=title;
         this.description=description;
         this.keyword=keyword;
         this.horns=horns;


        this.state = {
            click: 0
        };
    }
        ClickedImg = () => {
            console.log(this.state.click);
            this.setState({
                click: this.state.click + 1
            });

    }

    render() {
        console.log(this.props);
        return (
              
            JSON.parse(Horned).map(imag => 

                <Card style={{ width: '18rem' }} key={this.props.keyword}>
                    <Card.Img variant="top" src={this.props.image_url} alt={this.props.horns}  title={this.props.keyword} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description} {this.state.click}
                        </Card.Text>
                        <Button onClick={this.ClickedImg} variant="primary">👋 Give {this.props.keyword} a click</Button>
                    </Card.Body>
                </Card>
            )
        )
        
    }

}


export default HornedBeasts;