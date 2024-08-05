import InputText from './inputText';

export interface InputTextProps {
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
  type?: 'text' | 'number';
  error?: boolean;
  errorMsg?: string;
  icon?: React.ReactNode
}

export default InputText;
