import { Component, OnInit, Input } from '@angular/core';
import { Comments } from '../../models/dataInterfaces';
import {AuthenticationService} from '../../services/authentication.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() userComments: Comments;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  inccrementLikes() {
    this.auth.like(this.userComments).pipe(map((data: any) => {
      this.userComments = data.comment;
    })).subscribe();
  }

  incrementDislikes() {
    this.auth.dislike(this.userComments).pipe(map((data: any) => {
      this.userComments = data.comment;
    })).subscribe();
  }

}
