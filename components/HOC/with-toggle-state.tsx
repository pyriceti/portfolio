import React, { useEffect } from "react";

interface WithToggleStateProps {
  isOn: boolean;
  onStateChange: (newState: boolean) => void;
}

const withToggleState = <P extends object>(Component: React.ComponentType<P>): React.FC<P & WithToggleStateProps> =>
  ({ isOn, onStateChange, ...props }: WithToggleStateProps) => {

    useEffect(() => onStateChange(isOn), [isOn]);

    return <Component {...props as P} />;
  };

export default withToggleState;
