import React from 'react';
import Demo from './Demo';

class Page extends React.Component {
    render() {
        return (
            <Demo name="xxx" code={12} haha="x" ref={ref => {
                ref.count()
            }}>xxxx</Demo>
        )
    }
}

export default Page;