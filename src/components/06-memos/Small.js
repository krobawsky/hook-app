import React, { memo } from 'react';

export const Small = memo(({ value }) => {

    console.log('smallll');

    return (
        <small>
            { value }
        </small>
    )
});
