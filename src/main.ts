import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { SizerModule } from './sizer/sizer.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [SizerModule],
})
export class App {
  name = 'Angular';
  fontSizePx = 12
}

bootstrapApplication(App);
