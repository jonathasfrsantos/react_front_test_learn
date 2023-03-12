const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const students = [
  {
    id: 1,
    email: "example@gmail.com",
    name: "Luzio",
  },
  {
    id: 2,
    email: "example@gmail.com",
    name: "John",
  },
  {
    id: 3,
    email: "example@gmail.com",
    name: "Michaela",
  },
  {
    id: 4,
    email: "example@gmail.com",
    name: "Alberto",
  },
];

function create_UUID() {
  let dt = new Date().getTime();

  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (code) {
      let r = (dt + Math.random() * 16) % 16 | 0;
      
      dt = Math.floor(dt / 16);
      
      return (
        (code === "x" ? r : (r & 0x3) | 0x8).toString(16) +
        Math.floor(Math.random() * 20)
      );
    }
  );

  return uuid;
}

app.get("/alunos", (request, response) => {
  response.status(200).json({ status: "sucess", data: students });
});

app.get("/alunos/:id", (request, response) => {
  const id = request.params.id;

  const student = students.filter((item) => item.id === Number(id));

  response.status(200).json({
    status: "success",
    data: student,
  });
});

app.post("/alunos", (request, response) => {
  const student = {
    id: create_UUID,
    name: request.body.name,
    email: request.body.email,
  };

  students.push(student);

  response.status(201).json({ status: "success", data: student });
});

app.listen(8090, () => {
  console.log(`Server running to port http://localhost:8090`);
});
