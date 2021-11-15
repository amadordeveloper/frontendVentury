import React, { useState } from "react";


const Search = (props) => {

    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");

    const handleSearch = (e) => {
        setMsg("");
        let searchValue = e.target.value;
        setSearch(searchValue);
    };

    const goSearch = () => {
        if (search !== "") {
            setMsg(`Searching "${search}"...`);
           setTimeout(() => {
               setMsg("0 results found");
           }, 2000);
        }else{
            setMsg("Please enter a search term");
        }
    };


    return (
        <form className="search">
            <input type="text" placeholder={props.placeholder ? props.placeholder : "Search"} onChange={(e) => handleSearch(e)} />
            <button type="button" onClick={() => goSearch()}>
                {props.contentBtn ? props.contentBtn : "Search"}
            </button>
            <small>{msg}</small>
        </form>
    );
}

export default Search;