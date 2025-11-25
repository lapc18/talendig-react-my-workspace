import { FC } from "react";
import { ClassEntity } from "../../models/class-entity";
import useLocalStorage from "../../hooks/useLocalStorage";
import Card from "../common/Card/Card";


export const ClassesList: FC = () => {

    const [classes] = useLocalStorage({ key: 'classes', value: [] as ClassEntity[] });


    return (
        <section style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        }}>
            {[...(classes || [])].map((classEntity: ClassEntity) => (
                <Card key={classEntity.uid}>
                    <h3>{classEntity.name}</h3>
                    <p>{classEntity.description}</p>
                </Card>
            ))}
        </section>
    )
}

export default ClassesList;