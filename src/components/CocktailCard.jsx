import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CocktailCard.module.css";

export default function CocktailCard({ cocktail }) {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <li className={styles.li}
        onClick={() => {
          navigate(`/cocktails/watch/${cocktail.idDrink}`, {
            state: { cocktail: cocktail },
          });
        }}
      >
        <img src={cocktail.strDrinkThumb} alt="#" />
        <div className={styles.title}>{cocktail.strDrink}</div>
      </li>
    </section>
  );
}
