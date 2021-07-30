import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private _router: Router) { }

  public projects: any[] = [
    {
      name: 'Xcape Factory',
      path: '/xcapeFactory'
    },
    {
      name: 'Hunch',
      path: '/hunch'
    },
  ]

  ngOnInit(): void {
  }

  routeToProject(path) {
    console.log('routing to path', path)
    // this._router.navigateByUrl(path)
  }
}