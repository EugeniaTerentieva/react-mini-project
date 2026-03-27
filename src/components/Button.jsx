// import { useState } from 'react';

export function Button( {name, ...props} ) {

    return <button {...props}>{name || props.children}</button>;
}