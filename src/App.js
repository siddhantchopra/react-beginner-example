import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const ModalExample = lazy(() => import('./ModalExample'));
const TodoExample = lazy(() => import('./TodoExample'));

export const App = () => {

    const handleMode = () => {
        document.documentElement.classList.toggle('dark-mode')
        document.querySelectorAll('.inverted').forEach((result) => {
            result.classList.toggle('invert')
        })
    }
    return (<>
        <BrowserRouter>
        <header>
            <h1 className="title">React Example for beginner</h1>
            <h2 className="subtitle">Here are the two link where you can see use of react portals and useReducer</h2>
                </header>
            <div id="navMenu" class="navbar-menu container">      
                <div className="navbar-start">
                    <Link to="/modal" class="navbar-item" href="admin.html">
                        Modal Example
                    </Link>
                    <Link to="/todo" class="navbar-item" href="admin.html">
                        Todo Example
                    </Link>
                    <button className="btn btn-secondary ml-5" onClick={handleMode}>Toggle DarkMode</button>
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/todo" component={TodoExample} />
                    <Route path="/modal" component={ModalExample} />
                </Switch>
            </Suspense>
        </BrowserRouter>


    </>
    )
}


