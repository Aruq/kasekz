import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })


  export class RouterLinkService{

   private subject = new Subject<boolean>();



   public setValue(value: boolean){
      this.subject.next(value);
   }



    public getValue(){
      return this.subject.asObservable();
    }


  }