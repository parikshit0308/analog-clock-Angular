import { Component, OnInit } from '@angular/core';
import { HourComponent } from './hour/hour.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  title = 'analog';


ngOnInit(): void {
    this.timer();
}

  timer(){
    setInterval(() => {
      const d = new Date();
      const htime = d.getHours();
      const mtime = d.getMinutes();
      const stime = d.getSeconds();
    
      let hrotation = 30*htime + mtime/2;
      let mrotation = 6*mtime;
      let srotation = 6*stime;
    
    
      let hour = document.getElementById('hour') as HTMLElement;
      let minute = document.getElementById('minute') as HTMLElement;
      let second = document.getElementById('second') as HTMLElement;
      hour.style.transform = `rotate(${hrotation}deg)`;
      minute.style.transform = `rotate(${mrotation}deg)`;
      second.style.transform = `rotate(${srotation}deg)`;
    }, 1000);
  }

}
