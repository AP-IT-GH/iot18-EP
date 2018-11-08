import { Component, OnInit } from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';
import { ITags } from '../map/map.component';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
tags:ITags[]
hide=true;
deleteTag

  constructor(public TagProvider: TagServiceProvider) { 
        this.tags = [
      { "xPos": 50, "yPos": 50, "mac": "0", "stroke": 5, "id": 0 },
      { "xPos": 150, "yPos": 150, "mac": "1", "stroke": 5, "id": 1 },
      { "xPos": 250, "yPos": 250, "mac": "2", "stroke": 5, "id": 2 },
      { "xPos": 350, "yPos": 350, "mac": "3", "stroke": 5, "id": 3 },

    ]
  }

  addTag(tag:string) {
    this.TagProvider.addTag(tag)
    .then(data => {
      if (data) {
        console.log("succes")
      }
      else {
        console.log("fail")
      }
    });
  }

  selectedTag(tag:string) {
    this.deleteTag =tag
    this.hide = !this.hide
  }

  deleteTagId(x){
    console.log(x)
  }
 

  
  

  

}