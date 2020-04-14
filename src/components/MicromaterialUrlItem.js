import React from 'react';
import CustomLabel from './CustomLabel';

const MicromaterialUrlItem = ({
    labels,
    url,
}) => {
    return (
        <li className="micromaterial-url">
            <a href={url}>{url}</a>
            <div className="label-box">
              {labels.map(({ name }) => {
              return name !== 'micromaterial' ? <CustomLabel key={name} label={name} /> : null
            })}

            </div>
        </li>
    )
}

export default MicromaterialUrlItem;