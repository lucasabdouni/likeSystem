import { Router } from 'express';
import multer from 'multer';

import { getRepository } from 'typeorm';
import DependentsController from '../app/controllers/DependentsController';
import Dependents from '../app/models/Dependents';
import uploadConfig from '../config/upload';

const upload = multer(uploadConfig);
const dependentsRouter = Router();

dependentsRouter.post(
  '/',
  upload.single('avatar'),
  async (request, response) => {
    try {
      const { name, birth_date, kinship, id_employees } = request.body;
      const avatar = request.file.filename;

      const dependentsController = new DependentsController();
      const dependents = await dependentsController.store({
        name,
        birth_date,
        kinship,
        avatar,
        id_employees,
      });

      return response.json(dependents);
    } catch (erro) {
      return response.json({ error: erro.message });
    }
  },
);

dependentsRouter.get('/', async (request, response) => {
  const dependentsRepositorio = getRepository(Dependents);
  const dependents = await dependentsRepositorio.find();
  return response.json(dependents);
});

dependentsRouter.get('/:id', async (request, response) => {
  try {
    const dependentsRepositorio = getRepository(Dependents);
    const { id } = request.params;
    const employee = await dependentsRepositorio.findOne(id);

    return response.json(employee);
  } catch (erro) {
    return response.json('Dependente não encontrado.');
  }
});

dependentsRouter.delete('/:id', async (request, response) => {
  try {
    const dependentsRepositorio = getRepository(Dependents);
    const { id } = request.params;

    await dependentsRepositorio.delete(id);

    return response.status(204).send();
  } catch (erro) {
    return response.json('Dependente não encontrado.');
  }
});

dependentsRouter.patch('/:id', async (request, response) => {
  try {
    const id = request.params;
    const { name, birth_date, kinship, avatar, id_employees } = request.body;

    const dependentsController = new DependentsController();
    const employee = await dependentsController.update({
      id,
      name,
      birth_date,
      kinship,
      avatar,
    });

    return response.json(employee);
  } catch (erro) {
    return response.json({ error: erro.message });
  }
});

dependentsRouter.get('/:id/employees', async (request, response) => {
  try {
    const dependentsRepositorio = getRepository(Dependents);
    const { id_employees } = request.params;
    const dependents = await dependentsRepositorio.find(id_employees);

    return response.json(dependents);
  } catch (erro) {
    return response.json('Dependente não encontrado.');
  }
});

export default dependentsRouter;
