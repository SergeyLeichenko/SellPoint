const express = require("express");
// const serveStatic = require("serve-static");
const port = process.env.PORT || 8080;
const path = require("path");
const fs = require("fs");
const axios = require("axios");

const app = express();

// index page
app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, process.env.VUE_APP_TITLE)
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

    res.send(data);
  });
});

// products list page
app.get("/products/:slug/", async (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  try {
    await axios
      .get(
        `https://server.sellpoint.com.ua/uk/products/product-type/${req.params.slug}/`
      )
      .then((response) => {
        let title = response.data.name;
        // console.log(response.data);
        fs.readFile(filePath, "utf8", (err, data) => {
          if (err) {
            return console.log(err);
          }
          data = data
            .replace(/__TITLE__/g, title)
            .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

          res.send(data);
        });
      });
  } catch (err) {
    console.log(err);
  }
});

// about-us page
app.get("/about-us", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, `Про нас | ${process.env.VUE_APP_TITLE}`)
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

    res.send(data);
  });
});

// cabinet page
app.get("/profile", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, `Особистий кабінет | ${process.env.VUE_APP_TITLE}`)
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

    res.send(data);
  });
});

// contact page
app.get("/contacts", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, `Контакти | ${process.env.VUE_APP_TITLE}`)
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

    res.send(data);
  });
});

// cooperation page
app.get("/cooperation", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(
        /__TITLE__/g,
        `Корпоративним клієнтам | ${process.env.VUE_APP_TITLE}`
      )
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

    res.send(data);
  });
});

// credit page
app.get("/credit", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, `Кредит | ${process.env.VUE_APP_TITLE}`)
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

    res.send(data);
  });
});

// delivery page
app.get("/delivery", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(
        /__TITLE__/g,
        `Доставка та оплата | ${process.env.VUE_APP_TITLE}`
      )
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

    res.send(data);
  });
});

// error page
app.get("/404", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, `404 Not Found | ${process.env.VUE_APP_TITLE}`)
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

    res.send(data);
  });
});

// exchange page
app.get("/exchange", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(
        /__TITLE__/g,
        `Обмін та повернення | ${process.env.VUE_APP_TITLE}`
      )
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

    res.send(data);
  });
});

// news page
app.get("/news", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, `Новини | ${process.env.VUE_APP_TITLE}`)
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

    res.send(data);
  });
});

// order page
app.get("/order", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, `Замовлення | ${process.env.VUE_APP_TITLE}`)
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

    res.send(data);
  });
});

// overview page
app.get("/product/:slug/", async (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  try {
    await axios
      .get(`https://server.sellpoint.com.ua/uk/product/${req.params.slug}/`)
      .then((response) => {
        let title = response.data.title;
        // console.log(response.data);
        fs.readFile(filePath, "utf8", (err, data) => {
          if (err) {
            return console.log(err);
          }
          data = data
            .replace(
              /__TITLE__/g,
              title + " " + process.env.VUE_APP_TITLE_PRODUCT
            )
            .replace(
              /__DESCRIPTION__/g,
              title + " " + process.env.VUE_APP_DESCRIPTION_PRODUCT
            );

          res.send(data);
        });
      });
  } catch (err) {
    console.log(err);
  }
});

// personal-data page
app.get("/personal", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(
        /__TITLE__/g,
        `Умови обробки персональних даних | ${process.env.VUE_APP_TITLE}`
      )
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);

    res.send(data);
  });
});

// search page
app.get("/search/full/", (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, process.env.VUE_APP_TITLE)
      .replace(/__DESCRIPTION__/g, process.env.VUE_APP_DESCRIPTION);
    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./dist")));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
