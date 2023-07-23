import { useDispatch } from "react-redux";
import { removeVisitedCountry } from "../counterSlice";
import "./index.css";

const CountryItem = (props) => {
  const dispatch = useDispatch();
  const { item } = props;

  const { imageUrl, name, id } = item;
  return (
    <li className="visited-country-item">
      <img src={imageUrl} className="visited-country-image" />
      <div className="visited-country-details">
        <p className="visited-country-name">{name}</p>
        <button
          onClick={() => dispatch(removeVisitedCountry(id))}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CountryItem;
