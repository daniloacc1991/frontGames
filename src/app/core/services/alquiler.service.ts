import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base-service';
import { IAlquiler } from '../models';

@Injectable()
export class ClienteService extends BaseService<IAlquiler, number>{

  constructor (
    _http: HttpClient,
  ) {
    super(_http, 'alquileres');
  }

}
