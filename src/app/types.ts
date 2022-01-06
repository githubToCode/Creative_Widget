export interface Pagination {
  startIndex: number;
  pageSize: number; // count;
}

export interface Filter {
  searchText: string;
  allCreatives: boolean;
  allVersions: boolean;
}

export interface CreativePreviewRequest {
  advertiserId: string;
  partnerId: string;
  productId: string;
  orderId: string;
  pagination: Pagination;
  filter: Filter;
}

export interface Creative {
  name: string;
  thumbnailUrl: string;
  thumbnailAltText?: string; // for Accessibility
  count: number;
  lastSavedDate: string;
  lastSavedTime: string; // It could combine with lastSavedDate
  landingPageUrl: string;
  version: string; // Is it string or number
  requestType: string;
  viewSetUrl: string;
}

export interface Advertiser {
  name: string;
  id: string;
  url: string;
}

export interface CreativePreview {
  advertiser: Advertiser;
  creative: Creative;
}

export interface CreativePreviewResponse {
  preview: CreativePreview[];
}
