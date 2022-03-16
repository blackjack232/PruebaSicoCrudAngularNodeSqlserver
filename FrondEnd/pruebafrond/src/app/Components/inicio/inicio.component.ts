import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { EstudianteModel } from './estudiante-model';
import {ApiService} from '../../services/api.service';
declare var window: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  formModal: any;
  formValue!:FormGroup;
  formValueInscripcion!:FormGroup;
  formValueCursosEstudiante!:FormGroup;
  estudianteModelObj : EstudianteModel = new EstudianteModel();
  estudianteData  !: any;
  cursoData  !: any;

  constructor(private formbuilder:FormBuilder, private  api : ApiService) { }

  ngOnInit(): void {

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('modalCrear')
    );
    this.formValue = this.formbuilder.group({
      Id : [''],
      TipoIdentificacion :[''],
      Identificacion:[''],
      Nombre1 : [''],
      Nombre2 : [''],
      Apellido1 : [''],
      Apellido2 : [''],
      Email : [''],
      Celular : [''],
      Direccion : [''],
      Ciudad : ['']

    });
    this.formValueInscripcion = this.formbuilder.group({
      cursosDisponibles : ['']
    
    });
    this.formValueCursosEstudiante= this.formbuilder.group({
      nombre : [''],
      credito : [''],
      notaFinal : ['']
    
    });
    
    this.getAllEstudiante();
  }
  abrirModalEditar(row : any) {
    this.formModal.show();
    this.editEstudiante(row);
  }
  abrirModalCrear() {
    this.formModal.show();
   
  }
  guardarDatosModal() {
    // confirm or save something
    this.formModal.hide();
  }
  cerrarModalCrear() {
    // confirm or save something
    this.formModal.hide();
  }
  id :any = "Estudiante"
  tabClick(ids : any) {
   this.id=ids;
  }
  id2 :any = "cedula"
  tabBusquedaClick(ids : any) {
   this.id2=ids;
  }

  

  postEstudianteDetalle(){
    this.estudianteModelObj.TipoIdentificacion = this.formValue.value.TipoIdentificacion;
    this.estudianteModelObj.Identificacion = this.formValue.value.Identificacion;
    this.estudianteModelObj.Nombre1 = this.formValue.value.Nombre1;
    this.estudianteModelObj.Nombre2 = this.formValue.value.Nombre2;
    this.estudianteModelObj.Apellido1 = this.formValue.value.Apellido1;
    this.estudianteModelObj.Apellido2 = this.formValue.value.Apellido2;
    this.estudianteModelObj.Email = this.formValue.value.Email;
    this.estudianteModelObj.Celular = this.formValue.value.Celular;
    this.estudianteModelObj.Direccion = this.formValue.value.Direccion;
    this.estudianteModelObj.Ciudad = this.formValue.value.Ciudad;

    this.api.postEstudiante(this.estudianteModelObj)
    .subscribe(res=>{
      console.log(res);
      alert('Estudiante registrado exitosamente');
      this.formValue.reset();
      this.getAllEstudiante();
     

      },
      error =>{
        alert('Error al crear el estudiante');
        console.log('este es la data',this.estudianteModelObj,error);
    })
  
  }

  getAllEstudiante(){
    this.api.getEstudiante()
    .subscribe(res=>{
      this.estudianteData = res;

      console.log('esta es la data',res)

    })
     
  }

  getAllCursos(){
    this.api.getCursos()
    .subscribe(res=>{
      this.cursoData = res;

    })
     
  }
  deleteEstudiante(row : any){
  
    this.api.deleteEstudiante(row.Identificacion)
    .subscribe(res=>{
      
      alert('Estudiante Eliminado');

      this.getAllEstudiante();
    },error=>{
      console.log('hola error',error);
      
    })
  }
  editEstudiante(row : any){
    this.estudianteModelObj = row.id;
    this.formValue.controls['TipoIdentificacion'].setValue(row.TipoIdentificacion);
    this.formValue.controls['Identificacion'].setValue(row.Identificacion);
    this.formValue.controls['Nombre1'].setValue(row.Nombre1);
    this.formValue.controls['Nombre2'].setValue(row.Nombre2);
    this.formValue.controls['Apellido1'].setValue(row.Apellido1);
    this.formValue.controls['Apellido2'].setValue(row.Apellido2);
    this.formValue.controls['Email'].setValue(row.Email);
    this.formValue.controls['Celular'].setValue(row.Celular);
    this.formValue.controls['Direccion'].setValue(row.Direccion);
    this.formValue.controls['Ciudad'].setValue(row.Ciudad);
  }

  updateEstudiante(){
    
    this.estudianteModelObj.TipoIdentificacion = this.formValue.value.TipoIdentificacion;
    this.estudianteModelObj.Identificacion = this.formValue.value.Identificacion;
    this.estudianteModelObj.Nombre1 = this.formValue.value.Nombre1;
    this.estudianteModelObj.Nombre2 = this.formValue.value.Nombre2;
    this.estudianteModelObj.Apellido1 = this.formValue.value.Apellido1;
    this.estudianteModelObj.Apellido2 = this.formValue.value.Apellido2;
    this.estudianteModelObj.Email = this.formValue.value.Email;
    this.estudianteModelObj.Celular = this.formValue.value.Celular;
    this.estudianteModelObj.Direccion = this.formValue.value.Direccion;
    this.estudianteModelObj.Ciudad = this.formValue.value.Ciudad;
    console.log('estpy aca');
    this.api.updateEstudiante(this.estudianteModelObj,this.estudianteModelObj.Identificacion)
    
    .subscribe(res=>{
      console.log("Actualizao")
      alert("El Estudiante a sido Actualizado");
      this.formValue.reset();
    });
  }
 

}
