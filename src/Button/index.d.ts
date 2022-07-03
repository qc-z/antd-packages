import { MyButtonProps } from "./button";

declare const AyButton: React.ForwardRefExoticComponent<
  MyButtonProps & React.RefAttributes<HTMLDivElement>
>;

export default AyButton;
