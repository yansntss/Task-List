
import * as C from "./App.styles";
import { useState } from "react";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from './components/AddArea'
import { setMaxListeners } from "process";


const App = () => {
            
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "comprar pão na padaria", done: false },
    { id: 2, name: "Comprar suco de limão", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length +1,
      name: taskName,
      done: false
    });
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header> Task List </C.Header>

        <AddArea onEnter={handleAddTask}/> 
        {/* área de adicionar nova tarefa */}

        {/* Lista de tarefas */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};
export default App;
