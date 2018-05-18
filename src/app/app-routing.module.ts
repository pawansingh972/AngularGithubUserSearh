import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSearchComponent } from './components/usersearch.component';
import { UserDetailsComponent } from './components/user-details.component';

const routes: Routes = [
      { path: '', redirectTo: '/search', pathMatch:  'full'},
      { path: 'search',  component: UserSearchComponent},
      { path: 'userdetails/:username',  component: UserDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
