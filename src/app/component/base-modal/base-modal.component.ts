import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Participant } from 'src/app/interfaces/participant';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.css']
})
export class BaseModalComponent {
  @Input() content_slug: string = "";

  @Input() prop: any = null;  
  
  @Input() opened: boolean = true;
  @Output() openedChange: EventEmitter<any> = new EventEmitter();

  @Output() propEvent: EventEmitter<any> = new EventEmitter();

  isModalOpened(){
    return this.opened === true;
  }

  openModal() {
    this.opened = true;
  }
  
  closeModal() {
    this.opened = false;
    this.openedChange.emit();
  }
}
