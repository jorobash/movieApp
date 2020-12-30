import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.page.html',
  styleUrls: ['./actor.page.scss'],
})
export class ActorPage implements OnInit {
  bio = null;
  acting = [];
  profileImage = null;

  constructor(private route: ActivatedRoute,private api: ApiService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    
    this.api.getActorDetails(id).subscribe(res => {
      console.log(res);
      this.bio = res;
      this.profileImage = `${environment.images}/w200${this.bio.profile_path}`
    });

    this.api.getActorCreditList(id).subscribe(res => {
      console.log(res);
      this.acting = res;
    });
  }

}
