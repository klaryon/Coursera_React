import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    function RenderComments({comments}) { /* we receive an array of objects */
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

    function RenderDish({dish}) { 
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    const DishDetail = (props) => {
        if(props.dish != null) { /* if there is a selected dish, then it will render */ 
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.dish.comments} />
                        </div>
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

export default DishDetail;