import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.css']
})
export class BaseModalComponent {
  opened: boolean = true;  
  @Input() content_slug: string = "";
  @Output() close_modal: EventEmitter<any> = new EventEmitter();

  isModalOpened(){
    return this.opened === true;
  }

  openModal() {
    this.opened = true;
  }
  
  closeModal() {
    this.opened = false;
    this.close_modal.emit();
  }


}
