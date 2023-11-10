import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from '@core/services/loader.service';
import { BaseComponent } from '@core/components/base.component';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styles: `
  .loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1); /* Fondo semitransparente */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
  `,
})
export class AppComponent extends BaseComponent {
  loading = false;
  constructor(
    private loaderService: LoaderService,
    private cdRef: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    this.loaderService.$loading
      .pipe(
        takeUntil(this.$unsubscribe),
        tap((loading) => {
          this.loading = loading;
          this.cdRef.detectChanges();
        })
      )
      .subscribe();
  }
}
