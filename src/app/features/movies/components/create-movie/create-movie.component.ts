import { Component, OnInit } from '@angular/core';
import { Movie } from './../../types/movie.interface';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  movies: Movie[];

  constructor(
    private layoutService: LayoutService,
    private movieService: MovieService
  ) { }

  ngOnInit() {

    // descriptive header
    this.layoutService.descriptiveHeader('Add movie');

  }

  
  closeDialog() {
    this.movieService.closeMovieDialog();
  }


  submitMovieForm(movie: Movie) {
    console.log(movie);
    this.movieService.createMovie(movie);
  }

}
