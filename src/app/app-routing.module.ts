import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/home']);
const routes: Routes = [
  {
    path: '',
    redirectTo: 'launchscreen',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectLoggedInToHome},
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectLoggedInToHome},
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'launchscreen',
    loadChildren: () => import('./launchscreen/launchscreen.module').then( m => m.LaunchscreenPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
