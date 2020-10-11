import React, { useState } from 'react'
import { DATA } from './data'

const SearchExample = () => {
    const [input, setInput] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [cursor, setCursor] = useState(-1)
    const [keywords, setKeywords] = useState([])

    const debounce = (func, wait) => {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait)
        }
    };

    const handleSearch = () => {
        let data = [...DATA]
        setFilteredData(data.filter((data) => {
            if ((data.item.name.toLowerCase()).includes((input).toLowerCase())) {
                return data
            }
        }))

        input.length === 0 && setFilteredData([])
    }

    const handleKey = (e) => {
        switch (e.key) {
            case 'ArrowDown':
                setCursor(c => (c < filteredData.length - 1 ? c + 1 : c))
                break;
            case 'ArrowUp':
                setCursor(c => (c > 0 ? c - 1 : 0))
                break;
            case 'Enter':
                let word = filteredData[cursor].item.name
                setKeywords(prev => prev.includes(word) ? [...prev] : [...prev, word])
                break;
        }
    }

    const handleDelete = (e) => {
        let word = e.target.value
        setKeywords(prev => prev.filter(data => data !== word))
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <input type="text"
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => handleKey(e)}
                        onKeyUp={debounce(handleSearch, 150)}
                        placeholder="Autocomplete Search"
                        className="form-control inverted"
                    />
                    {filteredData.length > 0 ? <ul className="list-group inverted" style={LIST}>
                        {
                            filteredData.map((data, index) => {
                                return <li className={cursor === index ? 'list-group-item active highlighted' : 'list-group-item'} key={data.position}>{data.item.name}</li>
                            })
                        }
                    </ul> : input !== '' && <h5>No result found</h5>
                    }
                </div>
                <div className="col-4">
                    <div className="keywords inverted">
                        {keywords.map((data, index) => {
                            return <span className="badge badge-pill badge-success" key={index}>{data}<button className="badge badge-light" style={{ cursor: 'pointer' }} value={data} onClick={handleDelete}>X</button></span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchExample

const LIST = {
    border: '1px solid #ddd',
    backgroundColor: 'aliceblue',
    width: '80%',
    margin: '10px',
    padding: '10px'
}
