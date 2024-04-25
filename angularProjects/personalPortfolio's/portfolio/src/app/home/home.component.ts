import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredProject = {} as project;

  constructor(private titleService: Title,  private projectService: ProjectsService ){
    this.titleService.setTitle('Pinki Jha - Home');

  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }

}
