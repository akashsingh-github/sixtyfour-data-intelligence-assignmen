import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function ParameterList({title, ConceptsList}){
    const [isListOpen, setIsListOpen] = useState(false);
    const ConceptsListMap = ConceptsList.map((item) => {
        return(
            <div className="list-item" key={item.id}>
                <h4>{item.text}</h4>
                <p>({item.count})</p>
            </div>
        )
    })
    const toggleVisibility = () => {
        setIsListOpen(!isListOpen)
    }
    return(
        <div className="parameter-list">
            <div className="list-head">
                <h3>{title}</h3>
                {isListOpen ? <button className="invisible" onClick={toggleVisibility} ><FontAwesomeIcon icon={faMinus} /></button> : <button className="invisible" onClick={toggleVisibility}><FontAwesomeIcon icon={faPlus} /></button>}
            </div>
            {
                isListOpen ? 
                <div>
                    <input type="text" className="search-input" name="search" placeholder="Search Concepts"/>
                    <div className="parameter-list-item">
                        {ConceptsListMap}
                    </div>
                </div> : ''
            }
        </div>
    )
}
export default ParameterList;