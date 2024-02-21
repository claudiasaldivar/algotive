import { createContext, useState, useEffect, ReactNode } from 'react'
import { IVideo } from '../interfaces/IVideo';
import { fetchVideos } from '../services/videosService';

const VideoContext = createContext<any>(null);

function VideoProvider({ children }: { children: ReactNode }){
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [videos, setVideos] = useState<IVideo[]>([]);
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


    const store = {
        loading,
        error,
        open,
        videos,
        currentPage,
        hasNextPage,
        videoModal, 
        setOpen,
        setVideos,
        setCurrentPage,
        setHasNextPage,
        setVideoModal,
        setLoading,
        setError,
        handleNextPage,
        handlePrevPage,
        getVideo
    }

    return (
        <VideoContext.Provider value={store}>
            {children}
        </VideoContext.Provider>
    )
}

export { VideoContext, VideoProvider }
