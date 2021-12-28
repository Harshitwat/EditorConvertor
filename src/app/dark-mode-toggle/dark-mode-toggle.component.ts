import { Component, EventEmitter, Output } from "@angular/core";
import { DarkModeService } from "angular-dark-mode";

@Component({
  selector: "app-dark-mode-toggle",
  templateUrl: "./dark-mode-toggle.component.html",
  styleUrls: ["./dark-mode-toggle.component.css"]
})
export class DarkModeToggleComponent {
  darkMode$ = this.darkModeService.darkMode$;
  @Output() theme=new EventEmitter();
  mode=false;

  constructor(private darkModeService: DarkModeService) {}

  onToggle() {
    this.theme.emit(this.mode);
    this.mode=!this.mode;
    this.darkModeService.toggle();
  }
}

