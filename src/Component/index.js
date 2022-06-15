import React from "react";
import db from "./db.json";
import SearchLeft from "./searchLeft";
import SearchRight from "./searchRight";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
function SearchPage(){
    const searchResultMap = db.map((item) => {
        return <SearchRight key={item.Id} title={item.Title} frequency={item.Frequency} unit={item.Unit} source={item.Source} description={item.Description}/>
    })
    return(
        <>
            <div className="top-bar">
                <h2>Search Result</h2>
                <p>Displaying {db.length} series of <strong>gdp</strong></p>
            </div>
            <div className="search-grid">
                <SearchLeft/>
                <div className="search-result-list">
                    <div className="right-btn">
                        <button>sort by relevance <FontAwesomeIcon icon={faChevronDown} /></button>
                    </div>
                    {searchResultMap}
                </div>
            </div>
        </>
    )
}
export default SearchPage;