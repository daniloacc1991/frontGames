import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export class BaseService<T, S> {

  protected api: string;
  protected _http: HttpClient;

  constructor (_http: HttpClient, endpoint: string) {
    this.api = `${environment.url}/${endpoint}`;
    this._http = _http;
  }

  findAll(): Observable<T[]> {
    return this._http.get(this.api).pipe(map((res: any) => {
      console.log(res);
      return res;
    }));
  }

  create(t: T): Observable<T> {
    return this._http.post(this.api, t).pipe(map((res: any) => res));
  }

  findOne(id: S): Observable<T> {
    return this._http.get(`${this.api}/${id}`).pipe(map((res: any) => res));
  }

  update(t: T): Observable<T> {
    return this._http.put(this.api, t).pipe(map((res: any) => res));
  }

  delete(id: S): Observable<S> {
    return this._http.delete(`${this.api}/${id}`).pipe(map((res: any) => res));
  }

}
