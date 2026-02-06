import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 200, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 250, category: "Indoor" },
  { id: 3, name: "Money Plant", price: 180, category: "Indoor" },
  { id: 4, name: "Rose", price: 150, category: "Outdoor" },
  { id: 5, name: "Tulsi", price: 100, category: "Medicinal" },
  { id: 6, name: "Mint", price: 80, category: "Medicinal" },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Our Plants</h2>
      {plants.map(plant => (
        <div key={plant.id}>
          <h4>{plant.name}</h4>
          <p>₹{plant.price}</p>
          <button onClick={() => dispatch(addItem(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
