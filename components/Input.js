import React from 'react'

const Input = ({ onChange }) => {
    return (
        <div className='flex gap-4 bg-black-10 border border-grey-700 rounded-xl px-6'>
            <img src='ic-search.svg' alt='search' />
            <div className='flex flex-1 py-4'>
                <input className='placeholder-grey-600 text-sm' placeholder="Search Movies or TV Shows" onChange={onChange} />
            </div>
        </div>
    )
}

export default Input