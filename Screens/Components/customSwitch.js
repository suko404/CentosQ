import * as React from "react";
import { Switch } from "react-native-paper";

const CSwitch = (props) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <Switch
      value={isSwitchOn}
      onValueChange={onToggleSwitch}
      style={props.style}
    />
  );
};

export default CSwitch;
