import { useEffect, useState } from 'react';
import './newIdea.css'
import { FcLink } from 'react-icons/fc';
import { AiOutlineSubnode } from "react-icons/ai"
import { INode } from '../../api/node/INode';
import { INodeCreate } from '../../api/node/INodeCreate';
import { createNode } from '../../api/node/node.api';
export const NewIdea = () => {

    type Field = {
        "secondaryType": string,
    }


    const [fields, setFields] = useState([{ "secondaryType": "secondaryType" }]);
    const [values, setValues] = useState<any | undefined>({});

    useEffect(() => {

    }, [fields]);

    const handleSubmit = async (ev: any) => {
        ev.preventDefault();
        if ( values ) {
            try {
                const res = await createNode(values, "nodes");
                const jsonData = await res.json();
            } catch (e) {
                console.log(e);
            }

        }

    };

    const addField = (ev: any) => {
        setFields([...fields, {
            "secondaryType": "secondaryType"
        }])
    }

    const changeVal = (ev:any) => {
        values[ev.target.id] = ev.target.value;
        setValues(values);
    }

    return (
        <div>
            <h1>New idea form</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexFlow: "row wrap" }}>

                    <div>
                        <div style={{ "flex": "0.15" }}>
                            <input id={`mainType`} type="text" placeholder="main type" name="mainType" onChange={changeVal} />
                            
                        </div>
                    </div>

                    <div style={{flex:1}}>
                    {
                        fields.map((field: Field, i: number) => {
                            return <div style={{ display: "flex" }}>
                                <AiOutlineSubnode size={"2em"} />
                                <div style={{ "flex": "0.15" }}>
                                    <input id={`${field.secondaryType}${i}`} type="text" placeholder="secondary type" name={`${field.secondaryType}${i}`} onChange={changeVal} />
                                </div>
                            </div>
                        })
                    }
                    </div>

                </div>


                <div>
                    <button className="mt-3" onClick={addField}> + Add field</button>
                </div>

                <div>
                    <input className="btn btn-success mt-3" type="submit" value="Save"/>
                </div>

            </form>
        </div>
    )
}