/* some elements of this code contains lines from Browser Base and other respective projects, all credit goes to them for there work */

import { ipcRenderer } from 'electron';
import { makeObservable, observable } from 'mobx';

import { IFormFillMenuItem } from '~/interfaces';
import { DialogStore } from '~/models/dialog-store';

export class Store extends DialogStore {
  public items: IFormFillMenuItem[] = [];

  public constructor() {
    super({ hideOnBlur: false });

    makeObservable({ items: observable });

    ipcRenderer.on(`formfill-get-items`, (e, items) => {
      this.items = items;
    });
  }
}

export default new Store();
