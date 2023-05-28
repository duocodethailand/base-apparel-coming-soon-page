import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'base-apparel-coming-soon-master-project';
  CHK_EMAIL = false;
  Email_input:any;

  GetInput(){
    let emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    if(!this.Email_input || !emailRegex.test(this.Email_input)){
      this.CHK_EMAIL = true;
      this.animate()
    }
    else{
      this.CHK_EMAIL = false;
      this.animate()
    }
    
  }
  animate(){
    let elm = <HTMLButtonElement>document.querySelector('.btn.btn-primary')
    elm.style.left = '-8px';
    setTimeout(() => {
    elm.style.left = '0px';
    }, 200);
  }
}
