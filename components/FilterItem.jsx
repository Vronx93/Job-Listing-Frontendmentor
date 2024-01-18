import React from "react";

export default function FilterItem(props) {

    return (
        <li tabIndex={0} className={props.isActive ? 'active-filter-item' : 'filter-item'} onClick={(event) => props.handleClick(event, props.id)} onKeyDown={(event) => props.handleClick(event, props.id)}>
            {props.name}
        </li>
    )
}