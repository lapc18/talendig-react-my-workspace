import { FC } from "react"
import { ClassEntity } from "../../../models/class-entity";
import Button from "../../common/Button";


const baseInputStyle: React.CSSProperties = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    width: '95%',
}

export interface ClassFormProps {
    onSave: (classEntity: ClassEntity) => void;
}

export const ClassForm: FC<ClassFormProps> = ({ onSave }) => {

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get('name') as string || '';
        const description = formData.get('description') as string || '';

        onSave({
            uid: crypto.randomUUID(),
            name,
            description,
        });
    }

    return (
        <form onSubmit={onSubmit} style={{ width: '100%', border: '1px solid #ccc', padding: '10px 20px', borderRadius: '5px' }}>
            <h2 style={{ fontWeight: 'bolder', marginBottom: '10px', marginTop: '0' }}>Create New Class</h2>
            <input type="text" placeholder="Class Name" name="name" style={baseInputStyle} />
            <input type="text" placeholder="Class Description" name="description" style={baseInputStyle} />
            <Button type="submit" label="Create Class"  style={{ width: '100%' }}/>
        </form>
    )
}

export default ClassForm;
