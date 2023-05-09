import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit{

  title:string = "List of Posts";

  @Input()
  fromParent!: string;
  postMessage:string = "Message from Post Component";
  childMessage:string = "From Child Component";
  outputChildMessage:string = 'Message from Child Component Via Output';

  @Output() messageEvent = new EventEmitter<string>();

  constructor(){}
  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  
  }

}
