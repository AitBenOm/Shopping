import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recepie} from "../recepiel";
import {RecepieService} from "../recepie.service";


@Component({
  selector: 'app-recepe-list',
  templateUrl: './recepe-list.component.html',
  styleUrls: ['./recepe-list.component.css']
})
export class RecepeListComponent implements OnInit {
 recepies: Recepie[] = [ ];

  constructor(private recepieService: RecepieService) { }

  ngOnInit() {
    this.recepies= this.recepieService.getRecepes();
  }

}
