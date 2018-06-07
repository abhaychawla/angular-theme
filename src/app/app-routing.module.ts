import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ShellComponent } from './shell/shell.component';
import { ThemeComponent } from './theme/theme.component';
import { AppContentComponent } from './app-content/app-content.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: ShellComponent,
    children: [
      { path: '', component: AppContentComponent },
      { path: 'settings', component: ThemeComponent }
    ]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
