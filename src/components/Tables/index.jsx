import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { StudentsService } from "../../services";
import { EditModal } from "../Forms/edit-modal";
import { Loading } from "../Loading";

export function MainTable() {
  const [students, setStudents] = useState([]);
  const [showEditStudentForm, setShowEditStudentForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState(null);

  const handleGetStudants = useCallback(async () => {
    const studentsService = new StudentsService();

    return await studentsService
      .getAll()
      .then((response) => {
        setStudents((prevState) => (prevState = response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    handleGetStudants();
  }, [handleGetStudants]);

  const handleAddClick = async (student) => {
    const studentsService = new StudentsService();

    setLoading((prevState) => (prevState = true));
    setShowEditStudentForm((prevState) => (prevState = true));

    return await studentsService
      .getByDyId(student.id)
      .then((response) => {
        setStudent((prevState) => (prevState = response.data));
        setLoading((prevState) => (prevState = false));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClose = () => {
    setLoading((prevState) => (prevState = false));
    setShowEditStudentForm((prevState) => (prevState = false));
  };

  return (
    <Fragment>
      <Loading loading={loading} />
      <EditModal
        show={showEditStudentForm}
        close={handleClose}
        student={student}
      />

      {Array.isArray(students) && students.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <Button onClick={() => handleAddClick(student)}>
                    Editar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Nenhum student encontrado.</p>
      )}
    </Fragment>
  );
}
