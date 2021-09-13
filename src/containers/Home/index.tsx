import React, { FC } from 'react';
import { Wrapper, InfoBlock, ButtonBlock } from './styled.index'
import Title from "../../components/Title";
import Button from "../../components/Button";

const HomeContainer: FC = () => {
    return (
        <Wrapper>
            <InfoBlock>
                <Title level={1}>Игра память</Title>
                <p>
                    Поле 6х6. 18 парных карточек с различными иконками.
                    При нажатии на кнопку “старт” запускается таймер.
                    Карты, естественно, должны располагаться в случайном порядке.
                    По нажатию на карточку она открывается, в течении 5 сек игроку нужно открыть вторую карточку,
                    если иконки на паре открытых карт совпадают они удаляются, если нет - пара открытых карт закрываются.
                    Игра заканчивается когда все пары карт найдены. Таймер останавливается.
                </p>
            </InfoBlock>
            <ButtonBlock>
                <Button onClick={() => console.log('play')} disabled={false}>
                    Играть
                </Button>
                <Button onClick={() => console.log('play')} disabled={false}>
                    Таблица результатов
                </Button>
            </ButtonBlock>
        </Wrapper>
    );
};

export default HomeContainer;
