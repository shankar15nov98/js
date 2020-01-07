import { Component} from '@angular/core'; // here angular/core is imported .

@Component({
   // this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.
   selector: 'app-root', //
   templateUrl: './app.component.html', 
   // reference to the html file created in the new component.
   styleUrls: ['./app.component.css'] // reference to the style file.
})

export class AppComponent  {
   items=["Angular","React","underscore"];
   newItem=""; 
   pushItem=function()
   {
       if(this.newItem!="")
       {
           this.items.push(this.newItem);
           
           this.newItem="";
       }
   }
   removeItem=function (index) {
       this.items.splice(index,1);
       
   }
}
