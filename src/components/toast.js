import { DefaultToast } from 'react-toast-notifications';

const MyCustomToast = ({ children, ...props }) => {
    let newProps = {
        ...props,
        placement: 'top-center',
    };
    
    return (
        <DefaultToast {...newProps}>{children}</DefaultToast>
    )
};

export default MyCustomToast;
