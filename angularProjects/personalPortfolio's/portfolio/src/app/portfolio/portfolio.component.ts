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

  isCollapsed: boolean = true;

  typescript: boolean = false;
  angular:boolean = false;
  java:boolean = false;
  javascript:boolean = false;
  aspnet:boolean = false;
  html:boolean = false;
  css:boolean = false;
  bootstrap:boolean = false;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Pinki Jha - Portfolio');

  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
  Filter(){
    let filterTags: Tag[] = [];
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if(this.java){
      filterTags.push(Tag.JAVA);
    }

    if(this.bootstrap){
      filterTags.push(Tag.BOOTSTRAP);
    }

    if(this.css){
      filterTags.push(Tag.CSS);
    }

    if(this.html){
      filterTags.push(Tag.HTML);
    }

    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }

    if(this.aspnet){
      filterTags.push(Tag.ASPNET);
    }

    if(this.angular || this.java || this.bootstrap || this.html || this.css || this.aspnet || this.javascript || this.typescript ){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }
  ResetFilters(){
    this.angular = false;
    this.java = false;
    this.bootstrap = false;
    this.aspnet = false;
    this.html = false;
    this.css = false;
    this.javascript = false;
    this.typescript = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
