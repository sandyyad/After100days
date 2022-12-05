const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();
app.get("/", (request, Response) => {
  const getDateAfterXDays = (days) => {
    const newDate = addDays(new Date(2022, 7, 5), days);
    return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
  };
  Response.send(getDateAfterXDays(100));
});

module.exports = app;
