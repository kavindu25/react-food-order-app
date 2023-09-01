import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/ShopItems/Meals";

function App() {
  return (
    <div>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
