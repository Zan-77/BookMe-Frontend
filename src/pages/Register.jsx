import { useForm } from "react-hook-form";
import { postRegister } from "../api/user/register";
import { postLogin } from "../api/user/login";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import Button from "../components/Button";
import Tolltip from "../components/Tolltip";
import Text from "../components/Text";
import useLanguage from "../hooks/useLanguage";
import useAuthUser from "../hooks/useAuthUser";
import { setIsLogged } from "../features/user/userSlice";
import { useNavigate } from "react-router";


const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {setAccess, setRefresh} = useAuthUser();
  const [text] = useLanguage("register");
  const { control, watch, handleSubmit, setError, clearErrors, formState: { isSubmitting } } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    mode: "all"
  });
  const password = watch("password");
  const inputRules = {
    username: {
      required: { message: text.username.errorMessages.required, value: true },
      maxLength: { message: text.username.errorMessages.maxLength, value: 24 },
      minLength: { message: text.username.errorMessages.minLength, value: 4 },
      validate: {
        pattern1: (value) => /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9_-]+$/.test(value) || text.username.errorMessages.pattern,
        pattern: (value) => /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9_-]+$/.test(value) || text.username.errorMessages.allowdedSymbols,
      }
    },
    email: {
      required: { message: text.email.errorMessages.required, value: true },
      pattern: { message: text.email.errorMessages.pattern, value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }
    },
    password: {
      required: { message: text.password.errorMessages.required, value: true },
      maxLength: { message: text.password.errorMessages.maxLength, value: 24 },
      minLength: { message: text.password.errorMessages.minLength, value: 8 },

      pattern: { message: text.password.errorMessages.weak, value: /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/ },

    },
    confirmPassword: {
      required: { message: text.confirmPassword.errorMessages.required, value: true },
      validate: (value) => value === password || text.confirmPassword.errorMessages.confirm
    }
  }


  const onSubmit = async (data) => {
    clearErrors("username")
    const res = await postRegister(data);
    if (res.status === 201) {
      const res = await postLogin(data);
      if (res.status === 200) {
        setAccess(res.data.access);
        setRefresh(res.data.refresh);
        dispatch(setIsLogged(true));
        navigate("/")
      }
      else
        window.alert("server error")
    }
    else if (res.status === 400) {
      if (res.data.username) {
        setError("username", { message: "Username already exist" })
      }
    }
  }
  return (
    <form className="flex flex-col w-full h-dvh bg-light-dark dark:bg-dark-dark md:bg-light md:dark:bg-dark px-8 py-2 sm:justify-center sm:items-center *:sm:w-3/4  *:my-3 md:min-w-md *:md:w-11/12 md:w-[28%] md:h-fit md:px-8 md:rounded-sm md:border-2 md:border-light-dark md:dark:border-dark-light"
      onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl text-center">{text.h1}</h1>
      <Input id="username" label={text.username.label} name="username" rules={inputRules.username} control={control} />
      <Input id="email" label={text.email.label} name="email" rules={inputRules.email} control={control} />
      <Tolltip tip="Password must be at least 8 characters long and contain at least 3 lower case, 2 upper case, 2 numbers and 1 symbol" position="right">
        <Input id="password" label={text.password.label} name="password" type="password" rules={inputRules.password} control={control} />
      </Tolltip>
      <Input id="confirm-password" label={text.confirmPassword.label} name="confirmPassword" type="password" rules={inputRules.confirmPassword} control={control} />
      <Button variant="fill" className="w-3/4 mx-auto mb-8! h-10" loading={isSubmitting}>{text.submit}</Button>
      <div >
        <Text muted={true}>{text.login.text}</Text>
        <Button to="/login" variant="text" color="link" className="w-3/5 h-10">{text.login.button}</Button>
      </div>
    </form>
  )
}

export default Register