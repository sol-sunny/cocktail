import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function SearchHeader() {
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
      <header>
        <Link to={"/"}>
          <h1>Cocktail</h1>
        </Link>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search..."
            value={text}
            onChange={handleChange}
          />
          <button>
            <BsSearch />
          </button>
        </form>
      </header>
    </>
  );
}
