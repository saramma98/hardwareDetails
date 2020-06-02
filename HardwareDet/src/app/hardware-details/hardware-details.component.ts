import { Component, OnInit } from '@angular/core';
import{HardwareDetService} from '../service/hardware-det.service';
import{HardwareContent} from '../class/HardwareContent';
import { Key } from 'protractor';

@Component({
  selector: 'app-hardware-details',
  templateUrl: './hardware-details.component.html',
  styleUrls: ['./hardware-details.component.css']
})
export class HardwareDetailsComponent implements OnInit {

  cpuDetails:any;
  batteryDetails:any;

  cpuData:HardwareContent[]=[];
  batteryData:HardwareContent[]=[];
   



  constructor( private hardwareDetService: HardwareDetService) { }

  ngOnInit(): void {
    this.getHardwareDetails();
  }

  getHardwareDetails(){
    this.hardwareDetService.getHardwareDetails().subscribe((response:any)=>{
      console.log(response);
      this.details(response);
    })

  }
  details(response){

    var keyValue=[];
    console.log('**************');
    console.log(response);

    

      this.cpuDetails= response.cpuData;
      this.batteryDetails=response.batteryData;
      console.log(this.cpuDetails);
      console.log(this.batteryDetails);

      for( let c in this.cpuDetails){
        
        console.log("qwerty" + c );
        console.log("12345" +this.cpuDetails[c]);
        const cpuD: HardwareContent={
          name : c,
          value: this.cpuDetails[c] 
        }
        this.cpuData.push(cpuD);
        }

        for(let b in this.batteryDetails){
          const battD:HardwareContent={
            name: b,
            value: this.batteryDetails[b]
          }
          this.batteryData.push(battD);
        } 
      }
      
    }

    
