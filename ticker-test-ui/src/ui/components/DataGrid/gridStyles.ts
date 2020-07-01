import styled from 'styled-components';

export const Table = styled.div`
    border: ${props => 
        {return "1px solid" + props.theme.border}
    };
`;

export const GridRows = styled.div`
`;

export const Row = styled.div`
    height: 25px;
    line-height: 25px;
    display: flex;  
`;

export const NoData = styled(Row)`
    width: 100%;
    justify-content: center;
`;

export const Header = styled(Row)`
  background-color: ${props => props.theme.panel.background};
`;

export const Cell = styled.div`
    width: 50%
`;
