import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  id: any;
  name: any;

  employees: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   this.get()
  }

  get(): void{
    this.http.get("http://localhost:3000/get").subscribe((res: any) => {
      console.log('get called res', res);
      this.employees = res;

      // for (let i = 0; i < this.employee s.length; i++) {
      //   const employee = this.employees[i];
      //   console.log(`Name: ${employee.name}, Age: ${employee.age}, Position: ${employee.position}`);
      // }

    }, (err: any) => {
      console.log('error', err);
    });
  }

  add(): void {
    const employee = {
      id: this.id,
      name: this.name
    };

    this.http.post("http://localhost:3000/add", employee).subscribe(response => {
      console.log(response);
         this.get()

    }, error => {
      console.error(error);
    });
   // this.get()
   this.id = null;
   this.name = '';

  }

  update() : void{
    const employee = {
      id: this.id,
      name: this.name
    };
    this.http.put("http://localhost:3000/put", employee).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
    this.get()
  }

  deleteEmp() : void{

    const employee = {
      id: this.id,
      name: 'z'
    };

    const id = this.id;

    this.http.delete(`http://localhost:3000/delete/${this.id}`).subscribe(response => {
      console.log(response);
      this.get()
    }, error => {
      console.error(error);
    });

  }

}


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit{

//   id: any
//   name: any

//   employees: any[] = [];

//   constructor(private http: HttpClient){

//   }
//   ngOnInit(): void {
//     // throw new Error('Method not implemented.');
//     this.http.get("http://localhost:3000/get").subscribe((res: any) => {
//       console.log('res', res);
//       this.employees = res;

//     }, (err: any)=>{
//       console.log('error',err)

//     })


//     // this.http.post()

//   }

//   function add() {
//     const employee = {
//       id: this.id,
//       name: this.name
//     }

//     this.employees.push(employee)

//     this.id = null;
//     this.name = "";
//   }

// }
