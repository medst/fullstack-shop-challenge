import React, {useState} from 'react';

import { Col, Card, Button } from 'antd';

function ShopCard(props){

    const [loading, setloading] = useState(false);

    const url = '/api/shops/';

    const mutate = (id, endpoint) => {
        setloading(true);
        fetch(url+endpoint, {
            credentials: 'include',
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({"id": id})
        }).then(response => {
            setloading(false);
            if (!response.ok)
              throw new Error('Failed to fetch.')
            return response.json();
        }).then(data => {
            setloading(false);
            if(data.status === 'ok')
                props.delete(id);
            if(data.status === 'error')
                throw new Error(data.data);
        }).catch(err => {
            setloading(false);
            console.log(err);
        });
    };

    return  <Col lg={6} xs={24} sm={8} md={8}>
                <Card title={props.name} bordered={false} cover={<img alt={props.name} src={'/images/'+props.img} />}>
                    {props.nearby &&<div>
                        <Button type="danger" loading={loading} onClick={() => mutate(props.id, 'dislike')}>
                            dislike
                        </Button>
                        <Button type="primary" loading={loading} style={{float: 'right'}} onClick={() => mutate(props.id, 'like')}>
                            like
                        </Button></div>}
                    {!props.nearby && <Button loading={loading} type="danger" onClick={() => mutate(props.id, 'remove')}>
                        remove
                    </Button>}
                </Card>
            </Col>;


}

export default ShopCard;