import { ICliente } from './cliente.model';
import { IJuego } from './juego.model';

export interface IAlquiler {
  id: number;
  cliente: ICliente;
  juego: IJuego;
  fechaInicio: Date;
  fechaFin: Date;
  precio: number;
}
