import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props) {
        super(props);
    }

    renderComments(comments) { /* we receive an array of objects */
        const listComment = comments.map((phrase) => {
            return (
                <ul className="list-unstyled" key={phrase.id}>
                    <li>{phrase.comment}</li>
                    <li>-- {phrase.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(phrase.date)))}</li>
                </ul>
            );
        });

        if(comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    {listComment}
                 </div>
            )
        } 
        else {
            return (
                <div></div>
            );
        }
    }

    renderDish(dish) { 
        if(dish != null) { /* if there is a selected dish, then it will render */ 
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)} {/* we select comments : array of objects */}
                      </div>
                </div>
            );
        } 
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const detail = this.props.detailDish; /* we receive props from Menu Component */

        return (
            <div>
                {this.renderDish(detail)} {/* info dish props is returned to be rendered */}
            </div>
        );
    }
}

export default DishDetail;