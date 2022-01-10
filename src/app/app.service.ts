import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/internal/operators";
const dummyDataProvider = (pageSize, currentPage) => {
  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize + 1;
  let dataSet = [];
  for (let i = firstIndex; i <= lastIndex; i++) {
    dataSet.push({
      advertiser: {
        name: `Discover the forest ${i}`,
        id: "adv_001",
        url: "https://www.discovertheforest.org"
      },
      creative: {
        name: `super_long_random_file_name_version_${i}`,
        thumbnailUrl:
          "https://www.discoverbowland.uk/images/homepage/feature-7.jpg",
        thumbnailAltText: "discover forest thumbnail image",
        count: 40,
        lastSavedDate: "Nov 02, 2021",
        lastSavedTime: "14:35:07 GMT",
        landingPageUrl:
          "https://www.discovertheforest.org?utm_source=website&utm_medium=fallblast&utm_campaign=firstfall&utm_id=launch2021",
        version: "v1.0",
        requestType: "Custom Banner Design",
        viewSetUrl:
          "https://www.discovertheforest.org?utm_source=website&utm_medium=fallblast&utm_campaign=firstfall&utm_id=launch2021"
      }
    });
  }

  return dataSet;
};

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor() {}

  getCreatePreviews(req): Observable<any[]> {
    const { currentPage, pageSize } = req;
    const cps = of(dummyDataProvider(pageSize, currentPage));
    return cps.pipe(delay(5000));
  }
}
