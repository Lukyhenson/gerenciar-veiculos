import { Injectable } from "@angular/core";
import { Http, RequestOptions, Response, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { URI_SERVER_API } from "../app.api";
import { ErrorHandler } from "../app.error-handler";
import { Veiculo } from "./veiculo.model";

@Injectable()
export class VeiculoService {
  private headers: Headers = new Headers({
    "Content-type": "application/json"
  });

  constructor(private http: Http) {}

  findAll(): Observable<Veiculo[]> {
    return this.http
      .get(`${URI_SERVER_API}/veiculo`)
      .map(response => response.json().content)
      .catch(ErrorHandler.handleError);
  }

  findOne(id: number): Observable<Veiculo> {
    return this.http
      .get(`${URI_SERVER_API}/veiculo/${id}`)
      .map(response => response.json().content)
      .catch(ErrorHandler.handleError);
  }

  save(veiculo: any): Observable<Veiculo> {
    if (veiculo.id == null) {
      return this.http
        .post(`${URI_SERVER_API}/veiculo`, veiculo)
        .map(res => res.json().content);
    } else {
      return this.http
        .put(`${URI_SERVER_API}/veiculo/${veiculo.id}`, veiculo)
        .map(res => res.json().content);
    }
  }

  delete(id: number): Observable<any> {
    return this.http
      .delete(`${URI_SERVER_API}/veiculo/${id}`)
      .map(response => response.json().content)
      .catch(ErrorHandler.handleError);
  }
}
