import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  template: '<app-layout></app-layout>'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('🎯 AppComponent initialized');
  }
}
