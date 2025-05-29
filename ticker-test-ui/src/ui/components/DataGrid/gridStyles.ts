import { styled } from '@mui/material/styles';

export const Table = styled('div')(({ theme }) => ({
  border: "1px solid" + theme.border
}));

export const GridRows = styled('div')``;

export const Row = styled('div')`
  height: 25px;
  line-height: 25px;
  display: flex;
`;

export const NoData = styled(Row)`
  width: 100%;
  justify-content: center;
`;

export const Header = styled(Row)(({ theme }) => ({
  backgroundColor: theme.panel.background
}));

export const Cell = styled('div')`
  width: 50%;
`;
