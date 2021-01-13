import { SignUpComponent } from './sign-up/sign-up.component';
import { DetailsComponent } from './details/details.component';
import { CardsComponent } from './cards/cards.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",component:CardsComponent},
  {path:"blogDetails",component:DetailsComponent},
  {path:"SignUp",component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
