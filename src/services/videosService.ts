import { IVideoResponse } from './interfaces/IVideos';

async function fetchVideos(page: number): Promise<IVideoResponse> {
    const url = `/api/v1/videos/?page=${page}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al cargar los videos');
        }
        const data: IVideoResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar los videos:', error);
        return { count: 0, next: null, previous: null, results: [] }; 
    }
}

export { fetchVideos };
