'use client'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import InputFields from '@/components/forms/InputFields'
import FootersLinks from '@/components/forms/FootersLinks'

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors , isSubmitting},
    } = useForm<SignInFormData>( {
        defaultValues: {
        email: '',
        password: '',
        },
        mode: 'onBlur'
    },);
    const onSubmit = async(data:SignInFormData) => {
        try{
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }

  return (
    <>
        <h1 className ='form-title'> Sign In </h1>

        <form onSubmit = {handleSubmit(onSubmit)} className = "space-y-5">
            <InputFields
                name = "email"
                label = "Email"
                placeholder = "JohnDoe@gmail.com"
                register = {register}
                error = {errors.email}
                validation = {{required: ' Email is required' , pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' }}}
            /> 

            <InputFields
                name = "password"
                label = "Password"
                placeholder = "********"
                type = "password"
                register = {register}
                error = {errors.password}
                validation = {{required: 'Password is required' , minLength: 8, pattern : { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: 'Password must be at least 8 characters long and contain both letters and numbers' }}}
            /> 

            <Button type = 'submit' disabled = {isSubmitting} className = "yellow-btn w-fill margin-top-5">
                {isSubmitting ? 'Signing In' : 'Welcome Back'}
            </Button>

            <FootersLinks
                text ="Don't have an account?"
                linkText ="Sign up"
                href ="/sign-in/sign-up"
            /> 
        </form>
    </>
  )
}

export default SignIn


