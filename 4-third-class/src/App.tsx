import { FC, useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/common/Layout";
import Button from "./components/common/Button";
import { NAVIGATION_ITEMS, NavigationItem, NavigationItemId } from "./utils/navigationUtils";
import ClassForm from "./components/forms/ClassForm/ClassForm";
import { ClassEntity } from "./models/class-entity";
import StudentForm from "./components/forms/StudentForm/StudentForm";
import { StudentEntity } from "./models/student-entity";
import TopicForm from "./components/forms/TopicForm/TopicForm";
import { TopicEntity } from "./models/topic-entity";
import ClassesList from "./components/classes/ClassesList";
import useLocalStorage from "./hooks/useLocalStorage";


export const App: FC = () => {
  const [navigationItem, setNavigationItem] = useState<NavigationItem>(
    NAVIGATION_ITEMS[0]
  );

  const [classes, setClasses] = useLocalStorage({ key: 'classes', value: [] as ClassEntity[] });

  // const [_, setClasses] = useState<ClassEntity[]>([]);
  const [students, setStudents] = useState<StudentEntity[]>([]);
  const [topics, setTopics] = useState<TopicEntity[]>([]);

  const onClassSave = (classEntity: ClassEntity) => {
    setClasses([...(classes || []), classEntity]);
  }

  const onStudentSave = (studentEntity: StudentEntity) => {
    setStudents([...students, studentEntity]);
  }

  const onTopicSave = (topicEntity: TopicEntity) => {
    setTopics([...topics, topicEntity]);
  }

  useEffect(() => {
    const onClassCreated = () => {
      setNavigationItem(NAVIGATION_ITEMS.find(item => item.id === NavigationItemId.LIST_CLASSES)!);
    }

    onClassCreated();
  }, [classes, setNavigationItem]);

  return (
    <Layout title="Talendig Classes" subtitle="Dashboard de clases de Talendig">
      <section className="actions-container">
        {NAVIGATION_ITEMS.map((item) => (
          <Button
            key={item.label}
            label={item.label}
            onClick={() => setNavigationItem(item)}
            disabled={navigationItem.label === item.label}
          />
        ))}
      </section>
      <section className="content-container">
        { navigationItem.id === NavigationItemId.CREATE_NEW_CLASS && <ClassForm onSave={onClassSave} /> }
        { navigationItem.id === NavigationItemId.CREATE_NEW_STUDENT && <StudentForm onSave={onStudentSave} /> }
        { navigationItem.id === NavigationItemId.CREATE_NEW_TOPIC && <TopicForm onSave={onTopicSave} classes={classes} /> }
        { navigationItem.id === NavigationItemId.LIST_CLASSES && <ClassesList /> }
        {/* { navigationItem.id === NavigationItemId.LIST_TOPICS && <TopicsList /> }
        { navigationItem.id === NavigationItemId.LIST_STUDENTS && <StudentsList /> } */}
      </section>
    </Layout>
  );
};

export default App;