import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Route, Router } from '@angular/router';
import { RouterLinkService } from '@shared/services/router-link.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
   
  public vv = false;

  constructor(private router: RouterLinkService, private route: Router) {
      this.router.getValue().subscribe(next =>{
        if(next === 'about-us'){
             this.vv = true;
           }else if(next == 'mission-value'){
            this.vv = true;
            }else{
              this.vv = false;
            }
      })




   }

  ngOnInit(): void {
  
      //  this.router.events.subscribe((next) =>{
      //     if(next instanceof NavigationStart){
      //       console.log(next.url)
      //        if(next.url === '/about_us'){
      //           alert(1)
      //           this.vv = true;
      //        }else if(){}else{
      //         this.vv = false;
      //        }


      //     }


      //  })

      
      if(this.route.url === '/about-us'){
        this.vv = true;
      }


       if(this.route.url === '/mission-value'){
        this.vv = true;
       }

    


      

   
  }

}
