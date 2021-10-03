import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearchDetail } from "../../api/search/search.api";

export const Search = () => {

    let { word }: {word:string} = useParams();
    let [children, setChildren] = useState([]);

    let getChildren = async () => {
        let res = await getSearchDetail(word);
        let {result} = await res.json();

        setChildren(result);
    }

    useEffect(() => {
        console.log("Word : ", word);
        getChildren();
    }, []);


    return (
        <div>
            <h2>Associated data for <code>{word}</code></h2>
            {
                children && children.length > 0 && children.map( (children: any, i:number) => {
                    return <div>
                            <a href={`/search/${children.label}`} key={i}>{children.label}</a>
                        </div>
                })
            }
        </div>
    )
}