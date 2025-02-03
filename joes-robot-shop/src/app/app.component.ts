import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from '../user/sign-in/sign-in.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    CartComponent,
    SignInComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
}
