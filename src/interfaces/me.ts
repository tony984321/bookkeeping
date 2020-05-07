export interface Profile {
  displayName?: string;
  avatar?: string | ArrayBuffer | null;
  gender?: string;
  description?: string;
}

export interface Categories {
  id: number;
  title: string;
  icon: string;
}
