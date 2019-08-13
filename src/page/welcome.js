import React, {useState, useEffect} from 'react';
import { selectList } from '../api/common'

function Welcome () {
    const [listData, setListData] = useState([]);
    
    useEffect(() => {
        const init = async () => {
            let res = await selectList()
            if (res.data.status === 200) {
                setListData(res.data.data)
            }
        }
        init()
    }, []);

    return (
        <div>
            <ul>
                {
                    listData.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Welcome;