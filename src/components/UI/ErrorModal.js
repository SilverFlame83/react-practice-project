import {React} from 'react';

import styles from './ErrorModal.module.css';
import Card from './Card'
import Button from './Button';

const ErrorModal=props=>{
return <Card>
    <header className={styles.modal}>
        <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
        <p>{props.message}</p>
    </div>
    <footer className={styles.action}>
        <Button>Okay</Button>
    </footer>
</Card>
}

export default ErrorModal;