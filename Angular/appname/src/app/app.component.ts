import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// decorator function ,stores meta data
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appname';
}
// template means refreing to html also style for css