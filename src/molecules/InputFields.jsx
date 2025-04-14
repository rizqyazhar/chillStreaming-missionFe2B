import Input from "../atoms/Input";
import Label from "../atoms/Label";

const InputFields = ({
  id,
  type,
  placeholder,
  htmlFor,
  labelText,
  children,
}) => {
  return (
    <div className='relative flex flex-col gap-1 md:gap-1.5 w-full'>
      <Label htmlFor={htmlFor} labelText={labelText} />
      <Input id={id} type={type} placeholder={placeholder} />
      {children}
    </div>
  );
};

export default InputFields;
