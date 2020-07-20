import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epheader',
  templateUrl: './epheader.component.html',
  styleUrls: ['./epheader.component.css']
})
export class EpheaderComponent implements OnInit {
collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
