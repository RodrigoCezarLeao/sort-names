import { Component } from '@angular/core';
import { Patch } from 'src/app/interfaces/patch';
import { PatchService } from 'src/app/services/patch.service';

@Component({
  selector: 'app-patch-notes',
  templateUrl: './patch-notes.component.html',
  styleUrls: ['./patch-notes.component.css']
})
export class PatchNotesComponent {
  patches: Patch[] = [];
  lastPatch: Patch | undefined;
  
  constructor(patchService: PatchService) {
    this.patches = patchService.getAllPatches().sort((a,b) => a.version > b.version ? -1 : 1);
    this.lastPatch = this.patches.sort((a,b) => a.version > b.version ? -1 : 1)?.[0];
  }

  formatDate(date: Date){
    return date.getDate().toString().padStart(2, "0") + "/" + (date.getMonth() + 1).toString().padStart(2, "0") + "/" + date.getFullYear();
  }

  renderDescription(description: string) {
    
    return description.split("-").join("\n -");
  }
}
