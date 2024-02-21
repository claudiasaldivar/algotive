import { useContext, ChangeEvent } from 'react'

//Context
import { VideoContext } from '../../context/VideoContext'

const Search = () => {

const { search, setSearch } = useContext(VideoContext)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div className="bg-gray-100 w-80 mr-4 ml-auto my-4 border-2 border-gray-800">
            <input 
                className="w-full border-3 border-gray-900 px-10 py-2 rounded font-bold text-gray-900 bg-transparent focus:text-blue-800" 
                type="text" 
                placeholder="Search title..." 
                onChange={handleChange} 
                value={search} 
            />
        </div>
    )
}

export default Search
