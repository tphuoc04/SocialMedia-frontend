import React from 'react';
import { Navbar, Footer } from '../components';
import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';


const Template = () => {
    return (
        <>
                <Navbar />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
        </>
    )
}

const Main = styled(Container)`
    margin-left: auto;
    margin-right: auto;
`

export default Template