import React, {Fragment} from 'react';

const Jsx = () => {
    
    const temperatura = 21;

    return (
        <Fragment>
            <h2>Frio o calor</h2>
            <h4>
                {
                    temperatura > 20 ? 'calor' : 'Frio'
                }
            </h4>
        </Fragment> 
     );
}
 
export default Jsx;