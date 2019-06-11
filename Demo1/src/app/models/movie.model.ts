import { Genre } from './genre.model';

export interface Movie{
    _id: string;
    title: string,
    numberInStock: number,
    dailyRentalRate: number,
    genre: Genre
}