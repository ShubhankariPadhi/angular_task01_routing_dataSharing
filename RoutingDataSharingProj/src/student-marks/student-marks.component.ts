import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.scss']
})
export class StudentMarksComponent implements OnInit {
  @Input() ary;
  @Input() getSelectedId;
  stuMarksArray=[];
  selectedId;


  constructor(private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = (params.get('id'));
      this.selectedId = id;
    });
    console.log("inside con"+this.getSelectedId);
    console.log("selected id"+this.selectedId);
  }
  isSelected(markId){
    //alert(this.getSelectedId);
    console.log("inside method"+this.getSelectedId);
    console.log(this.ary[0].subjects.english);
    console.log(markId==this.getSelectedId," checking ");
    return markId==this.getSelectedId;

  }
}
