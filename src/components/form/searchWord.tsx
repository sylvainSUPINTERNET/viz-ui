import { useForm } from 'react-hook-form';
import '../../common.css';
import './searchWord.css';

export const SearchWordForm = (
     {changeSections, sections} : {changeSections:any, sections:any}) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = (data:any) => {
        changeSections([...sections, data.searchWord]);
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