// import database
const db = require("../config/database");

// membuat class Model News
class News {
    // Membuat method static all
    static all() {
      // return Promise sebagai solusi Asynchronous
      return new Promise((resolve, reject) => {
        const sql = "SELECT * from news";
        /**
         * Melakukan query menggunakan method query.
         * Menerima 2 params: query dan callback
         */
        db.query(sql, (err, results) => {
          resolve(results);
        });
      });
    }

    // Fungsi untuk insert data news
    static async create(data, callback) {
      // Promise 1: melakukan insert data ke database
      const id = await new Promise((resolve, reject) => {
        const sql = "INSERT INTO news SET ?";
        db.query(sql, data, (err, results) => {
          resolve(results.insertId);
        });
      });
  
      // Promise 2: melakukan query berdasarkan id
      const news = this.find(id);
      return news;
    }

    // Fungsi untuk meng-update data news
    static async update(id, data) {
      // Promise 1: melakukan update data
      await new Promise((resolve, reject) => {
        const sql = "UPDATE news SET ? WHERE id = ?";
        db.query(sql, [data, id], (err, results) => {
          resolve(results);
        });
      });
  
      // Promise 2: mencari data yang baru diupdate
      const news = await this.find(id);
      return news;
    }
    
    // Fungsi untuk menghapus data news
    static delete(id) {
      // Promise 1: menghapus data dari database
      return new Promise((resolve, reject) => {
        const sql = "DELETE FROM news WHERE id = ?";
        db.query(sql, id, (err, results) => {
          resolve(results);
        });
      });
    }

    // Fungsi untuk mencari data berdasarkan id
    static find(id) {
      return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM news WHERE id = ?";
        db.query (sql, id, (err, results) => {
          // destructing array
          const [news] = results;
          resolve(news);
        });
      });
    }

    // untuk mencari berdasarkan title
    static search(title) {
      return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM news WHERE title = ?";
        db.query (sql, title, (err, results) => {
          // destructing array
          const [news] = results;
          resolve(news);
        });
      });
    }

    // fungsi static untuk mendapatkan berita sport
    static sport(category) {
      return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM news WHERE category == sport";
        db.query (sql, category, (err, results) => {
          // destructing array
          const [news] = results;
          resolve(news);
        });
      });
    }

    // fungsi static untuk mendapatkan berita finance
    static finance(category) {
      return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM news WHERE category == finance";
        db.query (sql, category, (err, results) => {
          // destructing array
          const [news] = results;
          resolve(news);
        });
      });
    }

    // fungsi static untuk mendapatkan berita automotive
    static automotive(category) {
      return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM news WHERE category == automotive";
        db.query (sql, category, (err, results) => {
          // destructing array
          const [news] = results;
          resolve(news);
        });
      });
    }
}


  // export class News
  module.exports = News;