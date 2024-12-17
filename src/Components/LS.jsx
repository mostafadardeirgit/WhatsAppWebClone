import { useContext } from "react"
import Chats from "./LS/Chats";
import Status from "./LS/Status";
import Channels from "./LS/Channels";
import Communities from "./LS/Communities";
import Settings from "./LS/Settings";
import Profile from "./LS/Profile";
import { LSContentContext } from "../utils/context";

export default function LS() {
    const { lsContent } = useContext(LSContentContext);

    switch (lsContent) {
        case 'Chats':
            return (<Chats />)
        case 'Status':
            return (<Status />)
        case 'Channels':
            return (<Channels />)
        case 'Communities':
            return (<Communities />)
        case 'Settings':
            return (<Settings />)
        case 'Profile':
            return (<Profile />)
    }
}
