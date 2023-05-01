import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function CocktailDetail() {
  const {
    state: { cocktail },
  } = useLocation();
  return (
    <section>
      <Link to={"/"}>
        <h1 className="flex text-bold text-4xl ml-5">Cocktail</h1>
      </Link>
      <img src={cocktail.strDrinkThumb} alt="#" />
      <div>{cocktail.strDrink}</div>
      <pre>{cocktail.strInstructions}</pre>
    </section>
  );
}
