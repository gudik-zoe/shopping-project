import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { RegistrationComponent } from './registration/registration.component';
 import { LapStoreComponent } from './lap-store/lap-store.component';
import { LapsDetailsComponent } from './laps-details/laps-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'products', component: ProductsComponent },
  {path : 'lap-store' , component:LapStoreComponent},
  {path:'laps-details/:id', component:LapsDetailsComponent},
  { path: 'card', component: CartComponent },
  { path: 'purchase', component: RegistrationComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
