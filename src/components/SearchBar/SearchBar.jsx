// rafce - сніпет
import css from './SearchBar.module.css';
import { AiOutlineSearch } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast("Please fill in the search field.", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      return;
    }

    onSubmit(query);
    setQuery("");
  };  

  return (
    <header className={css.headerStyle}>
       
  <form className={css.formStyle} onSubmit={handleSubmit}>
    <button className={css.serchBtn} type="submit"><AiOutlineSearch /></button>
    <input 
      className={css.inputStyle}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
      name="search"
      onChange={handleChange}
          value={query}
    />    
    <Toaster position="top-center" reverseOrder={false} />
  </form>
 
</header>
  );
};

export default SearchBar