import React,{useState} from "react";
// import RemoveIcon from '@mui/icons-material/Remove';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import ParameterList from "./parameterList";
function SearchLeft(){
    const [isListOpen, setIsListOpen] = useState(false);
    const ConceptsList = [
        {
            id: 101,
            text: 'Gross domestic product',
            count: 74206
        },
        {
            id: 102,
            text: 'Industry',
            count: 44013
        },
        {
            id: 103,
            text: 'Private',
            count: 36278
        },
        {
            id: 104,
            text: 'Real',
            count: 29289
        },
        {
            id: 105,
            text: 'Private industry',
            count: 20828
        },
        {
            id: 106,
            text: 'Gross State Product',
            count: 20520
        },
        {
            id: 107,
            text: 'Government',
            count: 13023
        },
        {
            id: 108,
            text: 'Services',
            count: 10650
        },
        {
            id: 109,
            text: 'Quantity Index',
            count: 8403
        },
        {
            id: 110,
            text: 'Goods',
            count: 8117
        },
    ]

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
        <>
            <div className="search-left">
                <h2>Refine your search</h2>
                <div className="parameter-list">
                    <div className="list-head">
                        <h3>Concepts</h3>
                        {/* <RemoveIcon className="list-head-icon"/> */}
                        <button className="invisible"><FontAwesomeIcon icon={faMinus} /></button>
                    </div>
                    <input type="text" className="search-input" name="search" placeholder="Search Concepts"/>
                    <div className="parameter-list-item">
                        {ConceptsListMap}
                    </div>
                </div>
                <ParameterList title="Geography Types" ConceptsList={ConceptsList}/>
                <ParameterList title="Geographics" ConceptsList={ConceptsList}/>
                <ParameterList title="Frequencies" ConceptsList={ConceptsList}/>
                
            </div>
        </>
    )
}
export default SearchLeft;