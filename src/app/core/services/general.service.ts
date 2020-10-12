import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IDirector, IProductor, IProtagonista, ITecnologia } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  api = `${environment.url}`;

  constructor (
    private _http: HttpClient,
  ) { }

  findAllDirector(): Observable<IDirector[]> {
    return this._http.get(`${this.api}/directores`).pipe(map((res: any) => res));
  }

  createDirector(t: IDirector): Observable<IDirector> {
    return this._http.post(`${this.api}/directores`, t).pipe(map((res: any) => res));
  }

  findAllProductor(): Observable<IProductor[]> {
    return this._http.get(`${this.api}/productores`).pipe(map((res: any) => res));
  }

  createProductor(t: IProductor): Observable<IProductor> {
    return this._http.post(`${this.api}/productores`, t).pipe(map((res: any) => res));
  }

  findAllProtagonista(): Observable<IProtagonista[]> {
    return this._http.get(`${this.api}/protagonistas`).pipe(map((res: any) => res));
  }

  createProtagonista(t: IProtagonista): Observable<IProtagonista> {
    return this._http.post(`${this.api}/protagonistas`, t).pipe(map((res: any) => res));
  }

  findAllTecnologia (): Observable<ITecnologia []> {
    return this._http.get(`${this.api}/tecnologias`).pipe(map((res: any) => res));
  }

  createTecnologia (t: ITecnologia ): Observable<ITecnologia > {
    return this._http.post(`${this.api}/tecnologias`, t).pipe(map((res: any) => res));
  }

}
