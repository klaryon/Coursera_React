import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.detailDish.image} alt={this.props.detailDish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.detailDish.name}</CardTitle>
                            <CardText>{this.props.detailDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <ListGroup>
                        <ListGroupItem>{this.props.detailDish.comments[0].comment}</ListGroupItem>
                        <ListGroupItem>{this.props.detailDish.comments[1].comment}</ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        );
    }
}

export default DishDetail;