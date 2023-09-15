import React from 'react';
import { Container, MenuWrapper, CircleCard} from './styles';
import MenuIcon from '../../utils/Icons/Menu';

function Menu() {
    return (
    <Container>
        <MenuWrapper>
            <CircleCard><MenuIcon /></CircleCard>
            <CircleCard><MenuIcon /></CircleCard>
            <CircleCard isActive><MenuIcon /></CircleCard>
            <CircleCard><MenuIcon /></CircleCard>
            <CircleCard><MenuIcon /></CircleCard>
        </MenuWrapper>
    </Container>
    );
}

export default Menu;