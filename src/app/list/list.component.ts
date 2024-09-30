// ListComponent: Displays a list of recipes. Users can view details or delete recipes.
// The component subscribes to RecipeService to get the latest list of recipes.
import { Component, OnInit } from '@angular/core';
import { RecipeService, Recipe } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes: Recipe[] = [];

  // Dependency injection
  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    // Subscribe to the observable from RecipeService to get the list of recipes.
    this.recipeService.recipes$.subscribe(data => this.recipes = data);
  }

  // Call the delete method from RecipeService to remove a recipe.
  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
  }

  // Navigate to the details page of the selected recipe.
  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
