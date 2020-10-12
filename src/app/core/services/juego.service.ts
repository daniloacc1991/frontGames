import { Injectable } from '@angular/core';
import { BaseService } from '../base/base-service';
import { IJuego } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JuegoService extends BaseService<IJuego, number>{

  constructor (
    _http: HttpClient,
  ) {
    super(_http, 'juegos');
  }
}
