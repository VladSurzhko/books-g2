import axios from "axios";

export class booksAPI {

    // приватні властивості для запиту 
    #BASE_URL = 'https://books-backend.p.goit.global/books/';
    #category = '';

    //методи классу
    getBookById(book_Id) {console.log(`${this.#BASE_URL}${book_Id}`); return axios.get(`${this.#BASE_URL}${book_Id}`);}
    getTopBooks() {return axios.get(`${this.#BASE_URL}top-books`);}
    getCategoryList() {return axios.get(`${this.#BASE_URL}categoty-list`);}
    getBooksByCategory() {return axios.get(`${this.#BASE_URL}categoty`, {params:{category: this.#category}});};

    // сеттери
    set category(newCategory) {this.#category = newCategory;};


}