const MealItem = (props) => {
    const formattedPrice = `$${props.price.toFixed(2)}`;
    return(<li>
        <div>
            <h3>{props.name}</h3>
            <div>{props.description}</div>
            <div>{formattedPrice}</div>
        </div>
        <div>
        
        </div>
    </li>);
};

export default MealItem;