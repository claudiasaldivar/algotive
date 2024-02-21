import { useContext } from 'react'

//Context
import { VideoContext } from '../context/VideoContext'

//Components
import Table from './Table';
import HeadBodyGrid from '../helpers/assets/Loader';
import Search from './Search';

const VideoContainer: React.FC = () => {

  const { loading } = useContext(VideoContext)

  return (
    <>
      <div className='w-full flex md:justify-end sm:justify-center'>
        <Search />
      </div>
      <div className="container mx-auto p-4">
      {!loading ? <Table /> : <HeadBodyGrid />}
      </div>
    </>
  );
};

export default VideoContainer;
