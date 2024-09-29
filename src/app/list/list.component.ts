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

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.recipeService.recipes$.subscribe(data => this.recipes = data);
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
