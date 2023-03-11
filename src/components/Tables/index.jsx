import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export function MainTable() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/alunos")
      .then((response) => {
        setAlunos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(alunos);

  return (
    <>
      {Array.isArray(alunos) && alunos.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno, index) => (
              <tr key={aluno.id}>
                <td>{index + 1}</td>
                <td> {aluno.id}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Nenhum aluno encontrado.</p>
      )}
    </>
  );
}
