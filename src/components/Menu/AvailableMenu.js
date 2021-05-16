import Card from "../UI/Card";
import classes from "./AvailableMenu.module.css";
import MenuItem from "./MenuItem/MenuItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Margherita Pizza",
    description: "A Classic delight with 100% mozzarella cheese",
    price: 500,
  },
  {
    id: "m2",
    name: "Tofu Tacos",
    description: "Gluten free and easily Vegan",
    price: 400,
  },
  {
    id: "m3",
    name: "Sushi",
    description: "Finest fish and veggies ",
    price: 300,
  },
  {
    id: "m4",
    name: "Iced Chocolate ",
    description: "Indulgent drink with a scoop of gelato",
    price: 200,
  },
];

const AvailableMenu = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MenuItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMenu;
