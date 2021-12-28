import { Component } from '@angular/core';
import TurndownService from 'turndown';
import FileSaver from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Editor';
  html = '';
  turnownService=new TurndownService();
  markdown="";
  language='HTML';
  mode=true;

  ngDoCheck(): void {
    this.markdown=this.turnownService.turndown(this.html);
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // console.log(this.language);

  }
  onDownload(){
    var blob=new Blob([this.html], {type: "text/plain;charset=utf-8"})
    if(this.language=='HTML'){
      FileSaver.saveAs(blob, "download.html");
    }
    if(this.language=='Markdown'){
      FileSaver.saveAs(blob, "download.md");
    }
  }
}
