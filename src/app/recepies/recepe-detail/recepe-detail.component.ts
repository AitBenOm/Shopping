import {Component, Input, OnInit} from '@angular/core';
import {Recepie} from "../recepiel";
import {RecepieService} from "../recepie.service";

@Component({
  selector: 'app-recepe-detail',
  templateUrl: './recepe-detail.component.html',
  styleUrls: ['./recepe-detail.component.css']
})
export class RecepeDetailComponent implements OnInit {

 @Input() recepieToShow: Recepie;
  constructor(private recepieService: RecepieService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    console.log("recepie detail "+this.recepieToShow.ingredients[0].name);
this.recepieService.addIngredientsToSoppingList(this.recepieToShow.ingredients);
  }
  // onShowDetailRecepie(recepie: Recepie){
  //   this.recepieToShow.name = recepie.name;
  //   this.recepieToShow.desc = recepie.desc;
  //   this.recepieToShow.imagePath = recepie.imagePath;
  // }
}
