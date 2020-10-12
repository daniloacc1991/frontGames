import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GeneralStoreState, GeneralStoreActions } from './root-store/general-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontGames';

  constructor (
    private store: Store<GeneralStoreState.GeneralState>,
  ) {
    this.store.dispatch(GeneralStoreActions.LoadAllDirector());
    this.store.dispatch(GeneralStoreActions.LoadAllProductor());
    this.store.dispatch(GeneralStoreActions.LoadAllProtagonista());
    this.store.dispatch(GeneralStoreActions.LoadAllTecnologia());
  }


}
