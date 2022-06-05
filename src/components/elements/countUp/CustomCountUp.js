import React from "react";
import CountUp from "react-countup";
import PropTypes from 'prop-types';
import styles from './CustomCountUp.module.css';

const CustomCountUp = (props) => {

    return (
        <CountUp start={0} end={props.number && props.number} enableScrollSpy >
            {({ countUpRef }) => (
                <div>
                    <span className={styles.number} ref={countUpRef} />
                </div>
            )}
        </CountUp>
    )
};

CustomCountUp.propTypes = {
    number: PropTypes.number.isRequired
};

export default CustomCountUp;
