import React, { PropsWithChildren, ReactNode } from 'react'

interface Props {
    name: string
    code: number
}
class Demo extends React.Component<Props> {
    count() {
        alert(1)
    }
    render() {
        return <div>
            xx
        </div>
    }
}

function Hoc<P, T>(Component: React.ComponentType<P>) {
    class Com extends React.Component<P & {_ref: any, haha?: any}> {
        render() {
            const { _ref, haha } = this.props;
            return <Component ref={_ref} {...this.props}>xx</Component>
        }
    }
    return React.forwardRef<T, PropsWithChildren<P & {haha?: string}>>((props, ref) => {
        return <Com {...props} _ref={ref} />
    })
}

const Demo2 = Hoc<Props, Demo>(Demo);

const Demo1 = React.forwardRef<Demo, PropsWithChildren<Props>>((props, ref) => {
    return <Demo {...props} ref={ref} />
})

// const Com: React.FC<{}> = () => null

// type A = Exclude<'a' | 'b', 'a'>;

export default Demo2;