import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:Movie[] = [];

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getMovies()
                      .subscribe(
                        movies=>{
                          this.movies=movies
                        }
                      )
  }

  onEdit(movie){
    console.log(movie)
  }

  onDelete(movieid){
    console.log("movie deleted: " + movieid)
  }
}
