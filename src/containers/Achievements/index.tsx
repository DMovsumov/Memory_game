import React, { FC } from 'react';
import { WrapperContainer, Table, GridData, InfoBlock, ItemText } from "./styled.index";
import Title from "../../components/Title";
import useAchievements from "./hook/useAchievements";
import Button from "../../components/Button";

const AchievementsContainer: FC = () => {
    const { data, handleGoGame } = useAchievements();

    return (
        <WrapperContainer>
            <Title level={1}>Таблица результатов</Title>
            <Table>
                {data.length > 0 ?
                    <>
                        <GridData>
                            <ItemText>№</ItemText>
                            <ItemText>Время</ItemText>
                            <ItemText>Количество ходов</ItemText>
                            <ItemText>Найдено героев</ItemText>
                        </GridData>
                        {data.map((achievement, index) => (
                            <GridData key={achievement.time + index}>
                                <ItemText>{index + 1}</ItemText>
                                <ItemText>{achievement.time}</ItemText>
                                <ItemText>{achievement.clickCount}</ItemText>
                                <ItemText>{achievement.count}</ItemText>
                            </GridData>
                        ))}
                    </>
                    : (
                        <InfoBlock>
                            <Title level={2}>Пока достижений нет</Title>
                            <Button onClick={handleGoGame} disabled={false}>
                                Перейти к игре
                            </Button>
                        </InfoBlock>
                    )}
            </Table>
        </WrapperContainer>
    );
};

export default AchievementsContainer;
