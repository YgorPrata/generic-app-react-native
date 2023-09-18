import React from 'react';
import { Container, CircleCard, WrapperCircleCard} from './styles';
import Icon from '../../utils/Icons';
import { white } from '../../utils/Colors/Colors';
import CardLinearGradient from '../CardLinearGradient';


function Menu() {
    return (
    <Container>
        <CardLinearGradient
            colors={['#0e303a', '#133d49']}
            // colors={['#fd8477', '#dd4a67']}
            start={{x: 0, y: 0}} end={{x:0, y: 0.8}}
            style={{
                height: 54,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
            }}
        >
            <WrapperCircleCard>
                <CircleCard>
                    <Icon type='Menu' color={white} width={18} height={18} />
                </CircleCard>
            </WrapperCircleCard>
            <WrapperCircleCard>
                <CircleCard>
                    <Icon type='Menu' color={white} width={18} height={18} />
                </CircleCard>
            </WrapperCircleCard>
            <WrapperCircleCard>
                <CircleCard isActive>
                    <Icon type='Menu' color={white} width={18} height={18} />
                </CircleCard>
            </WrapperCircleCard>
            <WrapperCircleCard>
                <CircleCard>
                    <Icon type='Menu' color={white} width={18} height={18} />
                </CircleCard>
            </WrapperCircleCard>
            <WrapperCircleCard>
                <CircleCard>
                    <Icon type='Menu' color={white} width={18} height={18} />
                </CircleCard>
            </WrapperCircleCard>
        </CardLinearGradient>
    </Container>
    );
}

export default Menu;