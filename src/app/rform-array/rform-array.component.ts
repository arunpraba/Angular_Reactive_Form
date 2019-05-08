import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-rform-array',
  templateUrl: './rform-array.component.html',
  styleUrls: ['./rform-array.component.scss']
})
export class RformArrayComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  myform = this.fb.group({
    firstName: [],
    lastName: [],
    address: this.fb.group({
      address: [],
      pincode: []
    }),
    branch: this.fb.array([this.createBranchArray()])
  });

  createBranchArray() {
    return this.fb.group({
      branch: [],
      branchCode: []
    });
  }

  get branchArray() {
    return this.myform.get('branch') as FormArray;
  }
  ngOnInit() {}

  addBranch() {
    this.branchArray.push(this.createBranchArray());
  }

  removeBranch(index) {
    this.branchArray.removeAt(index);
  }

  saveSubmit() {
    console.log(this.myform.value);
  }

  updateValue() {
    this.myform.patchValue({
      firstName: 'Arun',
      lastName: 'Praba',
      address: this.setAddress(),
      branch: this.fb.array([this.createBranchArray()])
    });
  }

  setAddress() {
    return {
      address: 'Bangalore',
      pincode: '560000'
    };
  }
}
