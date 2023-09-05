import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './src/app/home/home.component';
import { NoticiasComponent } from './src/app/noticias/noticias.component';
import {ConsNoticiaComponent} from './src/app/cons-noticia/cons-noticia.component'
import {CrearNoticiaComponent} from './src/app/crear-noticia/crear-noticia.component';
import {UbicacionComponent} from './ubicacion/ubicacion.component'


const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {path:'noticias', component:NoticiasComponent},
  {path:'Consnoticia/:id', component:ConsNoticiaComponent},
  {path:'Crearnoticia', component:CrearNoticiaComponent},
  {path:'ubicacion', component:UbicacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
