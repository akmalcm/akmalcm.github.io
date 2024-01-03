import * as React from "react"

const age = new Date().getFullYear() - 1998;

function Age() {
    return (
        <span>{age}</span>
    )
}

export default Age
