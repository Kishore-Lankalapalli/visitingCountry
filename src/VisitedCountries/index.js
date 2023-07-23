import { useSelector } from "react-redux";
import CountryItem from "../CountryItem";

import "./index.css";

const VisitedCountries = () => {
  const countriesList = useSelector(
    (state) => state.country.initialCountriesList
  );
  const visitedCountriesList = countriesList.filter(
    (country) => country.isVisited === true
  );
  return (
    <ul className="visited-countries-list-container">
      {visitedCountriesList.map((country) => (
        <CountryItem item={country} key={country.id} />
      ))}
    </ul>
  );
};

export default VisitedCountries;
