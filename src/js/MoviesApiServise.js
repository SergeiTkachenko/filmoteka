import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';

export class MovieAPI {
  #BASE_URL = 'https://api.themoviedb.org/3';
  #API_KEY = 'd03712107dcdd723f1173c5ee2c0d8c1';
  #query = '';
  #page = 1;

  async getTrendMovie() {
    try {
      const { data } = await axios.get(
        `${this.#BASE_URL}/trending/movie/day?api_key=${this.#API_KEY}&page=${
          this.#page
        }`
      );
      refs.containerPagAll.classList.remove('visually-hidden');
      return data;
    } catch (error) {
      refs.containerPagAll.classList.add('visually-hidden');
      console.error(error);
    }
  }

  async getGenres() {
    try {
      const { data } = await axios.get(
        `${this.#BASE_URL}/genre/movie/list?api_key=${
          this.#API_KEY
        }&language=en-US`
      );
      return data.genres;
    } catch (error) {
      console.error(error);
    }
  }

  async getSearchMovies() {
    try {
      const response = await axios.get(
        `${this.#BASE_URL}/search/movie?api_key=${this.#API_KEY}&query=${
          this.#query
        }&page=${this.#page}`
      );
      return response.data;
    } catch (error) {
      refs.containerPage.classList.add('visually-hidden');
      Notify.failure(error);
    }
  }

  resetPage() {
    this.#page = 1;
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  get page() {
    return this.#page;
  }
  set page(newPage) {
    this.#page = newPage;
  }
}
