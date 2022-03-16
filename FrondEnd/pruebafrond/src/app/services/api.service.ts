import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http :HttpClient) { }

  postEstudiante(data : any){

    return this.http.post<any>('http://localhost:5000/estudiante',data)
    .pipe(map((res:any)=>{
      return res;

    }));

  }
  getEstudiante(){

    return this.http.get<any>('http://localhost:5000/estudiante')
    .pipe(map((res:any)=>{
      return res;

    }));

  }
  getCursos(){

    return this.http.get<any>('http://localhost:5000/estudiante/')
    .pipe(map((res:any)=>{
      return res;

    }));

  }

  updateEstudiante(data : any , id : String){
  

    return this.http.put<any>('http://localhost:5000/estudiante/'+id,data)
    .pipe(map((res:any)=>{
      
      return res;
     

    }));

  }
  deleteEstudiante( id : String){
   
    return this.http.delete<any>('http://localhost:5000/estudiante/'+id)
    .pipe(map((res:any)=>{
      return res;
      
    }));

  }
}
