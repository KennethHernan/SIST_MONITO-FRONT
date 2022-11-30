import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from '../views/auth/Login';
import { HomeAgente } from '../views/HomeAgente';
import { HomeAuditor } from '../views/HomeAuditor';
import { EvaluationAgente } from '../views/EvaluationAgente';
import { EvaluationAuditor } from '../views/EvaluationAuditor';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/HomeAgente" element={<HomeAgente />} />
        <Route path="/HomeAuditor" element={<HomeAuditor />} />
        <Route path="/EvaluationAgente" element={<EvaluationAgente />} />
        <Route path="/EvaluationAuditor" element={<EvaluationAuditor />} />
      </Routes>
    </BrowserRouter>
  );
}