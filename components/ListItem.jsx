import React from "react";
import FilterItem from "./FilterItem";
import { nanoid } from "nanoid";

export default function ListItem(props) {

    const filterArray = [props.role, props.level, ...props.languages, ...props.tools]
    const renderJobFilters = filterArray.map((item) =>
        <FilterItem
        key={nanoid()}
        id={`${item} id`}
        name={item}
        handleClick={props.handleClick}
        />
        )
    
    return (
        <li className={`job-list-item ${props.isFeatured ? 'featured-background' : ''}`}>
            <div className='job-item-container'>
                <div className="left-job-info-container">
                    <img className="job-list-company-logo" src={props.logo} alt={`Logo of ${props.company} company`}></img>
                    <div>
                        <h1 className="company-name">{props.company}{props.isNew && <span className="new-item">NEW!</span>}{props.isFeatured && <span className="featured-item">FEATURED</span>}</h1>
                        <h2 tabIndex={0} className="job-title">{props.title}</h2>
                        <p className="job-list-p">{props.postedAt}<span className="bullet-job-p">&bull;</span>{props.contractType}<span className="bullet-job-p">&bull;</span>{props.location}</p>
                    </div>
                </div>

                <div className="right-job-info-container">
                    <ul>
                        {renderJobFilters}
                    </ul>
                </div>
            </div>
        </li>     
    )    
}
