import React, { useEffect, useState} from 'react';
import axios from 'axios';

import MicromaterialUrlItem from './MicromaterialUrlItem';

const REQUEST_URL = 'https://api.github.com/search/issues?q=label:micromaterial&sort=created&order=asc'

const MicromaterialsList = () => {

    const [PRs, setPRs] = useState([]);

    // grab this on page load
    const fetchData = async () => {
      const result = await axios(
        REQUEST_URL
      );
      setPRs(result.data.items);
    };

    // get the PRs with the right label on page load
    useEffect(() => {
      fetchData();
    }, []);

    return (
        <ul className="pr-list">
          {PRs.length === 0 && <div className="no-data">no data yet...</div>}
          {PRs.map(item => (
            <MicromaterialUrlItem key={item.html_url} labels={item.labels} url={item.html_url.split('issues')[0]} />
          ))}
        </ul>
    );
}

export default MicromaterialsList;
