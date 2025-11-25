import { FC } from "react";
import { ClassEntity } from "../../../models/class-entity";
import Button from "../../common/Button";
import { SubmitHandler, useForm } from "react-hook-form";

const baseInputStyle: React.CSSProperties = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  marginBottom: "10px",
  width: "95%",
};

export interface ClassFormProps {
  onSave: (classEntity: ClassEntity) => void;
}

export type ClassFormInputs = {
  name: string;
  description?: string;
};

export const ClassForm: FC<ClassFormProps> = ({ onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClassFormInputs>();

  const onSubmit:SubmitHandler<ClassFormInputs> = (data: ClassFormInputs) => {
    const { name, description } = data;
    onSave({
      uid: crypto.randomUUID(),
      name,
      description: description || "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "100%",
        border: "1px solid #ccc",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
    >
      <h2
        style={{ fontWeight: "bolder", marginBottom: "10px", marginTop: "0" }}
      >
        Create New Class
      </h2>
      <input
        style={baseInputStyle}
        {...register("name", { required: true, minLength: 3 })}
      />
      <input
        style={baseInputStyle}
        {...register("description", { maxLength: 30 })}
      />

      {errors.name && <p style={{ color: "red" }}>Name is required</p>}
      {errors.description && <p style={{ color: "red" }}>Description must be less than 30 characters</p>}

      <Button type="submit" label="Create Class" style={{ width: "100%" }} />
    </form>
  );
};

export default ClassForm;
