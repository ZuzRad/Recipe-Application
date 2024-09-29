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

  constructor(private recipeService: RecipeService, private router: Router) {}

  addRecipe() {
    this.newRecipe.id = Date.now(); 
    this.recipeService.addRecipe(this.newRecipe);
    this.router.navigate(['/']);
  }
}
