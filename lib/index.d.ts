import Button from "./Button";
import TooltipButton from "./TooltipButton";
export { Button, TooltipButton };
declare const _default: {
    Button: () => JSX.Element;
    TooltipButton: {
        (props: {
            [x: string]: any;
            children: any;
            tip: any;
            placement: any;
        }): JSX.Element;
        propTypes: {
            tip: import("prop-types").Validator<string>;
            placement: import("prop-types").Validator<string>;
        };
        defaultProps: {
            placement: string;
        };
    };
};
export default _default;
