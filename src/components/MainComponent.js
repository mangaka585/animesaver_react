import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import Header from './Header/HeaderComponent';
import Footer from './Footer/FooterComponent';
import Home from './Home/HomeComponent.js';
import { postComment, fetchComments, fetchLeaders, postFeedback, fetchAnimelist } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        comments: state.comments,
        animelist: state.animelist
    }
}

const mapDispatchToProps = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    fetchAnimelist: () => { dispatch(fetchAnimelist())},
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    postFeedback: (firstname, lastname, tel, email) => dispatch(postFeedback(firstname, lastname, tel, email))
});

class Main extends Component {

    componentDidMount() {
        this.props.fetchComments();
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