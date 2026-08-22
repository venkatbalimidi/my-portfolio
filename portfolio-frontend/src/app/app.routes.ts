import { Routes } from '@angular/router';

import { Admin } from './components/admin/admin';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Venkat Balimidi | Java Software Engineer'
  },
  {
    path: 'admin',
    component: Admin,
    title: 'Portfolio Admin | Venkat Balimidi'
  },
  {
    path: '**',
    redirectTo: ''
  }
];