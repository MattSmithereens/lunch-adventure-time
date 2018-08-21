import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChoiceComponent } from './choice/choice.component';
import { MexicanFoodComponent } from './mexican-food/mexican-food.component';
import { JapaneseFoodComponent } from './japanese-food/japanese-food.component';

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
    path: 'choice/japanese',
    component: JapaneseFoodComponent
  }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
