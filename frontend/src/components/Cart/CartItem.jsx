import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CardContext } from '../../context/CardProvider';



const CartItem = ({ cardItem }) => {

    const { removeFromCard } = useContext(CardContext);

    return (
        <tr className="cart-item">
            <td></td>
            <td className="cart-image">
                <img src={cardItem.img.singleImage} alt="" />
                <i className="bi bi-x delete-cart" data-id="1"
                    onClick={() => removeFromCard(cardItem.id)}
                ></i>
            </td>
            <td> {cardItem.name} </td>
            <td>$108.00</td>
            <td className="product-quantity"> {cardItem.quantity} </td>
            <td className="product-subtotal">$ {(cardItem.price.newPrice * cardItem.quantity).toFixed(2)} </td>
        </tr>
    );
};

export default CartItem;

CartItem.propTypes = {
    cardItem: PropTypes.object
}