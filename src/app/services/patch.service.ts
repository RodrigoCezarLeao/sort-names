import { Injectable } from '@angular/core';
import { PATCHES } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class PatchService {

  getAllPatches() {
    return PATCHES;
  }
}
