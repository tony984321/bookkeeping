import { Profile } from "@/interfaces/me";
import { Details } from "@/interfaces/details";
import { Category } from "@/interfaces/me";

export interface RootState {
  details: Details[];
  profile?: Profile;
  categories: Category[]
}

export interface RootModules {
  state: RootState;
  commit: any;
}
