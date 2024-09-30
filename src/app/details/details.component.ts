// DetailsComponent: Displays the details of a selected recipe based on the recipe ID.
// The ID is fetched from the route parameters and used to retrieve the recipe from RecipeService.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService, Recipe } from '../recipe.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // Recipe to display in the view. 
  recipe?: Recipe; // ? indicates that you do not need to initialize this property when creating the object.

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));// Get the recipe ID from the route.
    this.recipe = this.recipeService.getRecipeById(id); // Fetch the recipe by ID from the service.
  }
}
