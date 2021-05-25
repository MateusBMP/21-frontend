import { useHistory } from 'react-router-dom';

export const WithHistory = Component => {
    return function WrappedComponent(props) {
        const history = useHistory();
        return <Component {...props} {...history} />;
    }
};
