import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
function SearchRight(props){
    const {title, frequency, unit, source, description} = props;
    const [showMore, setShowMore] = useState(false);
    return(
        <div className="search-result-item">
            <h3>{title}</h3>
            <h6>{unit}, {frequency}, {source}</h6>
            <p className={showMore ? 'description show-more' : 'description'}>{description}
            
            </p>
            {showMore ? <button className="invisible" onClick={() => setShowMore(!showMore)}>Read Less <FontAwesomeIcon icon={faChevronUp} /></button> : <button className="invisible" onClick={() => setShowMore(!showMore)}>Read More <FontAwesomeIcon icon={faChevronDown} /></button>}
        </div>
    )
}
export default SearchRight;