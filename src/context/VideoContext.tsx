import { createContext, useState, useEffect, ReactNode } from 'react'

//Services
import { fetchVideos } from '../services/videosService';

//Interfaces
import { IVideo } from '../interfaces/IVideo';

//Context
const VideoContext = createContext<any>(null);

function VideoProvider({ children }: { children: ReactNode }){
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [videos, setVideos] = useState<IVideo[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);
    const [videoModal, setVideoModal] = useState<string>('')
    const [search, setSearch] = useState('');
    
    useEffect(() => {
      setLoading(true)
      const loadVideos = async () => {
        const fetchedVideos = await fetchVideos(currentPage);
        if(fetchedVideos?.error){
          return setError(true)
        }
        setVideos(fetchedVideos?.results);
        setHasNextPage(fetchedVideos?.next !== null);
        setTimeout(() => { setLoading(false) }, 500)
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

    const searchedVideos = videos.filter( video => (
      video.title.toLowerCase().includes(search.toLowerCase())
  ))

    const store = {
        loading,
        error,
        open,
        videos,
        currentPage,
        hasNextPage,
        videoModal, 
        searchedVideos,
        search,
        setSearch,
        setOpen,
        setVideos,
        setCurrentPage,
        setHasNextPage,
        setVideoModal,
        setLoading,
        setError,
        handleNextPage,
        handlePrevPage,
        getVideo,
    }

    return (
        <VideoContext.Provider value={store}>
            {children}
        </VideoContext.Provider>
    )
}

export { VideoContext, VideoProvider }
