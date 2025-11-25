import { FC } from "react"
import Button from "../../common/Button";
import { StudentEntity } from "../../../models/student-entity";


const baseInputStyle: React.CSSProperties = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    width: '95%',
}

export interface StudentFormProps {
    onSave: (studentEntity: StudentEntity) => void;
}

export const StudentForm: FC<StudentFormProps> = ({ onSave }) => {

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get('name') as string || '';
        const email = formData.get('email') as string || '';
        const city = formData.get('city') as string || '';

        onSave({
            uid: crypto.randomUUID(),
            name,
            email,
            city,
        });
    }

    return (
        <form onSubmit={onSubmit} style={{ width: '100%', border: '1px solid #ccc', padding: '10px 20px', borderRadius: '5px' }}>
            <h2 style={{ fontWeight: 'bolder', marginBottom: '10px', marginTop: '0' }}>Create New Student</h2>
            <input type="text" placeholder="Student Name" name="name" style={baseInputStyle} />
            <input type="text" placeholder="Student Email" name="email" style={baseInputStyle} />
            <input type="text" placeholder="Student City" name="city" style={baseInputStyle} />
            <Button type="submit" label="Create Student"  style={{ width: '100%' }}/>
        </form>
    )
}

export default StudentForm;
