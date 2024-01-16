import React from 'react';

interface Props {
    name: string;
    age: number;
}

const Test = ( { name }: Props ) => {
    return (
        <div id='hi'>{ name }</div>
    );
};

export default Test;
