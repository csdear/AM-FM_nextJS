import styles from '../styles/alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
    console.log('alert cpt children', children)
    console.log('alert cpt prop type received : ', type)
    console.log('alert cpt children length', children.length)
    console.log('alert cpt children isArray', Array.isArray(children))
    console.log('alert cpt first child', children[0])
    console.log('alert cpt first child children.props', children[0].props)
    console.log('alert cpt first child children.type', children[0].type)
    return (
    <div
    className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
    })}
    >
    {children}
    </div>
)
}