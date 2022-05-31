import React from "react";
import CountUp from "react-countup";

const CustomCountUp = (props) => {

    return (
        <CountUp start={0} end={props.number && props.number} enableScrollSpy >
            {({ countUpRef }) => (
                <div>
                    <span ref={countUpRef} />
                </div>
            )}
        </CountUp>
    )
};

export default CustomCountUp;
