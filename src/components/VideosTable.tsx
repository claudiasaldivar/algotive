import{ Props }  from '../interfaces/videosInterface'
import Header from './Header';
import Table from './Table';

const VideoTable: React.FC<Props> = ({ setOpen, videos, handlePrevPage, handleNextPage, currentPage, getVideo }) => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <Table 
        currentPage={currentPage}
        videos={videos}
        setOpen={setOpen} 
        getVideo={getVideo} 
        handleNextPage={handleNextPage} 
        handlePrevPage={handlePrevPage} 
      />
    </div>
  );
};

export default VideoTable;
