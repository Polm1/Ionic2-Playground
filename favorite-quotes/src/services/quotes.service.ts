import { Quote } from '../data/quote.interface';

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addToFavorites(quote: Quote) {
    console.log('-- QuotesService.addToFavorites - this.favoriteQuotes', this.favoriteQuotes);
    this.favoriteQuotes.push(quote);
  }

  removeFromFavorites(quote: Quote) {
    const quoteIndex = this.favoriteQuotes.findIndex((quoteEL: Quote) => {
      return quoteEL.id === quote.id;
    });
    this.favoriteQuotes.splice(quoteIndex, 1);
    console.log('-- QuotesService.removeFromFavorites - this.favoriteQuotes', this.favoriteQuotes);
  }

  getFavorites() {
    // NOTE: tecnique to create a copy of the array and returning the copy, not the original array to prevent outside editing (strange approach: this is a service supposed to process data, why block this behaviour?)
    // return this.favoriteQuotes.slice();
    console.log('-- QuotesService.getFavorites - this.favoriteQuotes', this.favoriteQuotes);
    return this.favoriteQuotes;
  }

  isFavorite(quote: Quote) {
    return this.favoriteQuotes.find((quoteEL: Quote) => {
      return quoteEL.id === quote.id;
    });
  }
}
