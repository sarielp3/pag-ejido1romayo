import { Component,OnInit} from '@angular/core';
import {ServicioService} from 'src/app/src/app/servicio.service';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import {noticias} from 'src/app/src/app/models/noticias-model';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css']
})
export class CrearNoticiaComponent implements OnInit {
  public FormNoticia : noticias = {
    idnoticia:1,
    titulo:'',
    descripcion:'',
    fechaCreacion:'',
    status:'A',
    foto: null

  }
  imgURL: any;
  public selectedFile : any;
  public altaForm: UntypedFormGroup;
  constructor( private serviceNoticias: ServicioService){
    this.altaForm = new UntypedFormGroup({
      titulo: new UntypedFormControl('', [Validators.required, Validators.minLength(1)]),
      descripcion: new UntypedFormControl('', [Validators.required, Validators.minLength(1)]),
      foto: new UntypedFormControl('',[Validators.required])
    });
  }

  ngOnInit() {
    
  }

  onFileChanged(event:any) {
    //this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    this.imgURL = event.target.files[0];
    console.log(this.imgURL);
    reader.readAsDataURL(event.target.files[0]);
          reader.onload = (event2) => {
            this.imgURL = reader.result;
            console.log(this.imgURL);
          };
  }
  
  onSubmit(){
    if (this.altaForm.valid) {
      this.guardar();
    } else {
      console.log("no valido")
    }
  }

  guardar(){
    this.FormNoticia.titulo = this.altaForm.controls['titulo'].value
    this.FormNoticia.descripcion = this.altaForm.controls['descripcion'].value
    this.FormNoticia.foto = this.imgURL.split(",")[1];
    let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
    this.FormNoticia.fechaCreacion = year.toString()+ "-" + (month).toString() + "-" + day.toString();
    console.log(year.toString()+ "-" + (month).toString() + "-" + day.toString());
    this.serviceNoticias.crearNoticia(this.FormNoticia).subscribe(  
      (data) => {
        console.log(data);
      }
    )
  }

}
