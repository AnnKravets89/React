import './CharacterComponent.css';
import type {FC, ReactNode} from "react";
import type {ICharacterModel} from "../../models/CharacterModel.ts";

type PropsType = {
    character: ICharacterModel;
    children: ReactNode;
}

export const CharacterComponent: FC<PropsType> = ({character, children}) => {
    return (
        <>
            <div className={'character-card'}>
                <img src={character.photo} alt={character.name}/>
                <div className={"character-name-info"}>
                    <div className={"character-name"}>
                        <h2>{character.name} {character.surname}</h2>
                        <p>{character.age} {"years old"}</p>
                    </div>
                        <p className={"character-info"}>{children}</p>
                </div>
            </div>
        </>
    );
};
