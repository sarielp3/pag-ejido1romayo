import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpClient: HttpClient) {}

  obtenerNoticias(): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:3000/api/noticias'
    );
  }

  crearNoticia(noticia:any):Observable<any>{
    return this.httpClient.post<any>('http://localhost:3000/api/crear-noticia',noticia);
  }

  consultarNoticia(idNoticia:string):Observable<any>{
    return this.httpClient.get<any>('http://localhost:3000/api/noticia/' + idNoticia);
  }
}
