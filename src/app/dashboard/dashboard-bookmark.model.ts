import { Data } from "@angular/router";

export interface BookmarkModel {
  id: number;
  name: string;
  url: string;
  description: string;
  status: number;
  expiryDate: Data;
}
