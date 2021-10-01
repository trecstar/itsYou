<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    lema: {
      type: String,
    },
    servicio: {
      type: String,
    },
    habilidad: {
      type: String,
    },
    logro: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("Student", studentSchema);
||||||| merged common ancestors
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("Student", studentSchema);
>>>>>>> DESARROLLO
