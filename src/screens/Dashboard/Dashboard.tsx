import React, { FC, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from 'react-native';
import Toast from 'react-native-toast-message';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { DarkIndicator, Input } from '../../components/atoms';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

import {
  StyledButton,
  StyledFlatList,
  StyledFormWrapper,
  StyledItemTitle,
  StyledItemValue,
  StyledItemWrapper,
  StyledMainWrapper,
  StyledSectionList,
  StyledSectionText,
  StyledTitle,
  StyledWrapper,
} from './styles';
import type { FormValues } from './types';

const Item: FC<{ title: string; value: string }> = ({ title, value }) => {
  return (
    <StyledItemWrapper>
      <StyledItemTitle>{title}</StyledItemTitle>
      <StyledItemValue>{value}</StyledItemValue>
    </StyledItemWrapper>
  );
};

const Dashboard: FC = () => {
  const ref = useRef<TextInput>();
  const actions = useActions();
  const [country, setCountry] = useState<Record<string, string>[]>([]);
  const [placeList, setPlaceList] = useState<any[]>([]);
  const [submitted, setIsSubmitted] = useState(false);
  const { address, isLoading } = useTypedSelector((state) => state);

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(
      yup.object().shape({
        code: yup.string().min(1).required(),
      }),
    ),
  });

  const isValid = !Object.keys(errors).length;

  const onSubmit = ({ code }: FormValues): void => {
    setIsSubmitted(true);
    actions.getZipcodeApi({ code });
  };

  useEffect(() => {
    trigger();
  }, [trigger]);

  useEffect(() => {
    if (!submitted) return;
    if (address && Object.keys(address).length > 0) {
      const c = Object.keys(address)
        .filter((x) => x !== 'places')
        .map((key) => ({ key, value: address[key] }));
      setCountry(c);

      const { places } = address;
      if (places && places.length > 0) {
        const p = places.map((place, index) => ({
          title: `Place ${index + 1}`,
          data: Object.keys(place).map((key) => ({ key, value: place[key] })),
        }));
        setPlaceList(p);
      }
    } else {
      setCountry([]);
      setPlaceList([]);
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Zip code invalid or not found',
      });
    }
  }, [submitted, address]);

  return (
    <StyledWrapper>
      <StyledMainWrapper>
        <StyledTitle>{'Enter Your Zipcode'}</StyledTitle>

        <StyledFormWrapper>
          <Input
            name="code"
            control={control}
            inputRef={ref}
            placeholder={'Zipcode'}
            onSubmitEditing={handleSubmit(onSubmit)}
          />

          <StyledButton
            title={'Submit'}
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid}
          >
            {'Get information'}
          </StyledButton>
        </StyledFormWrapper>

        {Object.entries(country).length > 0 && (
          <StyledFlatList
            data={country}
            renderItem={({ item }) => (
              <Item title={item.key} value={item.value} />
            )}
            keyExtractor={(item) => item.key}
            scrollEnabled={false}
          />
        )}

        {placeList.length > 0 && (
          <StyledSectionList
            sections={placeList}
            renderItem={({ item }) => (
              <Item title={item.key} value={item.value} />
            )}
            renderSectionHeader={({ section }) => (
              <StyledSectionText>{section.title}</StyledSectionText>
            )}
            keyExtractor={(item) => item.key}
            scrollEnabled={false}
          />
        )}
      </StyledMainWrapper>

      <DarkIndicator loading={isLoading} />
    </StyledWrapper>
  );
};

export default Dashboard;
