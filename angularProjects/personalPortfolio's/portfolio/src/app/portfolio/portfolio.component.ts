import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent  implements OnInit{
  projects = { } as project[];

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Pinki Jha - Portfolio');

  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
