import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const CardContext = createContext();

const CardProvider = ({ children }) => {

    const [cardItems, setCardItems] = useState(
        localStorage.getItem("cardItems") ? JSON.parse(localStorage.getItem("cardItems")) : []
    )

    useEffect(() => {
        localStorage.setItem("cardItems", JSON.stringify(cardItems))


    }, [cardItems])

    const addToCard = (cardItem) => {
        // setCardItems([...cardItems, cardItem])
        setCardItems((prevItems) => [...prevItems, {
            ...cardItem,
            quantity: cardItem.quantity ? cardItem.quantity : 1
        }])

    }

    const removeFromCard = (itemId) => {
        const filteredCardItems = cardItems.filter((cardItem) => {
            return cardItem.id !== itemId;
        })
        setCardItems(filteredCardItems)
    }

    return (
        <CardContext.Provider
            value={{
                addToCard,
                cardItems,
                removeFromCard
            }}
        >
            {children}

        </CardContext.Provider>
    )

}

export default CardProvider

CardProvider.propTypes = {
    children: PropTypes.node,
    cardItems: PropTypes.array,
    setCardItems: PropTypes.func
}

