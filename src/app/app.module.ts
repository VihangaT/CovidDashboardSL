import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { WelcomeImagSliderComponent } from './welcome-imag-slider/welcome-imag-slider.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ValueShaper} from './shared/valueShaper.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    WelcomeImagSliderComponent,
    JumbotronComponent,
    ValueShaper,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ValueShaper],
  bootstrap: [AppComponent, NavigationBarComponent, WelcomeImagSliderComponent, JumbotronComponent, FooterComponent , AboutComponent]
})
export class AppModule { }
