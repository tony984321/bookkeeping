import { Profile } from "@/interfaces/me";
import { Detail } from "@/interfaces/details";
import { Category } from "@/interfaces/me";

export interface RootState {
  details: Detail[];
  profile?: Profile;
  categories: Category[];
}

export interface RootModules {
  state: RootState;
  commit: any;
}
