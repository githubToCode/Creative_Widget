import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AppService } from "./app.service";
import { CreativePreviewResponse } from "./types";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  creativePreviews: CreativePreviewResponse[] = [];
  selectedCreative: string = null;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getCreatePreviews();
  }

  getCreatePreviews(): void {
    this.creativePreviews = [];
    const reqPayload = {};
    this.appService.getCreatePreviews(reqPayload).subscribe((cps) => {
      this.creativePreviews = cps;
    });
  }

  selecCreativeCard($event): void {
    this.selectedCreative = $event.target.value;
  }
}
