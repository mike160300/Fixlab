import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Router:
import { AuthRoutingModule } from './auth-routing.module';

//Servicios:
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service';

//Componentes:
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [RegisterComponent, LoginComponent, SignComponent],
  providers: [AuthenticationService, AuthGuardService]
})
export class AuthModule { }
