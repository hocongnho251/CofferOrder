import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import * as _ from 'lodash';

// Validation syntax
const required = (value: any) => (value || typeof value === 'number')
  ? undefined
  : '必須項目です。';
const requiredTrim = (value: string | undefined) =>
  value && _.startsWith(value, ' ') || _.endsWith(value, ' ')
    ? 0
    : 1;
const maxLength = (max: number) => (value: string | any[]) =>
  value && value.length > max
    ? `${max} 文字以内にしてください。`
    : undefined;
const maxLength180 = maxLength(180);
const maxLength15 = maxLength(15);
const maxLength10 = maxLength(10);
const minLength = (min: number) => (value: string | any[]) =>
  value && value.length < min
    ? `${min} 文字以上にしてください。`
    : undefined;
const minLength2 = minLength(2);
const isNumber = (value: any) =>
  value && isNaN(Number(value))
    ? '数字のみを入力してください。'
    : undefined;
const minValue = (min: number) => (value: number) =>
  value && value < min
    ? `${min} 以上`
    : undefined;
const email = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'メールアドレスが無効です。'
    : undefined;
const alphaNumeric = (value: string) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? '文字または数字のみ'
    : undefined;
const phoneNumber = (value: string) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? '電話番号が無効です。10桁である必要があります。'
    : undefined;
const startAlphabet = (value: string) =>
  value && /^[A-Z]$/i.test(value.substring(0, 1))
    ? 1
    : 0;
const haveUppercase = (value: string) =>
  value && /([A-Z])/g.test(value)
    ? 1
    : 0;
const haveLowercase = (value: string) =>
  value && /([a-z])/g.test(value)
    ? 1
    : 0;
const confirmPassword = (value: any, valueConfirm: any) =>
  (value && valueConfirm) && value === valueConfirm
    ? 1
    : 0;

export const Validation = {
  required,
  requiredTrim,
  maxLength180,
  maxLength15,
  maxLength10,
  minLength2,
  isNumber,
  minValue,
  email,
  alphaNumeric,
  phoneNumber,
  startAlphabet,
  haveUppercase,
  haveLowercase,
  confirmPassword
};

// Field for redux form
export function renderField(props: { [x: string]: any; input: any; meta: any; }) {
  const { input, meta, ...inputProps } = props;
  return (
    <View style={inputProps.styleContainer}>
      <TextInput
        keyboardType={inputProps.keyboardType}
        multiline={inputProps.multiline}
        placeholder={inputProps.placeholder}
        style={inputProps.styleInput}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={props.valueInput}
      />
    </View>
  );
};

renderField.propTypes = {
  input: PropTypes.shape({
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    error: PropTypes.string,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired
  }).isRequired
};
