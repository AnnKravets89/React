import './CharacterComponent.css';
import type {FC, ReactNode} from "react";
import type {ICharacterModel} from "../../models/CharacterModel.ts";

type PropsType = {
    character: ICharacterModel;
    children: ReactNode;
}

export const CharacterComponent: FC<PropsType> = ({character, children}) => {
    return (
        <div className={'character-card'}>
           <div className={"character-image"}>
               <img src={character.photo} alt={character.name}/>
           </div>
            <div className={"character-name-info"}>
                <div className={"character-name"}>
                    <h2>{character.name} {character.surname}</h2>
                    <p>{character.age} {"років"}</p>
                </div>
                    <p className={"character-info"}>{children}</p>
            </div>
        </div>
    );
};
