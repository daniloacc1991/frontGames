import { IDirector } from './director.model';
import { IProductor } from './productor.model';
import { IProtagonista } from './protagonista.model';
import { ITecnologia } from './tecnologia.model';

export interface IJuego {
  id: number;
  titulo: string;
  precio: number;
  ano: number;
  disponible: boolean;
  director: IDirector;
  protagonista: IProtagonista;
  productor: IProductor;
  tecnologia: ITecnologia;
}
