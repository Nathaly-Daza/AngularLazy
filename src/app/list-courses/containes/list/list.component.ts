import { Component } from '@angular/core';
import { FirstServiceService } from '../../../service/first-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(private consume:FirstServiceService){

  }

  getDataFakeApi(){
    this.consume.getDataFake().subscribe(
      {next:(data)=>console.log(data),
        error:(error)=>console.log(error),
        complete:()=>{
          console.log('hola')
        }
      }
    );
  }

  ngOnInit():void{
    this.getDataFakeApi()
  }
}
