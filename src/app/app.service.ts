import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/internal/operators";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor() {}

  getCreatePreviews(req): Observable<any[]> {
    const cps = of([
      {
        advertiser: {
          name: "Discover the forest 001",
          id: "adv_001",
          url: "https://www.discovertheforest.org"
        },
        creative: {
          name: "super_long_random_file_name_version_001",
          thumbnailUrl:
            "https://www.discoverbowland.uk/images/homepage/feature-7.jpg",
          thumbnailAltText: "discover forest thumbnail image",
          count: 3,
          lastSavedDate: "Nov 02, 2021",
          lastSavedTime: "14:35:07 GMT",
          landingPageUrl:
            "https://www.discovertheforest.org?utm_source=website&utm_medium=fallblast&utm_campaign=firstfall&utm_id=launch2021",
          version: "v1.0",
          requestType: "Custom Banner Design",
          viewSetUrl:
            "https://www.discovertheforest.org?utm_source=website&utm_medium=fallblast&utm_campaign=firstfall&utm_id=launch2021"
        }
      },
      {
        advertiser: {
          name: "Discover the forest 002",
          id: "adv_002",
          url: "https://www.discovertheforest.org"
        },
        creative: {
          name: "super_long_random_file_name_version_002",
          thumbnailUrl:
            "https://www.discoverbowland.uk/images/homepage/feature-7.jpg",
          thumbnailAltText: "discover forest thumbnail image",
          count: 3,
          lastSavedDate: "Nov 02, 2021",
          lastSavedTime: "14:35:07 GMT",
          landingPageUrl:
            "https://www.discovertheforest.org?utm_source=website&utm_medium=fallblast&utm_campaign=firstfall&utm_id=launch2021",
          version: "v1.0",
          requestType: "Custom Banner Design",
          viewSetUrl:
            "https://www.discovertheforest.org?utm_source=website&utm_medium=fallblast&utm_campaign=firstfall&utm_id=launch2021"
        }
      },
      {
        advertiser: {
          name: "Discover the forest 003",
          id: "adv_003",
          url: "https://www.discovertheforest.org"
        },
        creative: {
          name: "super_long_random_file_name_version_003",
          thumbnailUrl:
            "https://www.discoverbowland.uk/images/homepage/feature-7.jpg",
          thumbnailAltText: "discover forest thumbnail image",
          count: 3,
          lastSavedDate: "Nov 02, 2021",
          lastSavedTime: "14:35:07 GMT",
          landingPageUrl:
            "https://www.discovertheforest.org?utm_source=website&utm_medium=fallblast&utm_campaign=firstfall&utm_id=launch2021",
          version: "v1.0",
          requestType: "Custom Banner Design",
          viewSetUrl:
            "https://www.discovertheforest.org?utm_source=website&utm_medium=fallblast&utm_campaign=firstfall&utm_id=launch2021"
        }
      }
    ]);
    return cps.pipe(delay(2000));
  }
}
