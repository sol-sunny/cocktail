import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./CocktailDetail.module.css";

export default function CocktailDetail() {
  const {
    state: { cocktail },
  } = useLocation();
  return (
    <section className={styles.background}>
      <Link to={"/"}>
        <h1 className="flex font-bold text-4xl ml-5 p-4">Cocktail</h1>
      </Link>
      <div className={styles.detail}>
        <img src={cocktail.strDrinkThumb} alt="#" className={styles.img}/>
        <div className={styles.strDrink}>{cocktail.strDrink}</div>
        <div className={styles.instruction}>{cocktail.strInstructions}</div>
      </div>
    </section>
  );
}
