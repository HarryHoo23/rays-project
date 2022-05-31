import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './TeamMember.module.css';

const TeamMember = (props) => {
    return (
        <Card className={styles['team-card']}>
            <Card.Img variant='top' src={props.member.img} className={styles['team-image']} />
            <Card.Body className="px-4">
                <Card.Title className="mt-3">
                    <h5 className="title title-black">
                        {props.member.title}
                    </h5>
                </Card.Title>
                <Card.Text className={styles.description}>                    
                    {props.member.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default TeamMember