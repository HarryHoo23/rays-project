import React from 'react';
import CustomCountUp from '../elements/countUp/CustomCountUp';
import { Row, Col } from 'react-bootstrap';
import { number_content } from '../../data/content';
import styles from './NumberRow.module.css';

const NumberRow = () => {
    return (
        <Row>
            {number_content.map((number => {
                return (
                    <Col md={3} sm={6} key={number.count}>
                        <div className={styles.count}>
                            <span className="d-flex">
                                <CustomCountUp number={number.count} />{" "}{number.unit}
                            </span>
                            <h5 className={styles['number-title']}>{number.title}</h5>
                        </div>
                    </Col>
                )
            }))}
        </Row>
    )
}

export default NumberRow;