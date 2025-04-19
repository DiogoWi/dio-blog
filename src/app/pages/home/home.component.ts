import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeTitleComponent } from '../../components/home-title/home-title.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HomeTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
