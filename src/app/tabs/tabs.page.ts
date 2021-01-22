import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  pages =
  [
    {
      title : "Inicio",
      url   : "/home",
      name  : "home"
    },
    {
      title : "Ubicación",
      url   : "/login",
      name  : "home"
    },
    {
      title : "Que hacer hoy",
      url   : "/logout",
      name  : "home"
    }
   
  ]
  selectedPath='';
  constructor(private router:Router) {
    this.router.events.subscribe((event: RouterEvent)=>{
      this.selectedPath=event.url;
    }); 
  }

  ruta(p:any){
    
    if(p=='Inicio'){
   //this.router.navigate(['/menu/menu/home'])
    //this.navigationService.navigatePageHome()
    }
    if(p=='Ubicación'){
     
     
    //this.router.navigate([`/menu/menu/${1}/ubicacion`])

    }
    if(p=='Que hacer hoy'){
      
    //this.router.navigate([`/menu/menu/${1}/hoy`])
  }
  
  
  }
}
