import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  baseMovieUrl:string='https://image.tmdb.org/t/p/original'

  moviesList:Movie[]=[]

  constructor(private MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  ngOnDestroy(): void {
    
  }

  getMovies(){
    this.MoviesService.getMoviesService().subscribe({
      next:(res)=>{
        this.moviesList=res.results
      },error:(err)=>{  
        console.log(err);
      }
    })
  }

}
