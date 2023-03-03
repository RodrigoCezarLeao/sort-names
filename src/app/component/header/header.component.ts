import { Component, Input } from '@angular/core';
import { getSmallGroupStorage } from 'src/app/helpers';
import { Patch } from 'src/app/interfaces/patch';
import { SmallGroup } from 'src/app/interfaces/smallGroup';
import { PatchService } from 'src/app/services/patch.service';

@Component({
  selector: 'app-header',
  templateUrl:  './header.component.html',
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  lastPatch: Patch | undefined;
  showModal: boolean = false;

  smallGroup: SmallGroup;

  constructor(patchService: PatchService) {
    this.lastPatch = patchService.getAllPatches().sort((a,b) => a.version > b.version ? -1 : 1)?.[0];
    this.smallGroup = getSmallGroupStorage();
  }

  openModal() {
    this.showModal = true;
  }
}
