import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditorComponent } from './book-editor/book-editor.component';
import { BookShareFormComponent } from './book-share-form/book-share-form.component';
import { SentPageComponent } from './sent-page/sent-page.component';

export const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'books/:id/edit', component: BookEditorComponent },
  { path: 'books/new', component: BookEditorComponent },
  { path: 'books/:id/share', component: BookShareFormComponent },
  { path: 'books/:id/share/sent', component: SentPageComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
