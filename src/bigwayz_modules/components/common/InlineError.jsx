import React from "react";

// this components used for show inline errors
const InlineError = (props) => (
    <>
        <div className = "cm_alert_danger">{props.message}</div>
    </>
)

export default InlineError

