import { Component, OnInit } from '@angular/core';
import {ServicioService} from 'src/app/src/app/servicio.service';
import {noticias} from 'src/app/src/app/models/noticias-model';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-cons-noticia',
  templateUrl: './cons-noticia.component.html',
  styleUrls: ['./cons-noticia.component.css']
})
export class ConsNoticiaComponent implements OnInit{
  public noticia:noticias = {
    idnoticia:0,
    titulo:'',
    descripcion:'',
    fechaCreacion:'',
    status:'',
    foto: ''
  }
  constructor( private serviceNoticias: ServicioService,private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    var idNoticia = this.activatedRoute.snapshot.paramMap.get('id');
    this.serviceNoticias.consultarNoticia(idNoticia || '').subscribe(
      data => { 
        this.noticia = data[0];
        console.log(this.noticia);
      },err => {console.log(err);}
      );
  }

}
