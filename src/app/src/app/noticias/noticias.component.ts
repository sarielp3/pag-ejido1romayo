import { Component, OnInit } from '@angular/core';
import {noticias} from 'src/app/src/app/models/noticias-model';
import {ServicioService} from 'src/app/src/app/servicio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  imgURL: any;
  public ListaNoticias: noticias[] = [];
  constructor( private serviceNoticias: ServicioService,private router:Router){}

  ngOnInit() {
    this.getNoticias();
  }

  public getNoticias(){
    this.serviceNoticias.obtenerNoticias().subscribe(
      (data)=>{
      this.ListaNoticias = data;
      //console.log(data.map((dato:any)=>dato.titulo));
      console.log(this.ListaNoticias);
      }
    )
  }

  public consNoticia(id:any){
    this.router.navigate(['/consNoticia/' + id]);
  }
}
