import React from 'react';
import { Input } from '../../common/style';

const InputContainer = ({register, name, errors, rules, attrs = {}}) => {
    return <Input {...register(name, rules)}
        className={
            `${rules.required ? 'required' : ''} 
             ${errors[name] ? 'v-invalid' : ''}`
        } {...attrs}/>;
};

export default InputContainer;
