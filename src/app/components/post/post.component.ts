import { Component, OnInit } from '@angular/core';
import {CommentPayload, CommentResponse, Comments} from '../../models/dataInterfaces';
import {AuthenticationService} from '../../services/authentication.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  today: Date = new Date();

  comments: Comments[] = [];

  comment: CommentPayload = {
    comment: '',
    name: this.auth.getUserDetails().name
  };

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.getComments().pipe(map((data: CommentResponse) => {
      this.comments = data.comments;
    })).subscribe();
  }

  postComment() {
    this.auth.postComment(this.comment).pipe(map((data: any) => this.comments.push(data.comment))).subscribe();
  }

}
