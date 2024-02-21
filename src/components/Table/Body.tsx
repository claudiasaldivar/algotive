import { useContext } from 'react'
//Icons
import { AiFillPlayCircle } from 'react-icons/ai';

//Helpers
import { formatDate } from '../../helpers/formatDate';

//Context
import { VideoContext } from '../../context/VideoContext'

//Interfaces
import { IVideo } from '../../interfaces/IVideo';

//Components
import Button from '../Buttons';

const Body:React.FC<IVideo> = ({ id, author, title, created_at, description, release_date, updated_at, url }) => {

  const {
    setOpen,
    getVideo} = useContext(VideoContext)
    
  return (
    <tr key={id} className='text-center'>
              <td className="border px-4 py-2">{id}</td>
              <td className="border px-4 py-2">{author}</td>
              <td className="border px-4 py-2">{title}</td>
              <td className="border px-4 py-2">{formatDate(created_at)}</td>
              <td className="border px-4 py-2">{description}</td>
              <td className="border px-4 py-2">{release_date}</td>
              <td className="border px-4 py-2">{formatDate(updated_at)}</td>
              <td className="flex justify-center border px-4 py-2">
                <Button onClick={() => {
                    setOpen(true);
                    getVideo(url)
                  }}>
                    <AiFillPlayCircle />
                </Button>
              </td>
            </tr>
  )
}

export default Body
