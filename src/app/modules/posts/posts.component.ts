import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

interface IPost {
  id: string;
  author?: string;
  title?: string;
  category?: string;  //This is optional. So add a '?'.
  date?: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  dataSource !: MatTableDataSource<IPost>;
  posts !: IPost[];
  columns: string[] = ['id','author', 'title', 'category', 'date'];
  constructor() { }

  ngOnInit(): void {
  }

}
