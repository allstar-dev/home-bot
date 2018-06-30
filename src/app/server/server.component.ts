import { Component, OnInit } from '@angular/core';
import { Server } from '../models/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  private server = new Server('server 1');

  constructor() { }

  ngOnInit() {
  }

}
