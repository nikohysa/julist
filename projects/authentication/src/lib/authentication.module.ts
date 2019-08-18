import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { CommonModule } from "@angular/common";
import { AuthenticatorRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [CommonModule, AuthenticatorRoutingModule]
})
export class AuthenticationModule {
}
