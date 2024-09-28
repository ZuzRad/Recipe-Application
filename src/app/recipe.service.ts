import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    { id: 1, title: 'Spaghetti', description: 'Makaron z sosem pomidorowym', ingredients: ['Makaron', 'Sos pomidorowy'] },
    { id: 2, title: 'Pizza', description: 'Pizza z serem', ingredients: ['Ciasto', 'Ser', 'Sos pomidorowy'] }
  ];
  
  private recipesSubject = new BehaviorSubject<Recipe[]>(this.recipes);
  recipes$ = this.recipesSubject.asObservable();

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesSubject.next(this.recipes);
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    this.recipesSubject.next(this.recipes);
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }
}
