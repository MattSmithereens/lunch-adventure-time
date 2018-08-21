import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MexicanFoodComponent } from './mexican-food/mexican-food.component';
import { JapaneseFoodComponent } from './japanese-food/japanese-food.component';
import { ChoiceComponent } from './choice/choice.component';
import { UnhealthyMexicanFoodComponent } from './unhealthy-mexican-food/unhealthy-mexican-food.component';
import { HealthyMexicanFoodComponent } from './healthy-mexican-food/healthy-mexican-food.component';
import { HealthyJapaneseFoodComponent } from './healthy-japanese-food/healthy-japanese-food.component';
import { UnhealthyJapaneseFoodComponent } from './unhealthy-japanese-food/unhealthy-japanese-food.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MexicanFoodComponent,
    JapaneseFoodComponent,
    ChoiceComponent,
    UnhealthyMexicanFoodComponent,
    HealthyMexicanFoodComponent,
    HealthyJapaneseFoodComponent,
    UnhealthyJapaneseFoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
