import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcdHs_d_nVrhJfqCCKT1e7_px7EOClfeIKw&usqp=CAU"
            alt="#"
            className={styles.img}
          /> */}
          <section className="text-7xl text-bold ml-40 mt-20 pb-15">
            <div>One cocktail,</div>
            <div>Two</div>
            <div>cocktail Cool,</div>
            <div>cocktail</div>
            <div>Floor</div>
          </section>
        </container>

        <form
          className="w-full flex justify-center absolute left-80 top-80"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="칵테일을 입력하세요:)"
            value={text}
            onChange={handleChange}
            className="w-3/12 p-2 placeholder-gray-500 outline-none"
          />
          <button className="bg-zinc-600 px-4 text-white">
            <BsSearch />
          </button>
        </form>
      </header>
    </>
  );
}
