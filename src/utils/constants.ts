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
