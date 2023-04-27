import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import CocktailCard from "../components/CocktailCard";
import CocktailApi from "../api/cocktailApi";

export default function Cocktails() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: cocktails,
  } = useQuery(["cocktails", keyword], () => {
    // return fetch(`/cocktails/${keyword ? 'search' : 'random'}.json`)
    // .then((res)=> res.json())
    // .then((data => data.drinks))
    const cocktailApi = new CocktailApi();
    return cocktailApi.search(keyword);
  });

  return (
    <>
      <div>Cocktails {keyword ? `${keyword}` : `⭐`}</div>
      {isLoading && <p>Loading~~~</p>}
      {error && <p>error</p>}
      {cocktails && (
        <ul>
          {cocktails.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </ul>
      )}
    </>
  );
}
