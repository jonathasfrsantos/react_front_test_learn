import { api } from "../api";

export class StudentsService {
  async getAll() {
    return await (
      await api.get(`alunos`)
    ).data;
  }

  async getByDyId(id) {
    return await (
      await api.get(`alunos/${id}`)
    ).data;
  }

  async create(data) {
    return await (
      await api.post("alunos", data)
    ).data;
  }

  async update(id, data) {
    return await api.put(`alunos/${id}`, data);
  }

  async delete(id) {
    return await api.delete(`alunos/${id}`);
  }
}
