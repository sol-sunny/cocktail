import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import styles from "./SearchHeader.module.css";

export default function SearchHeader({ cocktail }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/cocktails/${text}`);
  };

  const { keyword } = useParams();
  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <>
      <header className="w-full text-2xl p4 mb-4">
        <container className={styles.container}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcdHs_d_nVrhJfqCCKT1e7_px7EOClfeIKw&usqp=CAU"
            alt="#"
            className={styles.img}
          />
          <section className={styles.div}>
            <div className={styles.first}>One cocktail,</div>
            <div className={styles.second}>Two</div>
            <div className={styles.third}>cocktail Cool,</div>
            <div className={styles.fourth}>cocktail</div>
            <div className={styles.fifth}>Floor</div>
          </section>
        </container>

        <form
          className="w-full flex justify-center absolute left-80 top-80"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search your favorite Cocktail :)"
            value={text}
            onChange={handleChange}
            className={styles.input}
          />
          <button className={styles.button}>
            <BsSearch />
          </button>
        </form>
      </header>
    </>
  );
}
