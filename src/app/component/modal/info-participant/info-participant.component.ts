import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-participant',
  templateUrl: './info-participant.component.html',
  styleUrls: ['./info-participant.component.css']
})
export class InfoParticipantComponent {
  @Input() prop: any = null;

}
