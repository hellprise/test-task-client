export interface CategoriesResponse {
  categories: Categories;
}

interface Categories {
  data: ICategory[];
}

export interface ICategory {
  id: string;
  attributes: Attributes;
}

interface Attributes {
  __typename: string;
  name: string;
  slug: string;
}