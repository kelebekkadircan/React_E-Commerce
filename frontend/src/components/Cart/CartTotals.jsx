import { useContext, useState } from "react";
import { CardContext } from "../../context/CardProvider";

const CartTotals = () => {

    const { cardItems } = useContext(CardContext);
    const [fastCargoChecked, setFastCargoChecked] = useState(false)

    const cardItemTotals = cardItems.map((item) => {
        const itemTotal = item.price.newPrice * item.quantity;

        return itemTotal
    })

    const subTotals = cardItemTotals.reduce((prev, current) => {
        return prev + current
    }, 0)

    // console.log(cardItemTotals);

    const cargoFee = 15;

    const cardTotals = fastCargoChecked ? (subTotals + cargoFee).toFixed(2) : subTotals.toFixed(2);


    return (
        <div className="cart-totals">
            <h2>Cart totals</h2>
            <table>
                <tbody>
                    <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td>
                            <span id="subtotal">${subTotals.toFixed(2)}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Shipping</th>
                        <td>
                            <ul>
                                <li>
                                    <label>
                                        Fast Cargo: $15.00
                                        <input type="checkbox" id="fast-cargo" checked={fastCargoChecked} onChange={() => setFastCargoChecked(!fastCargoChecked)} />
                                    </label>
                                </li>
                                <li>
                                    <a href="#">Change Address</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>
                            <strong id="cart-total">${cardTotals}</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="checkout">
                <button className="btn btn-lg">Proceed to checkout</button>
            </div>
        </div>
    );
};

export default CartTotals;