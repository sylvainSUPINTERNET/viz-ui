import { useForm } from 'react-hook-form';
import { getSearchDetail } from '../../api/search/search.api';
import '../../common.css';
import './searchWord.css';

export const SearchWordForm = (
     {changeSections, sections, setNodeChildren, nodeChildren} : {changeSections:any, sections:any, setNodeChildren:any, nodeChildren:any}) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = async (data:any) => {
        changeSections([...sections, data.searchWord]);
        let res = await getSearchDetail(`${data.searchWord}`);
        let json = await res.json();
        console.log(json);
        setNodeChildren([...nodeChildren, ...json.result]);
        reset({"searchWord": ""});
    };

    return (
        <div id="main" className="text-light backgroundGlobal">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="search word" {...register("searchWord", { required: true })} />
                {errors.searchWord && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    )

}