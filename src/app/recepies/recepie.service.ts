import {EventEmitter, Injectable} from '@angular/core';
import {Recepie} from "./recepiel";
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecepieService {

  constructor(private slService: ShoppingListService) { }

  recepieSelected= new EventEmitter<Recepie>();
  private recepies: Recepie[] = [
    new Recepie('Tagine', 'Plat Marocain', 'http://img.taste.com.au/TPheVxL9/w643-h428-cfill-q90/taste/2016/11/lamb-tagine-11974-1.jpeg',[
      new Ingredient('paprika', 3),
      new Ingredient('Meat', 3)
    ]),
    new Recepie('Tagine', 'Plat Marocain', 'http://img.taste.com.au/TPheVxL9/w643-h428-cfill-q90/taste/2016/11/lamb-tagine-11974-1.jpeg',[
      new Ingredient('paprika', 3),
      new Ingredient('Meat', 3)
    ]),
    new Recepie('Tagine', 'Plat Marocain', 'http://img.taste.com.au/TPheVxL9/w643-h428-cfill-q90/taste/2016/11/lamb-tagine-11974-1.jpeg',[
      new Ingredient('paprika', 3),
      new Ingredient('Meat', 3)
    ])
  ];

  getRecepes(){
    return this.recepies.slice();
  }

  addIngredientsToSoppingList(ingredients: Ingredient[]){

    console.log("recepie service "+ ingredients[0].name);
this.slService.addIngredients(ingredients);
  }

}
