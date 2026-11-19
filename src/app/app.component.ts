import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@presentation/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { hideBootSplashWhenReady } from './boot-splash';
import { ADMIN_MASCOT_LINES } from '@shared/motion/admin-mascot-lines';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'Goat Sports';
  readonly mascotLines = ADMIN_MASCOT_LINES;
  private authService = inject(AuthService);
  sessionReady$!: Observable<boolean>;

  constructor() {
    hideBootSplashWhenReady(inject(Router), this.authService.sessionReady$);
  }

  ngOnInit() {
    this.sessionReady$ = this.authService.sessionReady$;
  }
}
