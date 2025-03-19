// const express = require('express')
import express from "express";
import cors from "cors";
import { readEmployees } from "./crud-lead.js";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/employees", async (req, res) => {
  try {
    const employees = await readEmployees();
    const { name, email } = employees;
    res.status(200).json(employees);
  } catch (e) {
    console.log(e);
    res.status(500).send("DB 연결 오류가 발생했슴니다");
  }
});
app.post("/movie", (req, res) => {
  res.send("Create movie");
});
app.put("/movie/:id", (req, res) => {
  res.send("Update movie");
});
app.delete("/movie/:id", (req, res) => {
  res.send("Delete movie");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  readEmployees();
});
