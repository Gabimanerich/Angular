import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LiberadoComponent } from './liberado/liberado.component';
import { ModuleWithProviders } from '@angular/core';
import { ProtegidoComponent } from './protegido/protegido.component';
import { AuthGuard } from './servicos/auth/auth.guard';

const APP_ROTAS: Routes = [
  { path: 'protegido', component: ProtegidoComponent },
  { path:'login', component: LoginComponent },
  { path:'liberado', component: LiberadoComponent },

  { path: 'protegido', component: ProtegidoComponent,
  canActivate: [AuthGuard] }

];

export class AppRoutingModule {}

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);
