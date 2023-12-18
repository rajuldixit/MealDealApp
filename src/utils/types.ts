export interface IButtonType {
  label: string;
  buttonIcon?: { icon: JSX.Element; position: string };
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

export enum IButtonIconPosition {
  RIGHT,
  LEFT
}
