import { useTransform, useViewportScroll } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { Container } from './styles';

const Header: FunctionComponent = () => {
    const { scrollYProgress } = useViewportScroll();

    const headerY = useTransform(scrollYProgress, [0.177, 0.198], ['0%', '-100%']);

    return <Container style={{ y: headerY }} />;
};

export default Header;
