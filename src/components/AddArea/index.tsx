import { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [InputText, setInputText] = useState("");

  //verificar se a tecla 'Enter' foi clicada
  const handleKeyUp = (e: KeyboardEvent) => {
    //console.log(e.code)
    if (e.code === "Enter" && InputText !== "") {
      onEnter(InputText);
      setInputText('')
    }
  };

  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicionar uma tarefa"
        value={InputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};
