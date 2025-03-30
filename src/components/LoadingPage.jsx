import React from 'react'
import { Spin } from 'antd'
export default function LoadingPage() {
return (
    <div className='loading' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin tip={`Loading...`} size="large"/>
    </div>
)
}
