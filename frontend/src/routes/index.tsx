import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Employees from '../pages/Employees';
import Employee from '../pages/Employee';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/funcionarios" exact component={Employees} />
    <Route path="/funcionario/:id" exact component={Employee} />
  </Switch>
);

export default Routes;
