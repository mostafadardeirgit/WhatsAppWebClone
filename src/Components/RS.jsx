import { useContext } from "react"
import { RSContentContext } from "../utils/context"
import Welcome from "./RS/Welcome";
import Chat from "./RS/Chat";

export default function RS() {
    const { rsContent } = useContext(RSContentContext)
    switch (rsContent) {
        case 'Welcome':
            return (<Welcome />)
        case 'Chat':
            return (<Chat />)

    }

}
