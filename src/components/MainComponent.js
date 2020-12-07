import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import Header from './Header/HeaderComponent';
import Footer from './Footer/FooterComponent';
import Home from './Home/HomeComponent.js';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback, fetchAnimelist } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions,
        animelist: state.animelist
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => { dispatch(fetchDishes())},
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    fetchAnimelist: () => { dispatch(fetchAnimelist())},
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    postFeedback: (firstname, lastname, tel, email) => dispatch(postFeedback(firstname, lastname, tel, email))
});

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
        this.props.fetchAnimelist();
    }

    render() {

        return (
            <div>
                <Header />
                <Switch location={this.props.location}>
                    <Route path='/home' render={() => <Home animelist={this.props.animelist.animelist} />} />
                    <Redirect to='./home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));