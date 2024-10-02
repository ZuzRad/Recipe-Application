// FormComponent: Allows users to add a new recipe. The form data is bound to 'newRecipe'.
// When submitted, the recipe is added to the list, and the user is redirected to the home page.
import { Component } from '@angular/core';
import { RecipeService, Recipe } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newRecipe: Recipe = { id: 0, title: '', details: '' };
  titleError: boolean = false;
  detailsError: boolean = false;

  constructor(private recipeService: RecipeService, private router: Router) {}

  addRecipe() {
    this.titleError = !this.newRecipe.title;
    this.detailsError = !this.newRecipe.details;

    if (this.titleError || this.detailsError) {
      return;
    }
    
    this.newRecipe.id = Date.now(); 
    this.recipeService.addRecipe(this.newRecipe);
    this.router.navigate(['/']);
  }
}
