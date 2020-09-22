import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// CUSTOM MODULE
import { AngularFlexLayoutModule } from 'src/app/shared/modules/angular/angular-flex-layout.module';
import { AngularMaterialModule } from 'src/app/shared/modules/angular/angular-material.module';


// COMPONENT
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesDashboardComponent } from './components/movies-dashboard.component';
import { MovieService } from './services/movie.service';
import { DynamicMovieFormModule } from 'src/app/shared/modules/dynamic-forms/forms/dynamic-movie-form.module';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { MatMenuThreeDotsComponent } from 'src/app/shared/components/mat-menu-three-dots/mat-menu-three-dots.component';
import { MatMenuThreeDotsModule } from 'src/app/shared/modules/mat-menu-three-dots.module';
import { MovieStoreService } from './services/movie-store.service';

const MOVIES_ROUTES: Routes = [
    {
        path: '',
        component: MoviesDashboardComponent,
        children: []
    }
];


@NgModule({
    declarations: [
        MoviesDashboardComponent,
        MovieListComponent,
        MoviesComponent,
        MovieDetailsComponent,
        CreateMovieComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFlexLayoutModule,
        AngularMaterialModule,
        DynamicMovieFormModule,
        MatMenuThreeDotsModule,
        
        RouterModule.forChild(MOVIES_ROUTES)
    ],
    exports: [
        RouterModule
    ],
    entryComponents: [
        CreateMovieComponent
    ],
    providers: [
        MovieStoreService,
        MovieService
    ]
})
export class MoviesModule { }