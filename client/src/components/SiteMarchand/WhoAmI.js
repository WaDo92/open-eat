import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import roles from '../../configs/roles';
import salesLogo from '../../assets/sales.svg'
import { navigate } from '../../routes';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    container: {
        height: '95vh',
        backgroundImage: `url(${salesLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
  }));


function WhoAmI() {

    const classes = useStyles();

    return (
        <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.container}
        >
        
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    onClick={() => {
                        navigate.push("CustomerPage")
                    }}
                >
                    {roles.CUSTOMER}
                </Button>

                <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    onClick={() => {
                        navigate.push("OrdersPage")
                    }}
                >
                    {roles.TRADER}
                </Button>
                            
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    onClick={() => {
                        navigate.push("DashboardPage")
                    }}
                >
                    {roles.ADMINISTRATOR}
                </Button>            
        </Grid>
    )
}

export default WhoAmI
