import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";
import { AcerComponent } from './acer/acer.component';
import { AppleComponent } from './apple/apple.component';
import { AsusComponent } from './asus/asus.component';
import { CanonComponent } from './canon/canon.component';
import { DellComponent } from './dell/dell.component';
import { HpComponent } from './hp/hp.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { LogitechComponent } from './logitech/logitech.component';
import { SamsungComponent } from './samsung/samsung.component';
import { TpLinkComponent } from './tp-link/tp-link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,AcerComponent,AppleComponent,AsusComponent,CanonComponent,DellComponent,HpComponent,LenovoComponent,LogitechComponent,SamsungComponent,TpLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '14.05.2024.dz';
}
