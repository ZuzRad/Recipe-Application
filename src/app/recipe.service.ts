// RecipeService: A service to manage recipe data. Uses RxJS BehaviorSubject to hold
// and share the list of recipes across components. Also handles HTTP requests
// to load the initial recipes from a local JSON file.
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

// Recipe interface: Defines the structure for a recipe object.
export interface Recipe { //allows export to other files in the module
  id: number;
  title: string;
  details: string;
}

@Injectable({ // Class as a service
  providedIn: 'root' // This service will be available throughout the application
})
export class RecipeService {
  private recipes: Recipe[] = [];
  
   // BehaviorSubject is used to emit the current recipe list to any subscribing components.
  private recipesSubject = new BehaviorSubject<Recipe[]>(this.recipes);
  recipes$ = this.recipesSubject.asObservable(); // Observable that components can subscribe to.

  constructor(private http: HttpClient) {
    this.loadRecipes();
  }

  private loadRecipes() {
    this.http.get<Recipe[]>('assets/recipes.json')
      .subscribe({
        next: data => {
          this.recipes = data;
          this.recipesSubject.next(this.recipes); // Notify subscribers of the new recipes.
        },
        error: err => {
          console.error('Failed to load recipes:', err);
        }
      });
  }

    // Add a new recipe to the list and notify subscribers.
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesSubject.next(this.recipes);
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id); // Returns a new array 
    this.recipesSubject.next(this.recipes);
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }
}
