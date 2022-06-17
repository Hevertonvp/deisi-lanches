import { useContext } from "react";
import CartContext from "../../context/CartContext";

// eslint-disable-next-line
export default () => {

    const context = useContext(CartContext);
    return context

}