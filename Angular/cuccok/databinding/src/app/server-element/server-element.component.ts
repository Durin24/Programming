import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated /* Native does the same but doesnt work in old browsers, None forces this component css to all */
})
export class ServerElementComponent implements OnInit {
@Input('srvElement') element: {type: string, name: string, content: string};
@ViewChild('heading', {static: true}) header: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
