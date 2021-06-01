import * as React from 'react';
import {Link} from 'react-router-dom';
import {LocationDescriptor} from 'history';
import Button, {ButtonProps} from '@material-ui/core/Button';

interface ButtonLinkProps extends ButtonProps {
    to: LocationDescriptor
}

function ButtonLink(props: ButtonLinkProps) {
    return (
        <Button {...props} component={({innerRef, ...linkProps}) => <Link {...linkProps} to={props.to}/>}>
            {props.children}
        </Button>
    )
}

export default ButtonLink;
