import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

export interface Recipe {
  id: number;
  title: string;
  details: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [];
  
  private recipesSubject = new BehaviorSubject<Recipe[]>(this.recipes);
  recipes$ = this.recipesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadRecipes();
  }

  private loadRecipes() {
    this.http.get<Recipe[]>('assets/recipes.json')
      .subscribe({
        next: data => {
          this.recipes = data;
          this.recipesSubject.next(this.recipes);
        },
        error: err => {
          console.error('Failed to load recipes:', err);
        }
      });
  }

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
