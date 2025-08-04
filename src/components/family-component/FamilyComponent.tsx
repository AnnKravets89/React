import './FamilyComponent.css';
import {simpsons} from "../../data/arrays.ts";
import type {ICharacterModel} from "../../models/CharacterModel.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div className="family">
            {
                simpsons.map((value: ICharacterModel, index: number) => {
                    return <CharacterComponent character={value} key={index}>
                        {value.info}
                        </CharacterComponent>
                })
            }
        </div>
    );
};
