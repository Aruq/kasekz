import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })


  export class RouterLinkService{

   private subject = new Subject<string>();



   public setValue(value: string){
      this.subject.next(value);
   }



    public getValue(){
      return this.subject.asObservable();
    }


  }