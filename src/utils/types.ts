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

export enum ExperienceLevel {
  ADVANCE = "Advance",
  EXPERT = "Expert",
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate"
}

export interface IRecipeDetails {
  basicDetails: IRecipeInfo;
  description: string;
  instructions: Array<string>;
  ingredients: Array<string>;
  measurements: Array<string>;
}
