import { useEffect, useState } from 'react';
import { fetchVideos } from './services/videosService';
import { Video } from './interfaces/videosInterface';
import VideoTable from './components/VideosTable';
import Modal from './modal/Modal';
import Footer from './components/Footer';

function App() {
  const [open, setOpen] = useState<boolean>(false)
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [videoModal, setVideoModal] = useState('')

  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await fetchVideos(currentPage);

      setVideos(fetchedVideos.results);
      setHasNextPage(fetchedVideos.next !== null);
    };
    loadVideos();
  }, [currentPage]);

  const handleNextPage = () => {
    if(hasNextPage){
        setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getVideo = (video: string) => {
    setVideoModal(video)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <VideoTable setOpen={setOpen} videos={videos} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} currentPage={currentPage} getVideo={getVideo}/>
        {open && (
          <Modal>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="mt-2">
                        <div className="mt-4">
                          <iframe src={videoModal} width="320" height="240"  allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={() => setOpen(!open)}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
