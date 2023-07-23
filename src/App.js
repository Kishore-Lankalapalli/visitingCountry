import { useSelector, useDispatch } from "react-redux";
import { addVisitedCountry } from "./counterSlice";

import VisitedCountries from "../src/VisitedCountries";
import "./App.css";

const App = () => {
  const countriesList = useSelector(
    (state) => state.country.initialCountriesList
  );

  const dispatch = useDispatch();

  const visitedCountriesList = countriesList.filter(
    (country) => country.isVisited === true
  );

  return (
    <div className="bg-container">
      <h1 className="countries-heading-title">Countries</h1>
      <ul className="countries-visiting-list-container">
        {countriesList.map((country) => (
          <>
            <li className="country-item">
              <p className="country-name-text">{country.name}</p>
              {country.isVisited ? (
                <p className="visited-text">visited</p>
              ) : (
                <button
                  onClick={() => dispatch(addVisitedCountry(country.id))}
                  className="visit-button"
                >
                  visit
                </button>
              )}
            </li>
          </>
        ))}
      </ul>

      <h1 className="countries-heading-title">Visited Countries</h1>
      {visitedCountriesList.length !== 0 ? (
        <VisitedCountries />
      ) : (
        <p className="no-countries-visited-text">No Countries Visited Yet!! </p>
      )}
    </div>
  );
};
https://github.com/Kishore-Lankalapalli/visitingCountry.git
export default App;
