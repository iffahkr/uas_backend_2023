// import Model News
const News = require("../models/News");

// buat class NewsController
class NewsController {
    // menambahkan keyword async
  // refactor untuk menghandling jika data kosong (short if else)
  async index(req, res) {
    // memanggil method static all dengan async await.
    const news = await News.all();

    // data array lebih dari 0
    if (news.length > 0) {
      const data = {
        message: "Menampilkan semua news",
        data: news,
      };
  
      return res.status(200).json(data);
    }

    // else
    const data = {
        message: "News is empty",
    };

    return res.status(200).json(data);
  }

  // fungsi untuk menambahkan data news
  async store(req, res) {
    /**
     * Menambahkan validasi sederhana
     * Handle jika salah satu data tidak dikirim, memakai short if else
     */

    // destructing object req.body
    const { title, author, content, url, url_image, category } = req.body;

    // jika data undefined maka kirim response error
    if (!title || !author || !content || !url || !url_image || !category) {
      const data = {
        message: "Semua data harus dikirim",
      };

      return res.status(422).json(data);
    }

    // else
    const news = await News.create(req.body);

    const data = {
      message: "Menambahkan data news",
      data: news,
    };

    return res.status(201).json(data);
  }

  // fungsi untuk mengupdate news
  async update(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    // cari id news yang ingin di-update
    const news = await News.find(id);

    // refactor handle jika data kosong
    if (news.length > 0) {
        // melakukan update data
        const news = await News.update(id, req.body);
        const data = {
            message: `Mengedit data news`,
            data: news,
        };

        return res.status(200).json(data);
    }
    
    // else
    const data = {
        message: `News not found`,
    };

    // mengembalikan respon dalam bentuk data json
    return res.status(404).json(data);
  }

  // fungsi untuk menghapus data news
  async destroy(req, res) {
    const { id } = req.params;
    const news = await News.find(id);

    // refactor handle jika data kosong
    if (news.length > 0) {
        await News.delete(id);
        const data = {
            message: `Menghapus data news`,
        };

        return res.status(200).json(data);
    }
    
    // else
    const data = {
        message: `News not found`,
    };

    return res.status(404).json(data);
  }

  // fungsi untuk menampilkan satu resource
  async show(req,res) {
    const { id } = req.params;
    // cari news berdasarkan id
    const news = await News.find(id);

    // refactor handle jika data kosong
    if (news.length > 0) {
        const data = {
            message: `Menghapus detail news`,
            data: news,
        };

        return res.status(200).json(data);
    }
    
    // else
    const data = {
        message: `News not found`,
    };

    return res.status(404).json(data);
  }

  // fungsi untuk mencari resource
  async search(req, res) {
    const { title } = req.params;
    // cari news berdasarkan title
    const news = await News.find(title);

    // refactor handle jika data kosong
    if (news.length > 0) {
        const data = {
            message: `Get searched resource`,
            data: news,
        };

        return res.status(200).json(data);
    }
    
    // else
    const data = {
        message: `Resource not found`,
    };

    return res.status(404).json(data);
  }

  // fungsi untuk mendapatkan sport resource
  async category(req, res) {
    const { category } = req.params;
    // cari news berdasarkan categoru
    const news = await News.find(category);
    
    // refactor handle jika data kosong
    if (news.length > 0) {
        const data = {
            message: `Get sport resource`,
            total: news.length,
            data: news,
        };

        return res.status(200).json(data);
    }
    
    // else
    const data = {
        message: `Resource not found`,
    };

    return res.status(404).json(data);
  }

  // fungsi untuk mendapatkan finance resource
  async finance(req, res) {
    const { category } = req.params;
    // cari news berdasarkan title
    const news = await News.find(category);

    // refactor handle jika data kosong
    if (news.length > 0) {
        const data = {
            message: `Get finance resource`,
            total: news.length,
            data: news,
        };

        return res.status(200).json(data);
    }
    
    // else
    const data = {
        message: `Resource not found`,
    };

    return res.status(404).json(data);
  }

  // fungsi untuk mendapatkan automotive resource
  async finance(req, res) {
    const { category } = req.params;
    // cari news berdasarkan category
    const news = await News.find(category);

    // refactor handle jika data kosong
    if (news.length > 0) {
        const data = {
            message: `Get automotive resource`,
            total: news.length,
            data: news,
        };

        return res.status(200).json(data);
    }
    
    // else
    const data = {
        message: `Resource not found`,
    };

    return res.status(404).json(data);
  }
}
  
  // membuat object NewsController
  const object = new NewsController();
  
  // export object NewsController
  module.exports = object;