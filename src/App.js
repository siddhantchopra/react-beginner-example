import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const ModalExample = lazy(() => import('./ModalExample'));
const TodoExample = lazy(() => import('./TodoExample'));
const CustomHookExample = lazy(()=> import('./CustomHookExample'))
const SearchExample = lazy(()=> import('./SearchExample'))

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
            <h2 className="subtitle">Here are some examples which make use of react portals, Hooks, routers and some es6 features</h2>
                </header>
            <div id="navMenu" className="navbar-menu container">      
                <div className="navbar-start">
                    <Link to="/modal" className="navbar-item" href="admin.html">
                        Modal Example
                    </Link>
                    <Link to="/todo" className="navbar-item" href="admin.html">
                        Todo Example
                    </Link>
                    <Link to="/custom_hook" className="navbar-item" href="admin.html">
                        Custom Hook Example
                    </Link>
                    <Link to="/search" className="navbar-item" href="admin.html">
                        Autocomplete Search Example
                    </Link>
                    <button className="btn btn-secondary ml-5" onClick={handleMode}>Toggle DarkMode</button>
                </div>
            </div>
            <Suspense fallback={<div className="container subtitle">Loading...</div>}>
                <Switch>
                    <Route path="/todo" component={TodoExample} />
                    <Route path="/modal" component={ModalExample} />
                    <Route path="/custom_hook" component={CustomHookExample} />
                    <Route path="/search" component={SearchExample} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    </>
    )
}


