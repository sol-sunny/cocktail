import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CocktailCard({ cocktail }) {
  const navigate = useNavigate();
  return (
    <>
      <Link to={"/"}>
        <h1 className="flex text-bold text-4xl ml-5">Cocktail</h1>
      </Link>
      <li
        onClick={() => {
          navigate(`/cocktails/watch/${cocktail.idDrink}`, {
            state: { cocktail: cocktail },
          });
        }}
      >
        <img src={cocktail.strDrinkThumb} alt="#" />
        <div>{cocktail.strDrink}</div>
      </li>
    </>
  );
}
