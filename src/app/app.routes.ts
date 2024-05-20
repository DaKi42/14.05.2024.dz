import { Routes } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { AsusComponent } from './asus/asus.component';
import { CanonComponent } from './canon/canon.component';
import { DellComponent } from './dell/dell.component';
import { HpComponent } from './hp/hp.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { LogitechComponent } from './logitech/logitech.component';
import { SamsungComponent } from './samsung/samsung.component';
import { TpLinkComponent } from './tp-link/tp-link.component';
import { AcerComponent } from './acer/acer.component';
import { AppComponent } from './app.component';




export const routes: Routes = [
  { path:'',component:AppComponent},
  { path: 'apple', component: AppleComponent },
  { path: 'asus', component: AsusComponent },
  { path: 'canon', component: CanonComponent },
  { path: 'dell', component: DellComponent },
  { path: 'hp', component: HpComponent },
  { path: 'lenovo', component: LenovoComponent },
  { path: 'logitech', component: LogitechComponent },
  { path: 'samsung', component: SamsungComponent },
  { path: 'tp-link', component: TpLinkComponent },
  { path: 'acer', component: AcerComponent },
];