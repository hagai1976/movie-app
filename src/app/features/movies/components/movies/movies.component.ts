import { take, tap, takeUntil } from 'rxjs/operators';
import { Movie } from './../../types/movie.interface';
import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { MovieService } from '../../services/movie.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  private readonly onDestroy = new Subject<void>();

  movies$: Observable<Movie[]>;
  movieCategory$: Observable<string>;

  deleteMovie$ = new Subject<any>();
  
  @Input() moviesDrawer: MatDrawer;

  constructor(
    public layoutService: LayoutService,
    private movieService: MovieService
  ) { }

  ngOnInit() {

    this.movies$ = this.movieService.moviesListener$.pipe(
      tap((movies: Movie[]) => console.log(movies))
    );

    

    this.movieCategory$ = this.movieService.movieCategoryListener$;


    combineLatest(
      this.movies$,
      this.deleteMovie$
    ).pipe(
      takeUntil(this.onDestroy),
      tap(([movies, deleteMovie]) => {
        if (deleteMovie && deleteMovie.op === 'deleteMovie') {
          let index = movies.findIndex((movie: Movie) => movie.id === deleteMovie.id);
          if (index >= 0) {
            movies.splice(index, 1);
          }
          return movies;
        }
        // else {
        //   return movies.concat(deleteMovie)
        // }
      })
    ).subscribe();

  }


  closeDrawer() {
    this.moviesDrawer.close();
  }


  showMoviesOnImdbWebsite(movieId: string) {
    window.open(`https://www.imdb.com/title/${movieId}`);
  }


  removeMovie(movie) {
    this.deleteMovie$.next({ op: 'deleteMovie', id: movie.id });
  }


}
