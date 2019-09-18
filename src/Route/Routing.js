import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Profile from '../Pages/Profile';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Links from '../Pages/Links';
import Projects from '../Pages/Project';

export default class Routing extends PureComponent {
    render() {
        return(
            <Router>
                <Links />
                    <Route exact path='/' component={ Profile } />
                    <Route exact path='/about' component={ About } />
                    <Route exact path='/skills' component={ Skills } />
                    <Route exact path='/projects' component={ Projects } />
            </Router>
        )
    }
}