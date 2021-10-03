import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import '../../common.css';
import { NewIdea } from '../form/newIdea';
import { SearchWordForm } from '../form/searchWord';
import { Menu } from '../menu/menu.component';
import './home.css';


export const Home = ({changeSections, currentSections} : {changeSections:any, currentSections:any}) => {
    const [nodeChildren, setNodeChildren] = useState([]);

    useEffect(() => {
        
    }, [nodeChildren]);
    
    return (
        <div id="main" className="text-light backgroundGlobal">

            {currentSections.length > 0 
                ? <div>
                    {
                        nodeChildren && nodeChildren.length > 0 && nodeChildren.map( (child:any, i:number) => {
                            return <div>
                                <a href={`/search/${child.label}`} key={i}>{child.label}</a>
                            </div>
                        })
                    }
                </div>
                : <div>
                    <SearchWordForm changeSections={changeSections}
                    sections={currentSections} setNodeChildren={setNodeChildren} nodeChildren={nodeChildren}/>
                    <NewIdea />
                </div>
            }
        </div>
        
    )

}