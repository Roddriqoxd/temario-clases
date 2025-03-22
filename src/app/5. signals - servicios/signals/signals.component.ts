import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  datex: WritableSignal<number>= signal<number>(0);
  data = signal<number>(1);
  count: WritableSignal<number> = signal(10);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor() { }

  subirData() {
    this.data.set(this.data() + 1);
}
}
