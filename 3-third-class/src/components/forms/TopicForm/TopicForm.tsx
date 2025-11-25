import { FC } from "react"
import Button from "../../common/Button";
import { TopicEntity } from "../../../models/topic-entity";
import { ClassEntity } from "../../../models/class-entity";


const baseInputStyle: React.CSSProperties = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    width: '95%',
}


const baseSelectStyle: React.CSSProperties = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    width: '99%',
}


export interface TopicFormProps {
    onSave: (topicEntity: TopicEntity) => void;
    classes: ClassEntity[];
}

export const TopicForm: FC<TopicFormProps> = ({ onSave, classes }) => {

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get('name') as string || '';
        const description = formData.get('description') as string || '';
        const classUid = formData.get('classUid') as string || '';

        onSave({
            uid: crypto.randomUUID(),
            name,
            description,
            class: {
                uid: classUid,
                name: '',
                description: '',
            },
        });
    }

    return (
        <form onSubmit={onSubmit} style={{ width: '100%', border: '1px solid #ccc', padding: '10px 20px', borderRadius: '5px' }}>
            <h2 style={{ fontWeight: 'bolder', marginBottom: '10px', marginTop: '0' }}>Create New Topic</h2>
            <input type="text" placeholder="Topic Name" name="name" style={baseInputStyle} />
            <input type="text" placeholder="Topic Description" name="description" style={baseInputStyle} />
            <select name="classUid" style={baseSelectStyle}>
                {classes.map((classEntity) => (
                    <option key={classEntity.uid} value={classEntity.uid!}>{classEntity.name}</option>
                ))}
            </select>
            <Button type="submit" label="Create Topic"  style={{ width: '100%' }}/>
        </form>
    )
}

export default TopicForm;
