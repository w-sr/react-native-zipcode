import styled from 'styled-components/native';

import { Button } from '../../components/atoms';
import { SceneContainer } from '../../components/organisms';
import theme from '../../theme';

export const StyledWrapper = styled(SceneContainer)`
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

export const StyledTitle = styled.Text`
  font-size: ${theme.sizes.base.pixels * 13.5}px;
  font-weight: ${theme.fontWeights.bold.numerical};

  letter-spacing: ${theme.sizes.base.pixels * 1.55}px;
  line-height: ${theme.sizes.base.pixels * 20}px;

  margin-top: ${theme.sizes.base.pixels * 13}px;
`;

export const StyledMainWrapper = styled.View`
  margin: ${theme.sizes.base.pixels * 7.5}px;
`;

export const StyledFormWrapper = styled.KeyboardAvoidingView`
  margin-top: ${theme.sizes.base.pixels * 25}px;
`;

export const StyledButton = styled(Button)`
  margin-top: ${theme.sizes.base.pixels * 8.5}px;
`;

export const StyledItemWrapper = styled.View`
  flex-direction: row;
`;

export const StyledItemTitle = styled.Text`
  font-size: ${theme.sizes.base.pixels * 8.5}px;
  font-weight: ${theme.fontWeights.bold.numerical};
  width: ${theme.sizes.base.pixels * 90}px;
  margin-right: ${theme.sizes.base.pixels * 10}px;
  text-transform: capitalize;
`;

export const StyledItemValue = styled.Text`
  font-size: ${theme.sizes.base.pixels * 8.5}px;
`;

export const StyledSectionText = styled.Text`
  font-size: ${theme.sizes.base.pixels * 8.5}px;
`;

export const StyledFlatList = styled.FlatList`
  margin-top: ${theme.sizes.base.pixels * 10}px;
`;

export const StyledSectionList = styled.SectionList`
  margin-top: ${theme.sizes.base.pixels * 8.5}px;
`;
