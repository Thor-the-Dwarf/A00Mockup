import { Component } from '@angular/core';

@Component({
  selector: 'app-tdlist',
  templateUrl: './tdlist.component.html',
  styleUrl: './tdlist.component.css'
})
export class TDListComponent {
  todoData = [
    {title: "html", done: true},
    {title: "css", done: true},
    {title: "javascript", done: true},
    {title: "Angular", done: false},
  ];
}
