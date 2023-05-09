import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{

  title = 'my-practice-app';
  parentMessage:string = 'Message coming from parent component';
  message!:string;
  messageFromTypescriptFile = "Message From Typescript file.";
  imgUrl:string='https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg';
  fromChildOutput!:string;
  @ViewChild(PostComponent) childComp: any;
  bool: boolean = false;

  constructor() {
    console.log(this.childComp);
  }
  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
    
  }

  reciveMessage($event: string) {
    console.log($event);
    this.fromChildOutput = $event;
    
 }

 buttonClick() {
  console.log("Button is clicked !");
  
 }
 
 onKeyup(){
  console.log('Keyup event working');
 }

}
