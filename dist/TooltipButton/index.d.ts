import PropTypes from 'prop-types';
declare const TooltipButton: {
    (props: {
        [x: string]: any;
        children: any;
        tip: any;
        placement: any;
    }): JSX.Element;
    propTypes: {
        tip: PropTypes.Validator<string>;
        placement: PropTypes.Validator<string>;
    };
    defaultProps: {
        placement: string;
    };
};
export default TooltipButton;
