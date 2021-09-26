import React, { Dispatch, SetStateAction } from 'react';
import '../../common.css';
import { NewIdea } from '../form/newIdea';
import { SearchWordForm } from '../form/searchWord';
import { Menu } from '../menu/menu.component';
import './home.css';


export const Home = ({changeSections, currentSections} : {changeSections:any, currentSections:any}) => {
    return (
        <div id="main" className="text-light backgroundGlobal">
            <SearchWordForm changeSections={changeSections}
             sections={currentSections}/>
            {currentSections.length > 0 
                ? <p>Serch in progress</p>
                : <div>
                    <NewIdea />
                </div>
            }
        </div>
        
    )

}