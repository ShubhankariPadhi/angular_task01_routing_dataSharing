import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  matchingStuIdData =[];
  stuDataArray=[
    {"id":1, "name":"subhi","address":{"area": 'srnagar',"zipcode":500016}},
    {"id":2,"name":"latha","address":{"area": 'srnagar',"zipcode":500016}},
    {"id":3, "name":"akhil","address":{"area": 'balkampet',"zipcode":500016}},
    {"id":4,"name":"gufran","address":{"area": 'yusufguda',"zipcode":500019}},
    {"id":5, "name":"bhranti","address":{"area": 'koti',"zipcode":500002}},
    {"id":6,"name":"anil","address":{"area": 'srnagar',"zipcode":500016}},
    {"id":7,"name":"sandhya","address":{"area": 'uppal',"zipcode":500039}},
  ];

  stuMarks=[
    {"id":1,"subjects":{"english": 79,"math":88,"physics":95,"chemistry":92,"IT":97}},
    {"id":2,"subjects":{"english": 85,"math":77,"physics":87,"chemistry":87,"IT":95}},
    {"id":3,"subjects":{"english": 83,"math":86,"physics":83,"chemistry":93,"IT":96}},
    {"id":4,"subjects":{"english": 77,"math":84,"physics":87,"chemistry":92,"IT":94}},
    {"id":5,"subjects":{"english": 76,"math":83,"physics":86,"chemistry":93,"IT":93}},
    {"id":6,"subjects":{"english": 86,"math":77,"physics":87,"chemistry":93,"IT":95}},
  ];
  selectedId;
  constructor(private router:Router,private route:ActivatedRoute ){ }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = (params.get('id'));
    });
  }

  view(sid) {
    console.log(sid);
    this.selectedId=sid;


   // this.router.navigate(['studentmarks',sid]);
    this.router.navigate(['studentlist/studentmarks',sid]);
  }

  edit(sid) {
   this.router.navigate(['studentEdit',sid]);


  }

}
