import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.scss']
})
export class NoteCardsComponent implements OnInit {

  @Input() title: string;
  @Input() body: string;
  @Input() link: string;

  @Output('delete') deleteEvent: EventEmitter<void> =new EventEmitter<void>();
  constructor() { 
    this.title='';
    this.body='';
    this.link='';
  }

  ngOnInit(): void {
  }

onXButtonClick(){
this.deleteEvent.emit();


}

}
