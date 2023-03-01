import { Component } from '@angular/core';
import { Patch } from 'src/app/interfaces/patch';
import { PatchService } from 'src/app/services/patch.service';

@Component({
  selector: 'app-header',
  templateUrl:  './header.component.html',
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {  
  lastPatch: Patch | undefined;
  showModal: boolean = false;

  constructor(patchService: PatchService) {
    this.lastPatch = patchService.getAllPatches().sort((a,b) => a.version > b.version ? -1 : 1)?.[0];
  }

  openModal() {
    this.showModal = true;
  }
}
