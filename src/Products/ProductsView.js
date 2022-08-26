import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCart } from '../store/cart';
import AddCartHelper from './AddCartHelper';

const ProductsView = ({ products, auth, lineItems, addToCart }) => {
    const history = useHistory();
    return (
        <section className="main">
            <button>Add New Product</button>
            <ul className="products-list">
                {
                    products.map(product => {
                        return (
                            <li key={ product.id }>
                                <div>
                                    <img src={ product.imgUrl } width='240' height='160'/>
                                </div>
                                <Link to={`/products/${product.id}`}>{ product.name }</Link><br />
                                ${ product.price }<br />
                                <AddCartHelper addToCart={ addToCart } product={ product } lineItems={ lineItems }/>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
};
const mapState = state => {
    return {
        auth: state.auth,
        products: state.products,
        lineItems: state.cart.lineItems
    }
};
const mapDispatch = dispatch => {
    return {
        addToCart: (product, quantity) => {
            dispatch(updateCart(product, quantity));
        }
    }
};
export default connect(mapState, mapDispatch)(ProductsView);