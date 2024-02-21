import { useContext } from 'react'

//Icons
import { AiFillPlayCircle, AiFillFastBackward, AiFillFastForward } from "react-icons/ai";

//Helpers
import { formatDate } from '../../helpers/formatDate';

//Interfaces
import{ IVideo }  from '../../interfaces/IVideo'

//Context
import { VideoContext } from '../../context/VideoContext'

//Component
import Button from '../Buttons';

const Table : React.FC = () => {
  const {
    videos,
    currentPage,
    setOpen,
    handleNextPage,
    handlePrevPage,
    getVideo} = useContext(VideoContext)
    
  return (
    <>
    <div className="overflow-x-auto">
      <table className="table-auto w-full sm:px-4 sm:py-3">
        <thead>
          <tr>
            <th className="px-4 py-2 w-1/8">ID</th>
            <th className="px-4 py-2 w-1/8">Author</th>
            <th className="px-4 py-2 w-1/8">Title</th>
            <th className="px-4 py-2 w-1/8">Created At</th>
            <th className="px-4 py-2 w-1/8">Description</th>
            <th className="px-4 py-2 w-1/8">Release Date</th>
            <th className="px-4 py-2 w-1/8">Updated At</th>
            <th className="px-4 py-2 w-1/8">URL</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video: IVideo) => (
            <tr key={video.id} className='text-center'>
              <td className="border px-4 py-2">{video.id}</td>
              <td className="border px-4 py-2">{video.author}</td>
              <td className="border px-4 py-2">{video.title}</td>
              <td className="border px-4 py-2">{formatDate(video.created_at)}</td>
              <td className="border px-4 py-2">{video.description}</td>
              <td className="border px-4 py-2">{video.release_date}</td>
              <td className="border px-4 py-2">{formatDate(video.updated_at)}</td>
              <td className="flex justify-center border px-4 py-2">
                <Button onClick={() => {
                    setOpen(true);
                    getVideo(video.url)
                  }}>
                    <AiFillPlayCircle />
                </Button>
              </td>
            </tr>
          ))}
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
