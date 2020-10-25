import React from 'react';

const MicromaterialUrlItem = ({
    description,
    url,
}) => {
    return (
        <li className="micromaterial-url">
            <a href={url}>{url}</a>
            <div>{description}</div>
        </li>
    )
}

export default MicromaterialUrlItem;