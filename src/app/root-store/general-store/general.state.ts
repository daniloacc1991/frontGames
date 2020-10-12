import { IDirector, IProductor, IProtagonista, ITecnologia } from '../../core/models';

export interface GeneralState {
  directores: IDirector[];
  productores: IProductor[];
  protagonistas: IProtagonista[];
  tecnologias: ITecnologia[];
}


export const initialGeneralState: GeneralState = {
  directores: [],
  productores: [],
  protagonistas: [],
  tecnologias: [],
};
