import { MovieList } from './../types/order.list';
import { Requests } from './../types/requests';

export class MovieListStoreState {
    movieList: MovieList = {
        movies: []
    };
    requests: Requests = {
        listMovies: {}
    }
}