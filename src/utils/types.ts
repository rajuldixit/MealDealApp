export interface IButtonType {
  label: string;
  icon?: string;
  onClick: () => void;
}

export interface IRecipeInfo {
  id: string;
  name: string;
  image: string;
  tags: Array<string>;
  duration: string;
  expertLevel: string;
}
