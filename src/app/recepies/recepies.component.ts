import { Component, OnInit } from '@angular/core';
import {Recepie} from "./recepiel";
import {RecepieService} from "./recepie.service";

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecepieService]
})
export class RecepiesComponent implements OnInit {

  selectedRecepie: Recepie;

  constructor(private recipeService: RecepieService) {
  }

  ngOnInit() {
    this.recipeService.recepieSelected.subscribe((recipe: Recepie) => {
        this.selectedRecepie = recipe;
      }
    );


  }
}

