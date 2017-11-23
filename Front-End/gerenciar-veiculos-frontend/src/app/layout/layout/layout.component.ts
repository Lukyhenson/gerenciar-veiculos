import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './layout.component.html'
})
export class LayoutDefaultComponent implements OnInit {

  title: string;
  messages: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  /* Método de mensagens a ser exibida no font-end */
  addMessages(messages: any[]): void {
    let i: number = 0;
    messages.forEach(item => {
      item.timeout = 10000 + ((i++) * 3000);
      this.messages.push(item);
    });
  }
}
