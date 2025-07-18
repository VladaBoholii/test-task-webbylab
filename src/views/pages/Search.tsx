import React from "react";
import "../styles.css";

const Search = ({ toggleScreen }: { toggleScreen: () => void }) => {
  return (
    <div id="search-page">
      <aside>
        <h1 onClick={toggleScreen} className="logo">
          MVManage
        </h1>
        <button className="add-button" onClick={() => {}}>
          Create new
        </button>
      </aside>
      <main>
        <input type="text" className="" />
        {Array.from({ length: 40 }).map((_, i) => (
          <p>{i}</p>
        ))}
      </main>
    </div>
  );
};

export default Search;
