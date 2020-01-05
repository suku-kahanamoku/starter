import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'ng-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'ng.examples.menu.todos' },
    { link: 'stock-market', label: 'ng.examples.menu.stocks' },
    { link: 'theming', label: 'ng.examples.menu.theming' },
    { link: 'crud', label: 'ng.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'ng.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'ng.examples.menu.form' },
    { link: 'notifications', label: 'ng.examples.menu.notifications' },
    { link: 'elements', label: 'ng.examples.menu.elements' },
    { link: 'authenticated', label: 'ng.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
