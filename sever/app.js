const express = require("express");
const sequelize = require("./db/database");
const PageData = require("./Models/Page");
const cors = require("cors");

sequelize.sync().then(() => {
  console.log("db is ready");
});

const app = express();

app.use(express.json());

// Enable CORS for specific origin
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from Next.js app
  })
);

app.get("/pages", async (req, res) => {
  const pageData = await PageData.findAll();
  res.send(pageData);
});

app.get("/pages/:pageId", async (req, res) => {
  try {
    const pageData = await PageData.findOne({
      where: { id: req.params.pageId },
    });

    if (pageData) {
      res.send(pageData);
    } else {
      res.status(404).send({ error: "Page not found" });
    }
  } catch (error) {
    console.error("Error fetching page data:", error);
    res
      .status(500)
      .send({ error: "An error occurred while fetching the page data." });
  }
});

app.post("/pages", async (req, res) => {
  await PageData.create(req.body);
  res.send("pages are created");
});

app.listen(3001, () => {
  console.log(`Server is listning at port 3001`);
});
