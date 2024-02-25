import { useForm, SubmitHandler } from "react-hook-form"


interface IFormInput {
    name: string
}

interface FindNameFormProps {
    findName: (name: string) => void;
}

const FindNameForm: React.FC<FindNameFormProps> = ({ findName }) => {
    const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
        findName(data.name);
    }


    return (
        <form className="w-full flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-1/2 m-2">
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="e.g. Amber Smith" 
                    {...register("name", { maxLength: 100, pattern: /^[A-Za-z]+(?:[ -]?[A-Za-z]+)*$/i })} 
                />
                {errors.name?.type == 'maxLength' && <div className="text-red-600">Too long!</div>}
                {errors.name?.type == 'pattern' && <div className="text-red-600">Invalid Character</div>}
            </div>

            <div className="w-1/2  m-2">
                <button 
                    className="
                    w-full py-2 px-4
                    bg-weddingTan hover:opacity-75
                    rounded font-bold
                    focus:outline-none focus:shadow-outline
                    border-solid border-2 border-weddingTan"
                    type="submit">
                    Find RSVP
                </button>
            </div>
            
        </form>
    )
}

export default FindNameForm;