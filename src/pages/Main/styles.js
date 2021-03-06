import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  border-color: #eee;
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  padding: 0 15px;
  background: #eee;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  padding: 0 12px;
  margin-left: 10px;
  border-radius: 4px;
  background: #7159c1;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalSrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 14px;
  margin-top: 4px;
  font-weight: bold;
  text-align: center;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  background: #eee;
  border-radius: 32px;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #999;
  font-size: 13px;
  margin-top: 5px;
  text-align: center;
  line-height: 18px;
`;

export const ProfileButton = styled(RectButton)`
  height: 36px;
  margin-top: 10px;
  align-self: stretch;
  background: #7159c1;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
