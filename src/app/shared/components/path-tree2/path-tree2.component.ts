import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-path-tree2',
  templateUrl: './path-tree2.component.html',
  styleUrls: ['./path-tree2.component.scss']
})
export class PathTree2Component implements OnInit {
  @Input() pathTree: any = [
    {
      name: 'Default empty'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}