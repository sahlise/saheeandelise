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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" placeholder="e.g. Amber Smith" {...register("name", { maxLength: 100, pattern: /^[A-Za-z]+(?:[ -]?[A-Za-z]+)*$/i })} />
                {errors.name?.type == 'maxLength' && <div className="text-red-600">Too long!</div>}
                {errors.name?.type == 'pattern' && <div className="text-red-600">Invalid Character</div>}
            </div>

            <div>
                <button type="submit">Find RSVP</button>
            </div>
            
        </form>
    )
}

export default FindNameForm;