import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {URI_SERVER_API} from '../app.api';
import {ErrorHandler} from '../app.error-handler';
import {Veiculo} from './veiculo.model';

@Injectable()
export class VeiculoService {

  constructor(private http: Http) {
  }

  listar(): Observable<Veiculo[]> {
    return this.http.get(`${URI_SERVER_API}/veiculo`)
      .map(response => response.json().data)
      .catch(ErrorHandler.handleError)
  }

  visualizar(id: number): Observable<Veiculo> {
    return this.http.get(`${URI_SERVER_API}/veiculo/${id}`)
      .map(response => response.json().data)
      .catch(ErrorHandler.handleError);
  }

  salvar(veiculo: Veiculo): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({'Content-Type': 'application/json'});
    // tslint:disable-next-line:prefer-const
    let options = new RequestOptions({headers: headers});

    return this.http.post(`${URI_SERVER_API}/veiculo`,
      JSON.stringify(veiculo), options)
      .map(response => response.json());
  }
}
