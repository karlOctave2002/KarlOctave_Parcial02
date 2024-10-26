import { Component, OnInit } from '@angular/core';
import { ApiSerService } from '../service/api-ser.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 items:any;
  constructor( 
    private ApiSerService: ApiSerService) {
      
    }
    ngOnInit(): void{ 
      this.ApiSerService.obtenerPelicula().subscribe
      ((peliculas)=>{
        localStorage.setItem('peliculas', JSON.stringify(this.items));
        
        this.items=peliculas;
       })

    }

}
