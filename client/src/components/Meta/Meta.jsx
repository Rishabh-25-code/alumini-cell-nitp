import { useEffect } from "react"

const Meta = ({ name }) => {
    useEffect(() => {
        document.title = name || "Alumni - NIT Patna"
    })

    return null;
}

export default Meta