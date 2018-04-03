import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/Http"
import { Observable } from 

@Injectable()
export class RemotecallService {

  constructor(private remotehttp:HttpClient) { }
   allcallremote = function(){
     console.log("I am in service")
   }
   allcallRestData():{
     this.remotehttp.get("https://jsonplaceholder.typicode.com/users").
   }
}
