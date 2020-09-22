import { LayoutService } from './../../../shared/services/layout.service';
import { Injectable } from "@angular/core";
import { Movie } from './../types/movie.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Injectable()
export class MovieService {

    createMovieDialogRef: MatDialogRef<any>;


    constructor(
        private layoutService:LayoutService,
        private dialog: MatDialog
    ) { }


     // INIT MOVIE STORE
     private initMovieStore$ = new Subject<boolean>();
     initMovieStoreListener$: Observable<boolean> = this.initMovieStore$.asObservable();
     initMovieStore(state: boolean) {
         this.initMovieStore$.next(state);
     }
 
 
     // INIT MOVIE LIST
     private initMovieList$ = new BehaviorSubject<boolean>(false);
     initMovieListListenr$: Observable<boolean> = this.initMovieList$.asObservable();
     initMovieList(state: boolean) {
         this.initMovieList$.next(state);
     }
 
 
     // MOVIE LIST
     private movieList$ = new BehaviorSubject<Movie[]>([]);
     movieListListener$: Observable<Movie[]> = this.movieList$.asObservable();
     movieList(orders: Movie[]) {
         this.movieList$.next(orders);
     }



    // MOVIE OBSERVABLE
    private movie$ = new BehaviorSubject<Movie>(null);
    movieListener$: Observable<Movie> = this.movie$.asObservable();
    movie(movie: Movie) {
        this.movie$.next(movie);
    }


    // MOVIES OBSERVABLE
    private movies$ = new Subject<Movie[]>();
    moviesListener$: Observable<Movie[]> = this.movies$.asObservable();
    movies(movies: Movie[]) {
        this.movies$.next(movies);
    }


    // MOVIE CATEGORY OBSERVABLE
    private movieCategory$ = new Subject<string>();
    movieCategoryListener$: Observable<string> = this.movieCategory$.asObservable();
    movieCategory(movieCategory: string) {
        this.movieCategory$.next(movieCategory);
    }


    // CREATE MOVIE OBSERVABLE
    private createMovie$ = new Subject<Movie>();
    createMovieListener$: Observable<Movie> = this.createMovie$.asObservable();
    createMovie(movie: Movie) {
        this.createMovie$.next(movie);
    }


    // DELETE MOVIE OBSERVABLE
    private deleteMovie$ = new Subject<Movie>();
    deleteMovieListener$: Observable<Movie> = this.deleteMovie$.asObservable();
    deleteMovie(movie: Movie) {
        this.deleteMovie$.next(movie);
    }




    // CREATE MOVIE FUNCTION
    openMovieDialog(component: any) {
        this.createMovieDialogRef = this.dialog.open(component, {
          disableClose: true,
          panelClass: 'desktop-dialog'
        });
    
        if (this.layoutService.isMobile) {
          this.createMovieDialogRef.removePanelClass('desktop-dialog');
          this.createMovieDialogRef.addPanelClass('full-screen-dialog');
        }
    }


    closeMovieDialog() {
        this.createMovieDialogRef.close();
    }





}