import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokePageComponent } from './joke/pages/jokePage.component';
import { MyJokesPageComponent } from './myJokes/pages/myJokesPage.component';

const routes: Routes = [
  {path: '', component: JokePageComponent},
  {path: 'my-jokes', component: MyJokesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
