import React, { ReactNode, Ref } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CustomInput = withStyles({
  root: {
    width: '100%',
    margin: '8px 0',
    '& .MuiInputBase-input': {
      color: '#fff',
    },
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiFormLabel-root': {
      color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    },
    // '& .MuiInputLabel-shrink': {
    //   transform: 'translate(19px, -6px) scale(1)',
    // },
  },
})(TextField);

type Props = {
  id?: string;
  rows?: number;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: 'small' | undefined;
  InputLabelProps?: object;
  InputProps?: {
    ref?: Ref<any>;
    className?: string;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
  };
  inputProps?: object;
  label?: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
  multiline?: boolean;
  style?: any;
  onChange?: any;
  value?: any;
  variant?: any;
  name?: string;
  required?: boolean;
};

const Input: React.FC<Props> = (props) => {
  return <CustomInput {...props} />;
};

export default Input;
