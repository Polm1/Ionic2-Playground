export class Recipe {
  constructor(
    public title: string,
    public description: string,
    public difficulty: string,
    // NOTE: this should be ingredient.model (better to rename it to ingredient)
    public ingredients: Array<any>
  ) {
    //
  }
}
