import { Component, OnInit } from '@angular/core';

interface constit{
name:string

}

@Component({
  selector: 'app-corparate-documents',
  templateUrl: './corparate-documents.component.html',
  styleUrls: ['./corparate-documents.component.scss']
})
export class CorparateDocumentsComponent implements OnInit {

  public pathTree: any = [
    {
      name: 'О Бирже',
      link:'/about-us'
    },
    {
      name: 'Корпоративные документы'
    }
  ]
 consts:constit[]=[{
  name:'Устав АО "Казахстанская фондовая биржа"'
 },
 {
  name:'Свидетельство о государственной перерегистрации'
 }
]

  
  viewMode: string | undefined;
        ngOnInit() {
    this.viewMode = "tab1";
    console.log(this.viewMode);
  }

}


