type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  SaveAreas = "SAVE_AREAS",
  SaveCategory = "SAVE_CATEGORY",
  SaveIngredients = "SAVE_INGREDIENTS",
  SaveRandomRecipes = "SAVE_RANDOM_RECIPES",
  SaveSearchString = "SAVE_SEARCH_STRING",
  SaveSearchTagOption = "SAVE_SEARCH_TAG_OPTION",
  SaveSuggestedRecipes = "SAVE_SUGGESTED_RECIPES"
}

export interface Ingredient {
  idIngredient: string;
  strDescription: string;
  strIngredient: string;
  strType: null;
}

export interface Area {
  strArea: string;
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

export interface BriefRecipeInfo {
  idMeal: string;
  strCategory: string;
  strMeal: string;
  strMealThumb: string;
  strTags: string;
}
export type IAppState = {
  ingredients: Array<Ingredient>;
  areas: Array<Area>;
  categories: Array<Category>;
  randomRecipes: Array<BriefRecipeInfo>;
  searchString: string;
  searchTagOption: string;
  moreRecipes: Array<BriefRecipeInfo>;
};
export type IActionType = { payload: IAppState; type: string };

export const initialState: IAppState = {
  ingredients: [],
  areas: [],
  categories: [],
  randomRecipes: [],
  searchString: "",
  searchTagOption: "",
  moreRecipes: []
};

export const appReducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case Types.SaveAreas:
      return { ...state, areas: action.payload.areas };
    case Types.SaveCategory:
      return { ...state, categories: action.payload.categories };
    case Types.SaveIngredients:
      return { ...state, ingredients: action.payload.ingredients };
    case Types.SaveRandomRecipes:
      return { ...state, randomRecipes: action.payload.randomRecipes };
    case Types.SaveSearchTagOption:
      return { ...state, searchTagOption: action.payload.searchTagOption };
    case Types.SaveSearchString:
      return { ...state, searchString: action.payload.searchString };
    case Types.SaveSuggestedRecipes:
      return { ...state, moreRecipes: action.payload.moreRecipes };
    default:
      return state;
  }
};