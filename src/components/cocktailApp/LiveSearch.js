import React from 'react';

const LiveSeacrh = (props) => {
    const { handleChange } = props;
    return (
        <>
            <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="search cocktail"
                name="title"
                onChange={(e) => handleChange(e)}/>
        </>
    )
}

export default LiveSeacrh;