import { useForm } from "react-hook-form"
import Button from "../components/Button";
import Text from "../components/Text";
import { ax } from "../api/config"
import useLanguage from "../hooks/useLanguage";
const Login = () => {
    const [text]=useLanguage("login")

    
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: "",
            password: ""
        },
        mode: "all"
    });


    const onSubmit = async (data) => {
        /* try {
             const response = await ax.post("/auth/token/" , data,{headers:{
                 "Authorization":"Bearer"
             }});
             console.log(response);
             
         } catch (error) {
             console.log(error);
             
         }
         */
    }

    return (

        <form className="flex flex-col w-full h-dvh bg-light-dark dark:bg-dark-dark md:bg-light md:dark:bg-dark p-4 *:my-5 *:md:mb-6 md:w-1/4 md:h-fit md:px-8 md:rounded-sm md:border-2 border-light-light dark:border-dark-light"
            onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl text-center cursor-default">{text.h1}</h1>
            <Input id="username" label={text.username.label} name="username" rules={{ required: { message: text.username.errorMessages.required, value: true } }} control={control} />
            <Input id="password " label={text.password.label} name="password" type="password" rules={{ required: { message: text.password.errorMessages.required, value: true } }} control={control} />
            <div>
                <Text muted={true}>{text.forgot.text}</Text>
                <Button to="/forgot" type="submit" variant="text" color="link" className="w-3/5  h-10">{text.forgot.button}</Button>
            </div>
            <Button variant="fill" className="w-3/4 mx-auto mb-8! h-10">{text.submit}</Button>
            <div >
                <Text muted={true}>{text.register.text}</Text>
                <Button to="/register" variant="text" color="link" className="w-3/5 h-10">{text.register.button}</Button>
            </div>
        </form>
    )
}

export default Login