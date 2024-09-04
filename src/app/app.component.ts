import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hamshoai-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{

    this.languageService.initLanguage()


    this.titleService.setTitle( "Mohamad Hamsho | Software Engineer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Frontend, software, engineer'},
      {name: 'description', content: '      Experienced in developing secure software solutions, intuitive interfaces, and leading tech projects to enhance digital experiences.'},
    ]);


    AOS.init();

  }
}
