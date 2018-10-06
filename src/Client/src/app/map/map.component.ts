import * as core from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';



@core.Component({
  selector: 'app-map',
  templateUrl: './map2.0.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements core.OnInit {

  tags: ITags[];


  constructor(public TagProvider: TagServiceProvider) { 
  
  }

  loadTags() {
    this.TagProvider.getTags()
      .then(data => {
        this.tags = data;
      });
  }




  ngOnInit() {
   
  }

}

export interface ITags {
  cx: number;
  cy: number;
  id :number;
}
