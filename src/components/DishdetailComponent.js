import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../App.css';


class DishDetail extends Component{
    
    render(){
        const {dish} = this.props;
        return (
            <div className="container">
                {this.renderDish(dish)}
            </div>
        );
    }

    renderDish=(dish)=>{
        if(dish!=null){
            return(
                <React.Fragment>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody >
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </React.Fragment>
            )
        }else{
            return(<div></div>)
        }
    }

    renderComments = (comments) =>{
        if(comments!=null){
            const com = comments.map(co=>{
                return(
                    <React.Fragment>
                        <li>{co.comment}</li><br />
                        <li>--{co.author}, {this.formatDate(co.date)}</li><br />
                    </React.Fragment>
                )
            })
            return(
                <ul className="list-unstyled">
                    {com}
                </ul>
            )
        }else{
            return(
                <div></div>
            )
        }
    }

    formatDate(date){
        const option = {year: 'numeric', month: 'short', day: '2-digit'};
        const date1 = new Date(date)
        const newDate = date1.toLocaleDateString("en-US",option)
        return newDate;
        // {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(date.parse(date)))}
    }
}

export default DishDetail;