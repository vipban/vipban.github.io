import React from 'react'
import './SearchBar.css'

const SortOptions = {
    'Best Match' : 'best_match',
    'Highest Rated' : 'rating',
    'Most Reviewed' : 'review_count'
}

function SearchBar() {
    function renderSortOptions() {
        return (
            Object.keys(SortOptions).map(sortOption => {
                return <button key={SortOptions[sortOption]}>{sortOption}</button>
            })
        )
    }
    
    return (
        <section className='SearchBar'>
            <div>
                <section className='SortOptions'>
                    {renderSortOptions()}
                </section>
                <hr />
            </div>
            <section className='inputs'>
                <input type='text' placeholder='Search Businesses' />
                <input type='text' placeholder='Where?' />
            </section>
            <button className='submit'>Let's Go</button>
        </section>
    )
}

export default SearchBar