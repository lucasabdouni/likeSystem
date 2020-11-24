import { getRepository } from 'typeorm';

import Employees from '../models/Employees';

interface Request {
  id: string;
  like: boolean;
}

class EmployeesController {
  public async update({ id, like }: Request): Promise<void> {
    const employeesRepository = getRepository(Employees);
    const number = 1;

    const employee = await employeesRepository.findOne(id);

    if (like) {
      employee.like += number;
    } else {
      employee.dislike += number;
    }

    await employeesRepository.save(employee);
  }
}
export default EmployeesController;
