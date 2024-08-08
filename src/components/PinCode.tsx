import React, { useEffect, useRef } from 'react';
import PinInput from 'react-pin-input';

interface PinCodeProps {
  clear?: boolean;
  value: string;
  onChange: any;
  onComplete?: any;
}

const PinCode: React.FC<PinCodeProps> = (props) => {
  const pinRef = useRef<any>(null);

  useEffect(() => {
    if (props.clear && pinRef.current) {
      pinRef.current.clear();
    }
  }, [props.clear]);

  return (
    <PinInput
      ref={pinRef}
      length={6}
      initialValue={props.value}
      onChange={(value) => props.onChange(value)}
      type="numeric"
      inputMode="numeric"
      style={{
        padding: '0 18px',
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: '5px'
      }}
      inputStyle={{
        borderColor: 'inherit',
        borderWidth: '2px',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        color: 'inherit'
      }}
      inputFocusStyle={{ borderColor: '#2f65b9' }}
      onComplete={props.onComplete}
      autoSelect={true}
      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
    />
  );
};

export default PinCode;
