import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FillingInDetailsComponent } from './filling-in-details/filling-in-details.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';


const routes: Routes = [
  {path: '', component: FillingInDetailsComponent},
  {path: 'terms-of-use', component: TermsOfUseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
