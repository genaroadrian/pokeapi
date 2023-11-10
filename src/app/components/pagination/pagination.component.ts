import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { IPagination } from '@core/interfaces/pagination.interface';
import { Pagination } from '@core/classes/pagination';
import { IPokeParams } from '@api/interfaces/poke-params.interface';
import { BaseComponent } from '@core/components/base.component';
import { BehaviorSubject } from 'rxjs';
import { PokeParams } from '@api/classes/poke-params';
import { DEFAULT_LIMIT } from '@core/constants/default-limit';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule],
  templateUrl: './pagination.component.html',
  styles: ``,
})
export class PaginationComponent extends BaseComponent {
  @Input() pagination: IPagination = new Pagination();
  defaultLimit = DEFAULT_LIMIT;
  @Input() $params: BehaviorSubject<IPokeParams> = new BehaviorSubject(
    new PokeParams()
  );

  onPagechange(page: number) {
    const params = this.$params.getValue();
    params.page = page;
    this.$params.next(params);
  }
}
