import { Router } from 'express';
import multer from 'multer';

import { getRepository } from 'typeorm';
import EmployeesController from '../app/controllers/EmployeesController';
import LikesController from '../app/controllers/LikesController';
import Employees from '../app/models/Employees';
import uploadConfig from '../config/upload';

const upload = multer(uploadConfig);
const employeesRouter = Router();

employeesRouter.post(
  '/',
  upload.single('avatar'),
  async (request, response) => {
    try {
      const { name, occupation, department, email } = request.body;
      const avatar = request.file.filename;

      const like = 0;
      const dislike = 0;

      const employeesController = new EmployeesController();
      const employee = await employeesController.store({
        name,
        occupation,
        department,
        email,
        avatar,
        like,
        dislike,
      });

      return response.json(employee);
    } catch (erro) {
      return response.json({ error: erro.message });
    }
  },
);

employeesRouter.get('/', async (request, response) => {
  const employeesRepositorio = getRepository(Employees);
  const employee = await employeesRepositorio.find();
  return response.json(employee);
});

employeesRouter.get('/:id', async (request, response) => {
  try {
    const employeesRepositorio = getRepository(Employees);
    const { id } = request.params;
    const employee = await employeesRepositorio.findOne(id);

    return response.json(employee);
  } catch (erro) {
    return response.json('Funcionario não encontrado.');
  }
});

employeesRouter.delete('/:id', async (request, response) => {
  try {
    const employeesRepositorio = getRepository(Employees);
    const { id } = request.params;

    await employeesRepositorio.delete(id);

    return response.status(204).send();
  } catch (erro) {
    return response.json('Funcionario não encontrado.');
  }
});

employeesRouter.patch('/:id', async (request, response) => {
  try {
    const id = request.params;
    const { name, occupation, department, email, telephone } = request.body;

    const employeesController = new EmployeesController();
    const employee = await employeesController.update({
      id,
      name,
      occupation,
      department,
      email,
      telephone,
    });

    return response.json(employee);
  } catch (erro) {
    return response.json({ error: erro.message });
  }
});

employeesRouter.patch('/like/:id', async (request, response) => {
  try {
    const id = request.params;
    const like = true;

    const likesController = new LikesController();
    await likesController.update({
      id,
      like,
    });

    return response.status(204).send();
  } catch (erro) {
    return response.json({ error: erro.message });
  }
});

employeesRouter.patch('/dislike/:id', async (request, response) => {
  try {
    const id = request.params;
    const like = false;

    const likesController = new LikesController();
    await likesController.update({
      id,
      like,
    });

    return response.status(204).send();
  } catch (erro) {
    return response.json({ error: erro.message });
  }
});

export default employeesRouter;
