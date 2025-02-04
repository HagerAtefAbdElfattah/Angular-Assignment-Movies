import { MoviesService } from './../movies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit, OnDestroy {
  baseMovieUrl:string='https://image.tmdb.org/t/p/original'

  moviesList:Movie[]=[]

  $sub:Subscription = new Subscription()

  constructor(private MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.$sub = this.MoviesService.getMoviesService().subscribe({
      next:(res)=>{
        this.moviesList=res.results
      },error:(err)=>{  
        console.log(err);
      }
    })
  }

  ngOnDestroy(): void {
    this.$sub.unsubscribe()
  }
}
