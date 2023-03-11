import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { StudentsService } from "../../services";
import { Loading } from "../Loading";
import { EditModal, ExcludeModal } from "../modals";

export function MainTable() {
  const [students, setStudents] = useState([]);
  const [showEditStudentForm, setShowEditStudentForm] = useState(false);
  const [showExcludeStudentForm, setShowExcludeStudentForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState(null);

  const handleGetStudents = useCallback(async () => {
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

  const handleEditStudent = async (student) => {
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

  const handleExcludeStudent = async (student) => {
    const studentsService = new StudentsService();

    setLoading((prevState) => (prevState = true));
    setShowExcludeStudentForm(true);

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

  const handleCloseModalEdit = () => {
    setLoading((prevState) => (prevState = false));
    setShowEditStudentForm((prevState) => (prevState = false));
  };

  const handleCloseModalExclude = () => {
    setLoading((prevState) => (prevState = false));
    setShowExcludeStudentForm((prevState) => (prevState = false));
  };

  useEffect(() => {
    handleGetStudents();
  }, [handleGetStudents]);

  return (
    <Fragment>
      <Loading loading={loading} />

      <EditModal
        show={showEditStudentForm}
        close={handleCloseModalEdit}
        student={student}
      />

      <ExcludeModal
        show={showExcludeStudentForm}
        close={handleCloseModalExclude}
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
                  <Button onClick={() => handleEditStudent(student)}>
                    Editar
                  </Button>
                </td>

                <td>
                  <Button onClick={() => handleExcludeStudent(student)}>
                    Excluir
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
