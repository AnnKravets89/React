import type {IUser} from "./UserModel.ts";
import type {ISupport} from "./SupporModel.ts";

export interface IPageResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: ISupport;
}
