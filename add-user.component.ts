/* import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import{MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-add-user',
  imports: [ NgIf],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
 userForm:FormGroup;
 
  user: any = 
  {Name: '', Address:'', Age: '', Profession:'', InterestRate:''};
  isEditing?:boolean;

  constructor( 
    private fb:FormBuilder,
    public dialogRef:MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: any
  ){

{this.userForm =this.fb.group({
  
  Name:['', Validators.required],
  Address:['', Validators.required],
Contact:['',[Validators.required, Validators.maxLength]],

})}

if(data.isEditing){
  this.userForm.patchValue(data.user);
}
}
onCancel(){
  this.dialogRef.close();
}
onSubmit(){}

}






















   */