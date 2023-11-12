import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";
import { getCurrentQuantityById } from "./cartSlice";
function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantityById = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        handleClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantityById}</span>
      <Button
        type="round"
        handleClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
