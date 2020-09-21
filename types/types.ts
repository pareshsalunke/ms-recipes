type Sys = {
  id: string;
}

type Asset = {
  url: string;
  width: number;
  height: number;
  description: string;
}

export type Recipe = {
  sys: Sys;
  title: string;
  photo: Asset;
}

type Item = {
  items: Recipe[];
}

type Chef = {
  name: string;
}

export type Tag = {
  name: string;
}

export interface IRecipeDetails {
  title: string;
  description: string;
  photo: Asset;
  chef: Chef;
  tagsCollection: {
    items: Tag[];
  }
}

export interface RecipesCollection {
  recipeCollection: Item;
}