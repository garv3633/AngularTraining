import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiURL = "http://localhost:3900/api/movies";

  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get<Movie[]>(this.apiURL)
  }

}