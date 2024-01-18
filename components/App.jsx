import Header from './Header'
import React from 'react'
import ListItem from './ListItem'
import data from '../data.json'
import FilterItem from './FilterItem'
import FilterContainer from './FilterContainer'

export default function App() {


const filterCategories = ['Frontend', 'Backend', 'Fullstack', 'Junior',
    'Midweight', 'Senior', 'Python', 'Ruby',
    'JavaScript', 'HTML', 'CSS', 'React', 'Sass',
    'Vue', 'Django', 'RoR (Ruby on Rails)']
 
const [filters, setFilters] = React.useState(generateFiltersFromList())
const [isFilterListShown, setIsFilterListShown] = React.useState(false)

React.useEffect(() => {
    if(activeFilterItems.length === filters.length) {
        setIsFilterListShown(false)
    }
}, [filters])

function findActiveFilters() {
    let activeFilters = []
    for(let i=0; i < filters.length; i++) {
            if(filters[i].isActive === true) {
                activeFilters.push(filters[i].name)
            }
        } return activeFilters
    }

function filterJobs(item) {
    const jobFilters = findActiveFilters()
    const { level, role, languages, tools } = item
    const jobProperties = [level, role, ...languages, ...tools]
    if(jobFilters.length === 0) {
        return true
    } else {
        return jobFilters.some((filter) => jobProperties.includes(filter))
    }
    }

function generateFiltersFromList() {
    let newFilters = []
    for(let i=0; i<filterCategories.length; i++){
        newFilters.push({
            name: filterCategories[i],
            key: filterCategories[i],
            id: `${filterCategories[i]} id`,
            isActive: false
        }) 
        
    } return newFilters
    }
        
function handleFilterItemInteraction(event, id) {
    if (event.key === 'Enter' || event.type === 'click') {
        const newArr= filters.map((item) =>
        id === item.id ? {...item, isActive: !item.isActive} : item)
        setFilters(newArr)
    }

}

function handleEventClear(event) {
    if (event.key === 'Enter' || event.type === 'click') {
        setFilters(generateFiltersFromList()) 
    }
  }

const activeFilterItems = filters
  .filter((item) => item.isActive === true)
  .map((item) => (
    <FilterItem
      key={item.key}
      id={item.id}
      name={item.name}
      isActive = {item.isActive}
      handleClick={handleFilterItemInteraction}
    />
  ))

const listItems = data.map((item) => 
        filterJobs(item) && <ListItem
        key = {item.id}
        logo = {item.logo}
        company={item.company}
        title={item.position}
        postedAt={item.postedAt}
        contractType={item.contract}
        location={item.location}
        isNew={item.new}
        isFeatured={item.featured}
        position = {item.position}
        role = {item.role}
        level = {item.level}
        languages = {item.languages}
        tools = {item.tools}
        handleClick={handleFilterItemInteraction}
    />)

    return (
        <div className='main-container'>
            <Header/>
            {activeFilterItems.length > 0 && (
            <div className='active-filters-container'>
                <ul className='active-filters'>
                    {activeFilterItems}
                </ul>
                <button onKeyDown={handleEventClear} onClick={handleEventClear} className='clear-btn'>Clear</button> 
            </div>
            )}
            <FilterContainer
            filters = {filters}
            handleClick={handleFilterItemInteraction}
            isFilterListShown = {isFilterListShown}
            setIsFilterListShown= {setIsFilterListShown}
            />           
            <ul className='job-list'>
                {listItems}
            </ul>
            
        </div>        
    )  
}
