import React from 'react'
import Counter from '../components/CounterExample/Counter'
import PrivateComponent from '../components/Auth/PrivateComponent'
import { Typography } from '@material-ui/core'

function HomePage() {
    return (
        <div>
            HomePage
            <Typography>Charles</Typography>
            <PrivateComponent>
                <p>
                    Content for user beeing connected, dont care about his type
                </p>
            </PrivateComponent>
            <PrivateComponent type='saler'>
                <p>
                    Here is content for Saler only
                </p>
            </PrivateComponent>
            <PrivateComponent type='admin'>
                <p>
                    Here is content for Admin only
                </p>
            </PrivateComponent>
            <Counter />
        </div>
    );
}

export default HomePage
