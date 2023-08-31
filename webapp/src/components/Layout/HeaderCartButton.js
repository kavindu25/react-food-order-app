import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>View Cart</span>
      <span className={classes.badge}>5</span>
    </button>
  );
};

export default HeaderCartButton;
