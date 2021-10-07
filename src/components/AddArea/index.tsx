import { useState, KeyboardEvent } from "react";
import * as C from "./styles";

//pesquisar sobre isso // na minha concepção, o onEnter recebe taskName que é do tipo string e retonar vazio
type Props = {
  onEnter: (taskName: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [InputText, setInputText] = useState("");
    
  //verificar se a tecla 'Enter' foi clicada
  /**
   * 
   * @param e É do tipo keyboardEvent, quando o valor do parametro for igual a "Enter" e o InputText tiver valor. 
   * resetando o valor do input com o  setInputText('')
   */
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
