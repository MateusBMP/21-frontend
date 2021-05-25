import { DefaultToast, useToasts } from 'react-toast-notifications';

const MyCustomToast = ({ children, ...props }) => {
    let newProps = {
        ...props,
        placement: 'top-center',
    };
    
    return (
        <DefaultToast {...newProps}>{children}</DefaultToast>
    )
};

export const WithToasts = Component => {
    return function WrappedComponent(props) {
        const toasts = useToasts();
        return <Component {...props} {...toasts} />;
    }
};

export default MyCustomToast;
