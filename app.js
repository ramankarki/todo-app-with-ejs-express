const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const shoppingList = [];
// shopping-list route
app.get("/shopping-list", (req, res) => {
  res.render("list", {listTitle: "Shopping List", items: shoppingList, route:"/shopping-list"});
});

app.post("/shopping-list", (req, res) => {
  let item = req.body.nextItem;
  if (item !== "") {
    shoppingList.push(item);
  }
  res.redirect("/shopping-list");

});


const projectList = [];
// project-list route
app.get("/project-list", (req, res) => {
  res.render("list", {listTitle: "Project List", items: projectList, route:"/project-list"});
});

app.post("/project-list", (req, res) => {
  let item = req.body.nextItem;
  if (item !== "") {
    projectList.push(item);
  }
  res.redirect("/project-list");

});


app.listen(3000, () => {
  console.log(`server is running at 3001`);
});
