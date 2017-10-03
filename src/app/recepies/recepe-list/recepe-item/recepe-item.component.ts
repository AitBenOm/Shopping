import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recepie} from "../../recepiel";
import {RecepieService} from "../../recepie.service";

@Component({
  selector: 'app-recepe-item',
  templateUrl: './recepe-item.component.html',
  styleUrls: ['./recepe-item.component.css']
})
export class RecepeItemComponent implements OnInit {
  @Input()recepie: Recepie;

  recepieToShow: Recepie;

  constructor(private recepieService: RecepieService) { }

  ngOnInit() {
  }
  ShowRecepieDetail(){
this.recepieService.recepieSelected.emit(this.recepie);
  }
}
