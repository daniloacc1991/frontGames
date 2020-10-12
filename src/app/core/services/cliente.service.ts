import { Injectable } from '@angular/core';
import { BaseService } from '../base/base-service';
import { ICliente } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService extends BaseService<ICliente, number>{

  constructor (
    _http: HttpClient,
  ) {
    super(_http, 'clientes');
  }

}
