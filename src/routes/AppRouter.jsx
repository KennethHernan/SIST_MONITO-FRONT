import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Login } from '../views/auth/Login';
import { HomeAgente } from '../views/HomeAgente';
import { HomeAuditor } from '../views/HomeAuditor';
import { EvaluationAgente } from '../views/EvaluationAgente';
import { EvaluationAuditor } from '../views/EvaluationAuditor';
import { Page2Auditor } from "../views/Page2-Auditor";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to='/auth/login'/> } />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/HomeAgente" element={<HomeAgente />} />
        <Route path="/HomeAuditor" element={<HomeAuditor />} />
        <Route path="/EvaluationAgente" element={<EvaluationAgente />} />
        <Route path="/EvaluationAuditor" element={<EvaluationAuditor />} />
        <Route path="/" element={<Page2Auditor />} />
      </Routes>
    </BrowserRouter>
  );
}