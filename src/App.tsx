
import * as C from "./App.styles";
import { useState } from "react";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from './components/AddArea'



//componente pai
const App = () => {
  /* criando um state que vai armazenar as task e setando 2 task predefinida */          
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "comprar pão na padaria", done: false },
    { id: 2, name: "Comprar suco de limão", done: true },
  ]);
  console.log(list)

  

  /* função que vai adicionar novas task */
  const handleAddTask = (taskName: string) => {

    /* "derramando" o conteúdo do list dentro do newList
     setando valor ao id, name e done e adicionando ao newList
     levando o valor do newList para o setList
     */
    let newList = [...list];
    newList.push({
      id: list.length +1,
      name: taskName,
      done: false
    });
    setList(newList)
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header> Task List </C.Header>

        {/* área de adicionar nova tarefa */}
        <AddArea onEnter={handleAddTask}/> 

        {/* Lista de tarefas */}
        {list.map((item, index)=>(
            <ListItem
              key={index}
              item={item}
              onChange={handleTaskChange}
            />
          ))}
      </C.Area>
    </C.Container>
  );
};
export default App;
