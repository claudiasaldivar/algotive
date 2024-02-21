import { useContext } from 'react'

//Icons
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";

//Assets
import { Titles } from '../../helpers/assets/titles';

//Interfaces
import{ IVideo }  from '../../interfaces/IVideo'

//Context
import { VideoContext } from '../../context/VideoContext'

//Component
import Body from './Body';
import Button from '../Buttons';

const Table : React.FC = () => {
  const {
    videos,
    currentPage,
    handleNextPage,
    handlePrevPage} = useContext(VideoContext)
    
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-auto w-full sm:px-4 sm:py-3">
          <thead>
            <tr>
              {Titles.map((title: string) => (
                <th key={title} className="px-4 py-2 w-1/8">{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {videos.map((video: IVideo) => (
              <Body
                key={video.id} 
                id={video.id} 
                author={video.author} 
                title={video.title} 
                created_at={video.created_at} 
                description={video.description} 
                release_date={video.release_date} 
                updated_at={video.updated_at} 
                url={video.url}  
            />))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <Button onClick={handlePrevPage}>
          <AiFillFastBackward />
        </Button>
        <span className='px-2'>Page {currentPage}</span>
        <Button onClick={handleNextPage}>
          <AiFillFastForward />
        </Button>
      </div>
    </>
  )
}

export default Table
