import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from "../components/app/app.component";
import { UserBarComponent } from "../components/userbar/userbar.component";
import { LoginModalComponent } from "../components/loginModal/loginModal.component";

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, UserBarComponent, LoginModalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { };
