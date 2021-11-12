import { Component } from '@angular/core';
import { WebapiService } from './webapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;
  todoList: any[] = [];

  constructor(private webapi: WebapiService) {
    this.title = webapi.setTitle();
  }

  onClickLoadData() {
    this.webapi.feedData().subscribe((result: any) => {
      this.todoList = result;
    });
  }

  onClickResetData() {
    this.todoList = [];
  }
}
