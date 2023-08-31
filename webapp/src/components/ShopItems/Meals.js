import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./Availablemeals";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
