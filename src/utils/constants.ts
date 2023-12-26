export const NavPanelsKeys = {
  Home: { key: "home", label: "Homepage" },
  SavedRecipes: { key: "savedRecipes", label: "Saved Recipes" },
  Community: { key: "community", label: "Community" },
  Recipes: { key: "recipes", label: "Recipes" },
  Settings: { key: "settings", label: "Settings" }
};

export const urls = {
  CATEGORIES: "categories.php",
  AREAS: "list.php?a=list",
  INGREDIENTS: "list.php?i=list",
  MEALSBYCATEGORY: "filter.php?c=",
  RANDOMMEAL: "random.php",
  MEALBYID: "lookup.php?i=",
  SEARCHBYFIRSTLETTER: "search.php?f=",
  SEARCHBYNAME: "search.php?s=",
  FILTERBYAREA: "filter.php?a="
};

export const base_url =
  process.env.BASE_URL || "https://www.themealdb.com/api/json/v1/1/";

export const appColors = {
  primaryActionColor: "#15C421",
  secondaryActionColor: "#089B12",
  primaryTextColor: "#080F1D",
  secondaryTextColor: "#44505F",
  disabledTextColor: "#647181",
  disabledBGColor: "#E3E5E8",
  grey1: "#8E97A4",
  grey2: "#727E8D",
  grey50: "#F4F5F6",
  grey300: "#AAB1BB",
  tagBGColor: "#E6EEFE",
  tagTextColor: "#2851A3",
  black: "#000000",
  white: "#ffffff"
};
