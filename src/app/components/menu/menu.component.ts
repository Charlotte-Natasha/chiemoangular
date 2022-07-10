import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name!: string;
  image!: File; 

  constructor(private http: HttpClient) { }

  onTitleChanged(event: any){
    this.name = event.target.value;
  }

  onImageChanged(event: any){
    this.image= event.target.files[0];
  }

  newFood(){
    const uploadData = new FormData();
    uploadData.append('name', this.name);
    uploadData.append('image', this.image, this.image.name);

    this.http.post('http://127.0.0.1:8000/api/menu/', uploadData).subscribe(
      data => console.log(data),
      error => console.log(error)
      
    );
  }

  ngOnInit(): void {
  }

}
