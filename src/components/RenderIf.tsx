import React, { ReactNode } from 'react';

type Props = {
  ifTrue: boolean;
  children: ReactNode;
};

const RenderIf: React.FC<Props> = ({ ifTrue, children }) => {
  return ifTrue ? <>{children}</> : null;
};

export default RenderIf;
