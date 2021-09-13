import React, { FC } from 'react';
import MainLayout from "../layouts/MainLayout";
import HomeContainer from "../containers/Home";

const Home: FC = () => {
    return (
        <MainLayout>
            <HomeContainer />
        </MainLayout>
    );
};

export default Home;
