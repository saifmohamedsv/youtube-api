import React, {Component, useState} from "react";


const SearchBar = ({onSearchSubmit}) => {
    const [term, setTerm] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(term);
    };
    return (<div className="search-bar ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
            <div className="field">
                <label htmlFor="video">Search</label>
                <input
                    name="video"
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </div>
        </form>
    </div>)
}


export default SearchBar;
