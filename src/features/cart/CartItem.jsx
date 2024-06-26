import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from "./DeleteItem.jsx";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";
import {useSelector} from "react-redux";
import {getCurrentQuantityById} from "./cartSlice.js";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
    // console.log(item);
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
          <UpdateItemQuantity pizzaId={pizzaId} quantity={currentQuantity}/>
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
