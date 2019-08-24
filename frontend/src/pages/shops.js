import React, { useState, useEffect } from 'react';

import { Row, Typography } from 'antd';
import ShopCard from '../components/shopCard';

import { useHttp } from '../hooks/usehttp';

function Shops(props){
    
    const [shops, setShops] = useHttp(props.type, [props.type]);

    const deleteShop = (id) => {
        setShops(shops.filter(shop => shop._id !== id));
    };

    const { Title } = Typography;

    const title = props.type == 'nearby' ? 'Nearby Shops sorted by Distance' : 'Preferred Shops'

    const listShops = shops.map(shop => <ShopCard delete={deleteShop} key={shop._id} id={shop._id} img={shop.img} name={shop.name} nearby={props.type == 'nearby' ? true : false}/>);

    return (<div>
                <Title level={2}>
                    {title}
                </Title>
                <Row gutter={16}>
                    {listShops}
                </Row>
            </div>);

}

export default Shops;