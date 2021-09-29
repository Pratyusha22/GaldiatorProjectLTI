import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.css']
})
export class SearchbusComponent implements OnInit {
  travels="LTI Travels";
  data=[{from:"Pune",to:"Mumbai",date:"12/09",arrival:"10:30",departure:"12:45",seatsavilable:15,fare:550},
  {from:"Pune",to:"Mumbai",date:"12/09",arrival:"11:30",departure:"12:45",seatsavilable:15,fare:550},
  {from:"Pune",to:"Mumbai",date:"12/09",arrival:"12:30",departure:"12:45",seatsavilable:15,fare:550},
  {from:"Pune",to:"Mumbai",date:"12/09",arrival:"12:30",departure:"12:45",seatsavilable:15,fare:550}];

  constructor() { }

  ngOnInit(): void {
  }

}
