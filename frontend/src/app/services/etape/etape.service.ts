import { Injectable } from '@angular/core';
import {Etape} from "../../models/etape";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EtapeService {

  constructor(private http : HttpClient) { }

  getAllEtape(){
    return this.http.get<Etape>("http://localhost:3000/etape/");
  }

  getEtape(id : number){
    return this.http.get<Etape>("http://localhost:3000/etape/"+id);
  }

  createEtape(etape : Etape){
    return this.http.post<Etape>("http://localhost:3000/etape/",etape);
  }

  modifyEtape(id : number,etape : Etape){
    return this.http.put<Etape>("http://localhost:3000/etape/"+id,etape);
  }

  deleteEtape(id : number){
    return this.http.delete<Etape>("http://localhost:3000/etape/"+id);
  }
}
