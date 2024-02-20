import { formatDate } from '../helpers/formatDate';
import { AiFillPlayCircle, AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import{ Props }  from '../interfaces/videosInterface'

const Table : React.FC<Props> = ({videos, setOpen, getVideo, handleNextPage, handlePrevPage, currentPage}) => {
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
          {videos.map(video => (
            <tr key={video.id} className='text-center'>
              <td className="border px-4 py-2">{video.id}</td>
              <td className="border px-4 py-2">{video.author}</td>
              <td className="border px-4 py-2">{video.title}</td>
              <td className="border px-4 py-2">{formatDate(video.created_at)}</td>
              <td className="border px-4 py-2">{video.description}</td>
              <td className="border px-4 py-2">{video.release_date}</td>
              <td className="border px-4 py-2">{formatDate(video.updated_at)}</td>
              <td className="flex justify-center border px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-4 rounded ml-2" onClick={() => {
                setOpen(true);
                getVideo(video.url)
                }}><AiFillPlayCircle /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="mt-4">
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" 
        onClick={handlePrevPage}>
          <AiFillFastBackward />
      </button>
      <span>Page {currentPage}</span>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleNextPage}>
          <AiFillFastForward />
      </button>
    </div>
    </>
  )
}

export default Table
