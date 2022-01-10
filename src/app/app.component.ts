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
  currentPage: number = 1;
  pageSize: number = 10;
  totalCount: number = null;
  loadingData: boolean = true;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.creativePreviews = [];
    const reqPayload = {
      currentPage: this.currentPage,
      pageSize: this.pageSize
    };
    this.getCreatePreviews(reqPayload);
  }

  getCreatePreviews(reqPayload): void {
    this.loadingData = true;
    this.appService.getCreatePreviews(reqPayload).subscribe((cps) => {
      this.creativePreviews = [...this.creativePreviews, ...cps];
      if (cps.length) {
        this.currentPage++;
        this.totalCount = cps[0].creative.count;
        this.loadingData = false;
      }
    });
  }

  selecCreativeCard($event): void {
    this.selectedCreative = $event.target.value;
  }

  isLastItemReceived(): boolean {
    return this.creativePreviews.length >= this.totalCount;
  }

  onScroll() {
    console.log("scrolled!!");
    if (!this.isLastItemReceived() && !this.loadingData) {
      const reqPayload = {
        currentPage: this.currentPage,
        pageSize: this.pageSize
      };
      this.getCreatePreviews(reqPayload);
    }
  }
}
