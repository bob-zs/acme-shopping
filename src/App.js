
import React from 'react';
import { connect } from 'react-redux';

import { fetchCart, exchangeToken, logout, fetchProducts, fetchUsers, fetchUserOrders } from './store';

import { Route } from 'react-router-dom';
import SignIn from './SignIn';
import UserCart from './Users/UserCart';
import UserProfile from './Users/UserProfile';
import UserProfileEdit from './Users/UserProfileEdit';
import UserCredentialsEdit from './Users/UserCredentialsEdit';
import ProductSpecificView from './Products/ProductSpecificView';
import ProductsView from './Products/ProductsView';
import UserCreateForm from './Users/UserCreateForm';
import OrderCompleted from './OrderCompleted';
import UserOrdersCompletedDetail from './Users/UserOrdersCompletedDetail';
import WillCompleteOrder from './WillCompleteOrder';
import Header from './Header';
import ProductForm from './Products/ProductForm';
import UsersList from './Users/UsersList';

class App extends React.Component {
  componentDidMount() {
    this.props.exchangeToken();
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.auth.id && this.props.auth.id) {
      this.props.loadData();
    }
  }
  render() {
    const { auth } = this.props;
    return (
      <main>
        {auth.id ? (
          <div id="main-app">
            <Route path="/:view?" component={Header} />
            <div>

              <Route exact path='/' component={ UserCart } />
              <Route exact path='/products' component={ ProductsView } />
              <Route exact path='/products/:id' component={ ProductSpecificView } />
              <Route path='/cart' component={ UserCart } />
              <Route path='/profile' component={ UserProfile } />
              <Route path='/profile' component={ UserProfileEdit } />
              <Route path='/profile' component={ UserCredentialsEdit } />
              <Route path='/profile' component={ UserCreateForm } />
              <Route path='/orders/willComplete' component={ WillCompleteOrder} />
              <Route path='/orders/:id/completed' component={ OrderCompleted } />
              <Route path='/profile/orders/:id' component={ UserOrdersCompletedDetail } />

              { auth.isAdmin ?
                <div>
                  <Route exact path='/products/:id' component={ ProductForm } />
                  <Route exact path='/products' component={ ProductForm } />
                  <Route exact path='/users' component={ UsersList } />
                </div> : null 
              }

            </div>
          </div>
        ) : (
          <Route exact path="/" component={SignIn} />
        )}
      </main>
    );
  }
}
const mapDispatch = (dispatch) => {
  return {
    exchangeToken: () => dispatch(exchangeToken()),
    loadData: () => {
      dispatch(fetchProducts());
      dispatch(fetchCart());
      dispatch(fetchUserOrders());
      dispatch(fetchUsers());

    },
  };
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, mapDispatch)(App);
