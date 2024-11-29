import { Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { WrongChoiceComponent } from './wrong-choice/wrong-choice.component';

export const routes: Routes = [
    { path: 'technologies', component: TechnologiesComponent },
  { path: 'books', component: BooksComponent },
  { path: '', redirectTo: '/technologies', pathMatch: 'full' },  // Default route
  { path: '**', component: WrongChoiceComponent }  // Catch-all for invalid paths
];
