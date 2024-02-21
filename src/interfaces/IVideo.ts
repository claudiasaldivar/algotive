
export interface IVideo {
  id: number;
  author: string;
  title: string;
  created_at: string;
  description: string;
  release_date: string;
  updated_at: string;
  url: string;
}

export interface Props {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    videos: IVideo[];
    handlePrevPage: () => void;
    handleNextPage: () => void;
    currentPage: any
    getVideo: (url: string) => void;
  }





