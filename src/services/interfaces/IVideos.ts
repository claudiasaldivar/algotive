import { IVideo } from './../../interfaces/IVideo'

export interface IVideoResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IVideo[];
    error?: boolean
}