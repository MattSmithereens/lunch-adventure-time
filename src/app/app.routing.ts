import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChoiceComponent } from './choice/choice.component';
import { MexicanFoodComponent } from './mexican-food/mexican-food.component';
import { JapaneseFoodComponent } from './japanese-food/japanese-food.component';
import { UnhealthyMexicanFoodComponent } from './unhealthy-mexican-food/unhealthy-mexican-food.component';
import { HealthyMexicanFoodComponent } from './healthy-mexican-food/healthy-mexican-food.component';
import { UnhealthyJapaneseFoodComponent } from './unhealthy-japanese-food/unhealthy-japanese-food.component';
import { HealthyJapaneseFoodComponent } from './healthy-japanese-food/healthy-japanese-food.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'choice',
    component: ChoiceComponent
  },
  {
    path: 'choice/mexican',
    component: MexicanFoodComponent
  },
  {
    path: 'japanese',
    component: JapaneseFoodComponent
  },
  {
    path: 'choice/mexican/unhealthy',
    component: UnhealthyMexicanFoodComponent
  },

  {
    path: 'choice/mexican/healthy',
    component: HealthyMexicanFoodComponent
  },
  {
    path: 'choice/japanese/unhealthy',
    component: UnhealthyJapaneseFoodComponent
  },
  {
    path: 'choice/japanese/healthy',
    component: HealthyJapaneseFoodComponent
  }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
