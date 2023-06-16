import { ApplicationErrorPage } from '@pages/400';
import { ServerErrorPage } from '@pages/500';
import { ForumPage } from '@pages/forum';
import { GamePage } from '@pages/Game';
import { LoginPage } from '@pages/login';
import { RegistrationPage } from '@pages/registration';
import { RulesPage } from '@pages/rules';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { Routes } from './routes';

import { Home } from '../Home';
import Layout from '../Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={Routes.Login} element={<LoginPage />} />
            <Route path={Routes.Forum} element={<ForumPage />} />
            <Route path={Routes.Registration} element={<RegistrationPage />} />
            <Route path={Routes.Rules} element={<RulesPage />} />
            <Route path="*" element={<ServerErrorPage />} />
            <Route path={Routes.ApplicationError} element={<ApplicationErrorPage />} />
            <Route path={Routes.Game} element={<GamePage />} />
        </Route>
    )
);

export * from './routes';
export default router;
