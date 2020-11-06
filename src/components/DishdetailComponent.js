import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props) {
        super(props);
    }

    // mapComment(comments) {
    //     comments.map((phrase) => {
    //         return (
    //             <div key={phrase.id}>
    //                 <ul className="list-unstyled">
    //                     <li>{phrase.comment}</li>
    //                     <li>-- {phrase.author} {phrase.date}</li>
    //                 </ul>
    //             </div>
    //         )
    //     })
    // }

    renderComments(comments) {

        const mapComment = comments.map((phrase) => {
            return (
                <div key={phrase.id}>
                    <ul className="list-unstyled">
                        <li>{phrase.comment}</li>
                        <li>-- {phrase.author} {phrase.date}</li>
                    </ul>
                </div>
            );
        });

        if(comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    {mapComment}
                    {/* {this.mapComment(comments)} */}
                    {/* <ul className="list-unstyled">
                        <li>{comments[0].comment}</li>
                        <li>-- {comments[0].author} {comments[0].date}</li>
                        <li>{comments[1].comment}</li>
                        <li>-- {comments[1].author} {comments[1].date}</li>
                        <li>{comments[2].comment}</li>
                        <li>-- {comments[2].author} {comments[2].date}</li>
                        <li>{comments[3].comment}</li>
                        <li>-- {comments[3].author} {comments[3].date}</li>
                        <li>{comments[4].comment}</li>
                        <li>-- {comments[4].author} {comments[4].date}</li>
                    </ul> */}
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
                        {this.renderComments(dish.comments)} {/*  */}
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
        const detail = this.props.detailDish;

        return (
            <div>
                {this.renderDish(detail)} {/* info dish props is passed to being rendered */}
            </div>
        );
    }
}

export default DishDetail;