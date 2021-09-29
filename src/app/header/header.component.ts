import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message:boolean=false;
  user?: string | null;

  constructor(private service:BusService,private route:Router) { }

  ngOnInit(): void {
    this.user=sessionStorage.getItem('UserName')
    if(this.user === null)
      this.route.navigate(['Home']);
    
    
    this.service.recievedStatus().subscribe((data)=>{
      this.message=data;
      });
  }
  logout()
  {
    console.log("hi");
    sessionStorage.removeItem('username');
    sessionStorage.clear();
    this.service.subject.next(false);
    //this.message=false;
    this.route.navigate(['Home']); 
  } 

}