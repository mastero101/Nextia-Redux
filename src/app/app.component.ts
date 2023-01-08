import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { filter } from 'rxjs/operators';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Benevit', url: '/perfil', icon: 'archive' },
    { title: 'Chat', url: '/chat', icon: 'paper-plane' },
    { title: 'Foro', url: '/foro', icon: 'heart' },
    { title: 'Register', url: '/register', icon: 'book' },
    { title: 'Login', url: '/login', icon: 'log-in' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)
  );

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  async logout(){
    await this.auth.logout();
    this.router.navigate(['/login']);
  }

  toggleTheme() {
    const appElement = document.querySelector('ion-app');
    const elementClasses = appElement.classList;
    if (elementClasses.contains('dark-theme')) {
      elementClasses.remove('dark-theme');
    } else {
      elementClasses.add('dark-theme');
    }
  }
}
