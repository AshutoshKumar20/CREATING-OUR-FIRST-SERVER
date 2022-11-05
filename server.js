const express = require("express");

const app = express();

app.use(express.json());

const port = 8081;

const toDoList = ["Complete Node Byte", "Playing Cricket"];

//http://localhost:8081
app.get("/todos", (req, res) => {
    res.status(200).send(toDoList);
});

app.post("/todos", (req, res) => {
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Task Added Successfully",
    });
});

app.delete("/todos", (req, res) => {
    const itemToDelete = req.body.item;

    toDoList.find((element, index) => {
        if (element === itemToDelete) {
            toDoList.splice(index, 1);
        }
    });

    res.status(202).send({
        message: `Deleted item - ${req.body.item}`,
    });
});

app.all("/todos", (req, res) => {
    res.status(501).send();
});

app.all("*", (req, res) => {
    res.status(404).send();
});

app.listen(port, () => {
    console.log(`Nodejs Server started on ${port}`);
});