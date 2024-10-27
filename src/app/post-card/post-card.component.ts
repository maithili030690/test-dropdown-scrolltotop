import { Component, OnInit } from '@angular/core';
import { Ipost } from '../module/post';
import { postArr } from '../consts/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
allPosts:Array<Ipost> =postArr
  constructor() { }

  ngOnInit(): void {
    console.log(this.allPosts.length > 0)
  }

}
