import { InputHTMLAttributes, FC } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = (props) => {
  return (
    <input
      {...props}
      className='w-full mt-6 h-14 pl-8 border-2 border-black/75 focus:outline-none focus:border-secondary/75 rounded-md'
    />
  );
};

export default FormInput;
