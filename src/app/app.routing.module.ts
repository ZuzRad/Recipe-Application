import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';

// Define the paths for the different views in the app.
const routes: Routes = [
  { path: '', component: ListComponent }, // Default route: recipe list.
  { path: 'add', component: FormComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Register the routes in the Angular app.
  exports: [RouterModule]
})
export class AppRoutingModule { }
