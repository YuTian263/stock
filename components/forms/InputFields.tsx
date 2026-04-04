import React from 'react'
import { cn } from '@/lib/utils';
const InputFields = ({name, label, placeholder, type = "text", register, error, validation, disabled, value }: FormInputProps) => {
  return (
    <div className = "space-y-2">
        <label htmlFor = {name} className = 'form-label'>
            {label}
        </label>
        <input
            id = {name}
            type = {type}
            placeholder = {placeholder}
            {...register(name, validation)}
            disabled = {disabled}
            value = {value}
            className = {cn('form-input', { 'opacity-50 cursor-not-allowed': disabled })}
        />
        
        {error && <p className = 'text-red-500 text-sm'>{error.message}</p>}
    </div>
  )
}


export default InputFields