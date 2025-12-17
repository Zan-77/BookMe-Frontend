


const english = {
    lang:"en",
    dir:"ltr",
    texts:{
        login:{
            h1:"Welcome Back!",
            username:{
                label:"Username",
                errorMessages:{
                    required:"Required"
                },
            },
            password:{
                label:"Password",
                errorMessages:{
                    required:"Required"
                }
            },
            forgot:{
                text:"Forgot your password!",
                button:"Reset"
            },
            submit:"Login",
            register:{
                text:"Need a new account!?",
                button:"Register"
            }
        },
        register:{
            h1:"Welcome!",
             username:{
                label:"Username",
                errorMessages:{
                    required:"Required",
                    maxLength:"username shoud be less than 25",
                    minLength :"username shoud be atleast more than 3",
                    pattern1:" symbols like '-' , '_' must be followed by letters , number",
                    allowdedSymbols:"username must have only letters numbers and '_' , '-'"
                },
            },
            email:{
                label:"Email",
                errorMessages:{
                    required:"Required",
                    pattern:"invalid email,valid ones e.g. example@gmail.com"
                },
            },
             password:{
                label:"Password",
                errorMessages:{
                    required:"Required",
                      maxLength:"username shoud be less than 25",
                    minLength :"username shoud be atleast more than 7",
                    weak:"weak password"
                },
            },
            confirmPassword:{
                label:"Confirm Password",
                errorMessages:{
                    required:"Required",
                    confirm:"passwords does not match"
                },
            },
            submit:"Create Account",
            login:{
                text:"Already have an Account!?",
                button:"Login"
            }
        },
        none:""
    }
}  

export default english;