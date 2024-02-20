
export interface Video {
    id: number;
    author: string;
    title: string;
    created_at: string;
    description: string;
    release_date: string;
    updated_at: string;
    url: string;
}

export interface VideoResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Video[];
}

export interface Props {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    videos: Video[];
    handlePrevPage: () => void;
    handleNextPage: () => void;
    currentPage: any
    getVideo: (url: string) => void;
  }



