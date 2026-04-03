import express from "express";

const app = express();
const PORT = 3000;

// middleware
app.use(express.static('public'));

app.use(express.json());

//main route
app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});