import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Upewnij się, że to jest styleUrls
})
export class AppComponent {
  title = 'Recipe Application';
}
