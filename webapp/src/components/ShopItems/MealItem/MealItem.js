import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;

  return (
    <li classname={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
