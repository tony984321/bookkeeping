import { Profile } from "@/interfaces/me";
import { Details } from "@/interfaces/details";

export interface RootState {
  details: Details;
  profile?: Profile;
}
