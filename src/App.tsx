// C = Container
import * as C from "./App.styles";
import { useState } from "react";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
const App = () => {
            //setList
  const [list] = useState<Item[]>([
    { id: 1, name: "comprar pão na padaria", done: false },
    { id: 2, name: "Comprar suco de limão", done: true },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header> Task List </C.Header>

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
