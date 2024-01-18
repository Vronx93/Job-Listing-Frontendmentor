import React from "react";
import FilterItem from "./FilterItem";

export default function FilterContainer({filters, handleClick, isFilterListShown, setIsFilterListShown}) {

    const filterItems = filters.map((item) => 
        item.isActive === false &&
        <FilterItem
        key = {item.key}
        id = {item.id}
        name = {item.name}
        isActive = {item.isActive}
        handleClick = {handleClick}
    />)

    function createIconElements() {
        const elements = []
        for(let i=0; i < 18; i++) {
            elements.push(<div key={`icon-el ${i}`} className="filter-icon-element"></div>)
        } return elements
    }

    function handleFilterListToggle(event) {
        if (event.key === 'Enter' || event.type === 'click') {
        setIsFilterListShown(!isFilterListShown)
        }
    }
    
    return (
        <div className="filter-container">
            <div tabIndex={0} onClick={(event) => handleFilterListToggle(event)} onKeyDown={(event) => handleFilterListToggle(event)} className="filter-container-icon">
                {createIconElements()}
            </div>
            <ul className={`all-filters-list ${isFilterListShown ? '' : 'hidden'}`} >
                {filterItems} 
            </ul>
        </div>
    )
}
