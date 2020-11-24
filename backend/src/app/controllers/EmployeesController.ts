import { getRepository } from 'typeorm';

import Employees from '../models/Employees';

interface RequestPatch {
  id: string;
  name?: string;
  occupation?: string;
  department?: string;
  email?: string;
  telephone?: number;
}

interface Request {
  name: string;
  occupation: string;
  department: string;
  email: string;
  avatar?: string;
  like: number;
  dislike: number;
}

class EmployeesController {
  public async store({
    name,
    occupation,
    department,
    email,
    avatar,
    like,
    dislike,
  }: Request): Promise<Employees> {
    const employeesRepository = getRepository(Employees);

    const checkEmployeeName = await employeesRepository.findOne({
      where: { name },
    });

    const checkEmployeeEmail = await employeesRepository.findOne({
      where: { email },
    });

    if (checkEmployeeName) {
      throw new Error('Funcionario já cadastrado');
    }

    if (checkEmployeeEmail) {
      throw new Error('Email já cadastrado');
    }

    const employee = employeesRepository.create({
      name,
      occupation,
      department,
      email,
      avatar,
      like,
      dislike,
    });

    await employeesRepository.save(employee);
    return employee;
  }

  public async update({
    id,
    name,
    occupation,
    department,
    email,
    telephone,
  }: RequestPatch): Promise<Employees> {
    const employeesRepository = getRepository(Employees);

    const employee = await employeesRepository.findOne(id);

    if (!employee) {
      throw new Error('Funcionario não encontrado');
    }

    {
      name ? (employee.name = name) : null;
    }
    {
      occupation ? (employee.occupation = occupation) : null;
    }
    {
      department ? (employee.department = department) : null;
    }
    {
      email ? (employee.email = email) : null;
    }
    {
      telephone ? (employee.telephone = telephone) : null;
    }

    await employeesRepository.save(employee);
    return employee;
  }
}

export default EmployeesController;
