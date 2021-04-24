import React from 'react';
import {withWidth, Typography, Hidden, Button} from '@material-ui/core'

function Oculto(props) {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho: {props.width}
            </Typography>

            <Hidden xsDown>
                <Button variant="contained" color="primary">
                  xs
                </Button>
            </Hidden>
        </div>
    );
}

export default withWidth()(Oculto);