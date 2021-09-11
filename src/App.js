import React, { Component } from 'react'
import { QqOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import 'antd/dist/antd.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <QqOutlined />
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
            </div>
        )
    }
}
