import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from './model/drug';
import { DrugService } from './service/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  list$: Observable<Drug[]> = this.drugService.getAll();
  title = 'drugstore';

  constructor(
    private drugService: DrugService,
  ) {

  }
}
