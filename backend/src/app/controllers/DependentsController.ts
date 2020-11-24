import { getRepository } from 'typeorm';

import Dependents from '../models/Dependents';
import Employees from '../models/Employees';

interface Request {
  name: string;
  birth_date: Date;
  kinship: string;
  avatar?: string;
  id_employees: string;
}

interface RequestPatch {
  id: string;
  name?: string;
  birth_date?: Date;
  kinship?: string;
}

class DependentsController {
  public async store({
    name,
    birth_date,
    kinship,
    avatar,
    id_employees,
  }: Request): Promise<Dependents> {
    const dependentsRepository = getRepository(Dependents);
    const employeesRepository = getRepository(Employees);

    const checkDependentsName = await dependentsRepository.findOne({
      where: { name },
    });

    const id = id_employees;

    const checkEmployeesName = await employeesRepository.findOne({
      where: { id },
    });

    if (checkDependentsName) {
      throw new Error('Dependente já cadastrado');
    }

    if (!checkEmployeesName) {
      throw new Error('ID de Funcionario não encontrado');
    }

    const dependents = dependentsRepository.create({
      name,
      birth_date,
      kinship,
      avatar,
      id_employees,
    });

    await dependentsRepository.save(dependents);
    return dependents;
  }

  public async update({
    id,
    name,
    birth_date,
    kinship,
  }: RequestPatch): Promise<Dependents> {
    const dependentsRepository = getRepository(Dependents);

    const dependents = await dependentsRepository.findOne(id);

    if (!dependents) {
      throw new Error('Funcionario não encontrado');
    }

    {
      name ? (dependents.name = name) : null;
    }
    {
      birth_date ? (dependents.birth_date = birth_date) : null;
    }
    {
      kinship ? (dependents.kinship = kinship) : null;
    }

    await dependentsRepository.save(dependents);
    return dependents;
  }
}

export default DependentsController;
