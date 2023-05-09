import { Component, Input, OnInit } from '@angular/core';


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
  constructor(){}
  ngOnInit(): void {
  }

}
