import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, ContentChild } from '@angular/core';
/* import { EventEmitter } from 'protractor'; */

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
@Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
/* newServerName = ''; */
/* newServerContent = ''; */
@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
@ContentChild('contentParagraph', {static: true}) contentParagraph: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

 onAddServer(nameInput: HTMLInputElement) {
   this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
 }

 onAddBlueprint(nameInput: HTMLInputElement) {
  this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
}

}
