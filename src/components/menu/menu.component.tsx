import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Home } from "../home/home.component";
import '../../common.css';
import { useState, useEffect } from "react";
import { Search } from "../search/search";
import { Main } from "../main/main.component";
import { Header } from "../header/header";

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
                    <Route exact path="/">
                        <Header/>
                        <Main/>
                    </Route>
                    {/* <Route exact path="/">
                        <Home changeSections={setSectionsMenu} currentSections={sectionMenu}/>
                    </Route> */}
                    <Route exact path="/search/:word">
                        <Search/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}