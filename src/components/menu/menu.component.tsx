import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Home } from "../home/home.component";
import '../../common.css';
import { useState, useEffect } from "react";

export const Menu = ({ sections }: {sections:string[]} ) => {

    const [sectionMenu, setSectionsMenu] = useState(sections);

    useEffect(() => {
    }, [sectionMenu])

    return(
        <Router>
            <div className="text-light backgroundGlobal">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {
                            sectionMenu && sectionMenu.length > 0 && sectionMenu.map( (word:string) => {
                                return <li className="breadcrumb-item">
                                    <Link to={`/search/${word}`}>{word}</Link>
                                </li>
                            })
                        }
                    </ol>
                </nav>
                <Switch>
                    <Route path="/">
                        <Home changeSections={setSectionsMenu} currentSections={sectionMenu}/>
                    </Route>
                    <Route path="/search/{word}">
                        <Home changeSections={setSectionsMenu} currentSections={sectionMenu}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}