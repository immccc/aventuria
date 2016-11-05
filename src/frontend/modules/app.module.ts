import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }   from "../components/app/app.component";
import { UserBarComponent } from "../components/userbar/userbar.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UserBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { };
