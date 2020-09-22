import { Movie } from '../types/movie.interface';
import { Injectable } from '@angular/core';


// STORE
import { Store } from '../../../store';
import { StoreRequestStateUpdater } from '../../../shared/types/store-request-state-updater';


// HELPERS
import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';


// RXJS
import { Subject } from 'rxjs';
import { switchMap, tap, takeUntil, take } from 'rxjs/operators';
import { MovieListStoreState } from '../classes/movie-list-store.state';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MovieStoreService extends Store<MovieListStoreState> {

  private readonly onDestroy = new Subject<void>();

  public reloadMovies$ = new Subject<null>();

  private storeRequestStateUpdater: StoreRequestStateUpdater;

  initialized: boolean = false;

  constructor(private http: HttpClient) {
    super(new MovieListStoreState());
  }


  init(): void {
    this.initReloadMovies();
    this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(this);
    this.reloadMovies(); // MUST FIRE AFTER "THIS.STOREREQUESTSTATEUPDATER"
    this.initialized = true;
  }


  reloadMovies(): void {
    this.reloadMovies$.next();
  }


  private initReloadMovies() {
    this.reloadMovies$.pipe(
      take(1),
      switchMap(() => {
        return this.listOrders()
      })
    ).subscribe()
  }


  listOrders() { 

    const url = 'assets/movies.json';

    return this.http.get(url).pipe(
      tap((movies: Movie[]) => {
        this.setState({
          ...this.state,
          movieList: {
            ...this.state.movieList,
            movies: movies
          },
          requests: {
            ...this.state.requests
          }
        })
      })
    )
  }


  addMovie(movie: Movie) {
    this.setState({
      ...this.state,
      movieList: {
        ...this.state.movieList,
        movies: [...this.state.movieList.movies, movie]
      }
    })
  }


  ngOnDestroy(): void {
    console.log('ORDERS STORE SERVICE DESTROYED');
    this.onDestroy.next();
    this.onDestroy.complete();
  }

}