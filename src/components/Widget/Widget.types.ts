import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IWidgetProps {
  iconProp: IconProp,
  title: string,
  value: string,
  onClick: () => void;
}