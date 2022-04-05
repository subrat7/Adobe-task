import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'adobe-UI-task';
  timer: number = 0;
  enteredValue = '';

  constructor(private router: Router, private app: AppService) {}

  ngOnInit() {
    this.recursion();
  }

  startCountdown(seconds: number): void {
    let counter = seconds;
    const interval = setInterval(() => {
      this.timer = counter;
      counter--;
      if (counter < 0 ) {
        clearInterval(interval);
        console.log('Ding!');
      }
    }, 1000);
  }

  recursion() {
    this.startCountdown(30);
  }

  submit() {
    console.log('submitted');
    const obj = {key : this.enteredValue}
    const extra = {queryParams: obj};
    this.router.navigate(['/'], extra);

    this.app.getStaticContent().subscribe({
      next: data => console.log(data),
      error: err => console.log(err)
    })
  }
}
