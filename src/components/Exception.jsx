import React from 'react';

export function Exception ({ code = 0, msg = "Ocurrió un error" }) {

    return <h3 className='error-msg'>{msg}</h3>

}