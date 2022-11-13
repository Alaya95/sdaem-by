import React from 'react';
import { Routes, Route} from "react-router-dom";
import {Main} from "./pages/Main/Main";
import {News} from "./pages/News/News";
import {Register} from "./pages/Register/Register";
import {Login} from "./pages/Login/Login";
import {NewsDetail} from "./pages/NewsDetail/NewsDetail";
import {Tarifs} from "./pages/Tarifs/Tarifs";
import {Catalog} from "./pages/Catalog/Catalog";
import {Contacts} from "./pages/Contacts/Contacts";
import {Announce} from "./pages/Announce/Announce";
import {Account} from "./pages/Account/Account";
import {Favorites} from "./pages/Favorites/Favorites";
import {NotFound} from "./pages/NotFound/NotFound";

export const AppRouter = () => {
    return (
            <Routes>
                <Route path={'/'} >
                    <Route path={''} element={<Main />}/>
                    <Route path={'news'}>
                        <Route path={''} element={<News />}/>
                        <Route path={':id'} element={<NewsDetail />}></Route>
                    </Route>
                    <Route path={'tarifs'} element={<Tarifs />} />
                    <Route path={'announce'} element={<Announce />} />
                    <Route path={'register'} element={<Register />} />
                    <Route path={'auth'} element={<Login />} />
                    <Route path={'catalog'} element={<Catalog />} />
                    <Route path={'contacts'} element={<Contacts />} />
                    <Route path={'account'} element={<Account />} />
                    <Route path={'favorites'} element={<Favorites />} />

                    <Route path={'*'}  element={<NotFound />}/>
                </Route>

            </Routes>
    );
}