import React, { FC } from 'react';
import { Wrapper, InfoBlock, ButtonBlock } from './styled.index'
import Title from "../../components/Title";
import Button from "../../components/Button";
import useHome from "./hook/useHome";
import {RouteNames} from "../../routes";

const HomeContainer: FC = () => {
    const { handlePushRouter } = useHome();

    return (
        <Wrapper>
            <InfoBlock>
                <Title level={1}>Игра память</Title>
                <p>
                    Дано 18 карточек. Найдите все пары героев вселенной Star Wars.
                </p>
            </InfoBlock>
            <ButtonBlock>
                <Button onClick={() => handlePushRouter(RouteNames.GAME)} disabled={false} animation leftAnimation>
                    Играть
                </Button>
                <Button onClick={() => handlePushRouter(RouteNames.ACHIEVEMENTS)} disabled={false} animation>
                    Таблица результатов
                </Button>
            </ButtonBlock>
        </Wrapper>
    );
};

export default HomeContainer;
