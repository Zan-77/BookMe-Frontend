import { useController } from "react-hook-form"
import { useState } from "react";
import Text from "./Text";
import AlertIcon from "./svg/AlertIcon";
import EyeIcon from "./svg/EyeICon";


export const Input = ({ id, className, name, control, rules, label, type = "text", ...props }) => {
    const [hideInput, setHideInput] = useState(false)

    const {
        field,
        fieldState: { invalid, isTouched, isDirty, error },
        formState: { touchedFields, dirtyFields, errors }
    } = useController({
        name: name,
        control: control,
        rules: rules
    });



    const inputStyle = "peer/text w-full bg-inherit dark:bg-inherit text-light-text-dark dark:text-dark-text-dark  " + " " +
        `outline-2  rounded-sm p-3 
                ${error ? "outline-error" :
            "outline-light-text-muted dark:outline-dark-light focus:outline-light-primary dark:focus:outline-dark-primary "}`;
    return (
        <div className="bg-inherit">
            <div className={"relative bg-inherit" + " " + className}>
                <input id={id} className={inputStyle} type={hideInput ? "password" : "text"} {...props}
                    autoComplete="additional-name"
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                    name={field.name}
                    ref={field.ref}
                />
                <span className={` absolute -top-3.5 ltr:left-2.5 rtl:right-2.5 px-1.5 font-medium scale-95 bg-inherit dark:bg-inherit cursor-default 
                ${error ? "text-error" : "peer-focus/text:text-light-primary dark:peer-focus/text:text-dark-primary-light text-light-text-muted dark:text-dark-text-muted"} text-shadow-light-text-muted `}>{label}</span>

                {type === "password" ? <span className="absolute top-1/2 ltr:right-2.5 rtl:left-2.5 -translate-y-1/2 cursor-pointer"><EyeIcon see={hideInput} onClick={() => { setHideInput(!hideInput) }} /></span> : ""}
            </div>
            <div className={`${error ? "visible" : "invisible"} flex items-center ml-2 mt-2 *:mr-1`}>
                <AlertIcon className="stroke-error!" />
                <Text className={`block text-error`}>{error ? error.message : ""}</Text>
            </div>

        </div>
    )
}

export default Input