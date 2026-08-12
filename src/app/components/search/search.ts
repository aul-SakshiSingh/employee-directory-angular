import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class SearchComponent {
 
  searchControl=new FormControl('');

 
  @Output() searchChange = new EventEmitter<string>();
 
 constructor(){
  this.searchControl.valueChanges.subscribe(value =>{
    this.searchChange.emit(value ?? '');
  });
 }
 
}
 
