import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telteg';
  a :number = 0;
  b :number = 0;
  area !: number;
  areaShow = false;

  
  calcHandle():void{
    if(this.checkValidation()){
      console.log("működik")
      this.area = this.calcArea(this.a, this.b);
      this.a = 0;
      this.b = 0;
      this.areaShow = true;
    }else{
      alert("Hiba! Érvénytelen bemenő adatok");
    }

}

    calcArea(a: number, b: number):number {
      let area = a * b;
      return area;

    }
    checkValidation():boolean{
      let valid = true
      if(this.a <= 0){
        valid = false;

      }
      if(this.b <= 0){
        valid = false;

      }
      return valid;
    }
    hideArea():void{
      this.areaShow = false;
    }
}
