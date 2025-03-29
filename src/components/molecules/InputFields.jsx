import Input from "../atoms/Input";
import Label from "../atoms/Label";

const InputFields = ({ htmlFor, labelText, id, type, placeholder }) => {
  return (
    <>
      <Label htmlFor={htmlFor} labelText={labelText} />
      <Input id={id} type={type} placeholder={placeholder} />
    </>
  );
};

export default InputFields;
