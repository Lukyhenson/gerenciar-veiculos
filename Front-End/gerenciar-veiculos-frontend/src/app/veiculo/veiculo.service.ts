import {Injectable} from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {URI_SERVER_API} from '../app.api';
import {ErrorHandler} from '../app.error-handler';
import {Veiculo} from './veiculo.model';


@Injectable()
export class VeiculoService {
    private headers: Headers = new Headers({'Content-type': 'application/json'});

    constructor(private http: Http) { 
      
     }

     findAll(): Observable<Veiculo[]>{
      return this.http
        .get(`${URI_SERVER_API}/veiculo`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
  
    findOne(id: number): Observable<Veiculo>{
      return this.http
        .get(`${URI_SERVER_API}/veiculo/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
  
    save(veiculo: Veiculo): Observable<Veiculo>{
  
      let headers = new Headers({'Content-Type': 'application/json'})
      let options = new RequestOptions({headers: headers})
  
      if(veiculo.id){
        return this.http
          .put(`${URI_SERVER_API}/veiculo`, JSON.stringify(veiculo), options)
          .map(response => response.json())
          .catch(ErrorHandler.handleError);
      } 
      else {
        return this.http
          .post(`${URI_SERVER_API}/veiculo`, JSON.stringify(veiculo), options)
          .map(response => response.json())
          .catch(ErrorHandler.handleError);
      }
  
      
    }
  
    delete(id: number): Observable<any>{
      return this.http
        .delete(`${URI_SERVER_API}/veiculo/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
    
}