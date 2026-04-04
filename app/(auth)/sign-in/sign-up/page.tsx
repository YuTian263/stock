'use client'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import InputFields from '@/components/forms/InputFields'
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants'
import SelectField from '@/components/forms/selectField'
import {CountrySelectField}  from '@/components/forms/CountrySelectField'
import FootersLinks from '@/components/forms/FootersLinks'


const signUp = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors , isSubmitting},
    } = useForm<SignUpFormData>( {
        defaultValues: {
        fullName: '',
        email: '',
        password: '',
        country: 'US',
        investmentGoals: 'Growth',
        riskTolerance: 'Medium',
        preferredIndustry: 'Technology'
        },
        mode: 'onBlur'
    },);
    const onSubmit = async(data:SignUpFormData) => {
        try{
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }
  return (
    <>
        <h1 className ='form-title'> Sign Up& Personalized </h1>

        <form onSubmit = {handleSubmit(onSubmit)} className = "space-y-5">
            <InputFields
                name = "fullName"
                label = "Full Name"
                placeholder = "John Doe"
                register = {register}
                error = {errors.fullName}
                validation = {{required: 'Full Name is required' , minLength: 2 }}
            /> 

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
            <CountrySelectField
                name ='country'
                label = "Country" 
                control = {control}
                error = {errors.country}
                required
            />

            <SelectField
                name = "investmentGoals"
                label = "Ivestment Goals"
                placeholder = "Select your investments goals"
                options = {INVESTMENT_GOALS}
                control ={control}
                error = {errors.investmentGoals}
                required
            />

            <SelectField
                name = "riskTolerance"
                label = "Risk Tolerance"
                placeholder = "Select your Risk tolerance"
                options = {RISK_TOLERANCE_OPTIONS}
                control ={control}
                error = {errors.riskTolerance}
                required
            />

            <SelectField
                name = "preferredIndustry"
                label = "Preferred Industry"
                placeholder = "Select your preferred industry"
                options = {PREFERRED_INDUSTRIES}
                control ={control}
                error = {errors.preferredIndustry}
                required
            />

            <Button type = 'submit' disabled = {isSubmitting} className = "yellow-btn w-fill margin-top-5">
                {isSubmitting? "Creating Accoiunt" : "Start Investing journey"}
            </Button>

            <FootersLinks
                text ="Already have an account?"
                linkText ="Sign in"
                href ="/sign-in"
            /> 
        </form>

    </> 
  )
}

export default signUp
