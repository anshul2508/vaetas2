import { Component, OnInit } from '@angular/core';
import {Video} from '../../models/video';
import {VaetasService} from '../../services/vaetas.service';
import {Store} from '@ngrx/store';
import {State} from '../../reducers/index';
import {VideoListSuccessAction} from '../../actions/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor( public vaetas: VaetasService, public store: Store<State>) { }

  ngOnInit() {
    this.vaetas.importVideos().subscribe(
      (value) => {
        const videos = value['data'];
        this.store.dispatch(new VideoListSuccessAction(videos));
        return videos;
      }
    );
  }


}
