import { useContext, useState } from "react"
import { RSContentContext } from "../../utils/context"

export default function Chats() {
    const [searchInput, setSearchInput] = useState('')
    const [isSearchInputFocused, setSearchInputFocused] = useState(false)
    const [chatFilter, setChatFilter] = useState('all')
    const { rsContent, setRSContent } = useContext(RSContentContext)
    const [currentChat, setCurrentChat] = useState(rsContent)

    return (
        <main className="w-96 h-dvh flex flex-col bg-[#111b21]">

            <section className="min-h-[59px] pe-5 ps-[25px] flex items-center">
                <h2 className="me-auto font-bold text-[22px] text-[#e9edef]">Chats</h2>
                <span className="text-[#aebac1] p-2"><NewChat /></span>
                <span className="text-[#aebac1] p-2"><Menu /></span>
            </section>

            <section className="min-h-[49px] px-3 py-[7px]">
                <div className="h-full flex justify-center items-center rounded-lg bg-[#202c33]">
                    <span className={`ps-3 pe-7 ${isSearchInputFocused ? 'text-[#00a884]' : 'text-[#8696a0]'} font-light`}
                        onClick={() => { isSearchInputFocused && setSearchInputFocused(false) }}>
                        {isSearchInputFocused ? <Back /> : <Search />}
                    </span>
                    <input className="grow bg-[#202c33] pb-px ps-px outline-none text-[#d1d7db] text-[15px] placeholder:text-[#8696a0]"
                        value={searchInput} onClick={() => { setSearchInputFocused(true) }} onChange={(e) => { setSearchInput(e.target.value) }} type="text" placeholder='Search' />
                    {searchInput.trim() !== '' && <span className="text-[#8696a0] me-2" onClick={() => { setSearchInput('') }}><ClearSearch /></span>}
                </div>
            </section>

            <section className="min-h-[41px] pt-[2px] pb-[7px] px-4 flex items-center gap-2">
                {chatFiltersList.map((filter) =>
                    <div key={filter.title} onClick={() => { setChatFilter(filter.title) }}
                        className={`px-3 py-[5px] rounded-full cursor-pointer text-[15px] select-none capitalize ${chatFilter === filter.title ? 'bg-[#0a332c] text-[#00a884]' : 'bg-[#202c33] text-[#8696a0] hover:bg-[#26353d]'}`}>
                        {filter.title}
                    </div>)}
            </section>

            <section className="overflow-y-scroll" style={{ scrollbarWidth: 'none' }}>
                {ChatList.map(chat =>
                    <div key={chat.name} onClick={() => { setCurrentChat(chat.name); setRSContent('Chat') }}
                        className={`group flex select-none ${chat.name === currentChat ? 'bg-[#2a3942]' : 'hover:bg-[#202c33]'}`}>
                        {(chat.type === 'group' && !chat.image) ?
                            <div className="mx-[13px] my-[10px] text-[#cfd4d6] rounded-full">
                                <DefaultGroupPhoto />
                            </div>
                            : <img className="size-[49px] mx-[13px] my-[10px] rounded-full" src={chat.image} alt={chat.name} />
                        }
                        <div className="h-[72px] w-full ms-px me-4 flex flex-col justify-center border-b border-[#1f2a30]">
                            <div className="flex justify-between items-center ">
                                <h3 className={`capitalize text-[18px] ${chat.isRead ? 'text-[#e9edef]' : 'text-[#e9edef] font-bold'}`}>{chat.name}</h3>
                                <p className={`text-[#8696a0] text-[12px] ${!chat.isRead ? 'text-[#00a884]' : 'text-[#7996a0]'} `}>{chat.lastMessageTime}</p>
                            </div>
                            <div className="h-5 flex items-center">
                                {chat.isSeen && <span className="text-[#53bbe8] me-1"><Seen /></span>}
                                <p className={`me-auto text-sm line-clamp-1 ${chat.isRead ? 'text-[#8696a0]' : 'text-[#d1d7db]'}`}>{chat.lastMessage}</p>
                                {chat.isMuted && <span className="m-[2px] text-[#8696a0]"><Muted /></span>}
                                {chat.isPinned && <span className="m-[2px] text-[#8d9599]"><Pinned /></span>}
                                {chat.isMentioned && <span className="m-[2px] text-[#00a884]"><Mentioned /></span>}
                                {!chat.isRead && <div className="m-[2px] p-1.5 w-5 h-5 rounded-full bg-[#00a884] flex justify-center items-center text-xs">{chat.messageCounter == 0 ? '' : chat.messageCounter}</div>}
                                <span className='hidden group-hover:block rotate-90 m-[2px] text-[#83929d]'><More /></span>
                            </div>
                        </div>
                    </div>)
                }
            </section>
        </main>
    )
}

const ChatList = [
    {
        name: 'M.M.D',
        lastMessageTime: '19:49',
        isSeen: false,
        lastMessage: 'Mahmoud: @Mostafa Dardeir',
        isMuted: true,
        isPinned: true,
        isRead: false,
        messageCounter: 1,
        isMentioned: true,
        type: 'group'
    },
    {
        image: '/file1.png',
        name: 'المدز',
        lastMessageTime: '10/23/2024',
        isSeen: false,
        lastMessage: 'You were added',
        isMuted: true,
        isPinned: true,
        isRead: true,
        messageCounter: 0,
        isMentioned: false,
        type: 'group'
    },
    {
        image: '/file.png',
        name: 'Mostafa (You)',
        lastMessageTime: '17:45',
        isSeen: true,
        lastMessage: 'a',
        isMuted: false,
        isPinned: true,
        isRead: false,
        messageCounter: 0,
        isMentioned: false,
        type: 'individual'
    },
    {
        image: '/file.png',
        name: 'ahmed',
        lastMessageTime: '10:30',
        isSeen: false,
        lastMessage: 'Hey there!',
        isMuted: false,
        isPinned: false,
        isRead: true,
        messageCounter: 0,
        isMentioned: false,
        type: 'individual'
    },
    {
        image: '/file.png',
        name: 'fatima',
        lastMessageTime: '10:30',
        isSeen: false,
        lastMessage: 'Hey there!',
        isMuted: false,
        isPinned: false,
        isRead: true,
        messageCounter: 0,
        isMentioned: false,
        type: 'individual'
    },
    {
        image: '/file.png',
        name: 'mohamed',
        lastMessageTime: '10:30',
        isSeen: false,
        lastMessage: 'Hey there!',
        isMuted: false,
        isPinned: false,
        isRead: true,
        messageCounter: 0,
        isMentioned: false,
        type: 'individual'
    },
    {
        image: '/file.png',
        name: 'aza',
        lastMessageTime: '10:30',
        isSeen: false,
        lastMessage: 'Hey there!',
        isMuted: false,
        isPinned: false,
        isRead: true,
        messageCounter: 0,
        isMentioned: false,
        type: 'individual'
    },
    {
        image: '/file.png',
        name: 'ali',
        lastMessageTime: '10:30',
        isSeen: false,
        lastMessage: 'Hey there!',
        isMuted: false,
        isPinned: false,
        isRead: true,
        messageCounter: 0,
        isMentioned: false,
        type: 'individual'
    },
    {
        image: '/file.png',
        name: 'salah',
        lastMessageTime: '10:30',
        isSeen: false,
        lastMessage: 'Hey there!',
        isMuted: false,
        isPinned: false,
        isRead: true,
        messageCounter: 0,
        isMentioned: false,
        type: 'individual'
    },
    {
        image: '/file.png',
        name: 'nabawy',
        lastMessageTime: '10:30',
        isSeen: false,
        lastMessage: 'Hey there!',
        isMuted: false,
        isPinned: false,
        isRead: true,
        messageCounter: 0,
        isMentioned: false,
        type: 'individual'
    },
    {
        image: '/file.png',
        name: 'sayed',
        lastMessageTime: '10:30',
        isSeen: false,
        lastMessage: 'Hey there!',
        isMuted: false,
        isPinned: false,
        isRead: true,
        messageCounter: 0,
        isMentioned: false,
        type: 'individual'
    },
    {
        image: '/file.png',
        name: 'saleh',
        lastMessageTime: '10:30',
        isSeen: false,
        lastMessage: 'Hey there!',
        isMuted: false,
        isPinned: false,
        isRead: true,
        messageCounter: 0,
        isMentioned: false,
        type: 'individual'
    },
]

const chatFiltersList = [
    { title: 'all' },
    { title: 'unread' },
    { title: 'favorites' },
    { title: 'groups' },
]

const NewChat = () => (
    <span aria-hidden="true" data-icon="new-chat-outline">
        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="currentColor"></path></svg>
    </span>
)

const Menu = () => (
    <span aria-hidden="true" data-icon="menu">
        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
    </span>
)

const Search = () => (
    <span aria-hidden="true" data-icon="search">
        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>search</title><path fill="currentColor" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
    </span>
)

const ClearSearch = () => (
    <span aria-hidden="true" data-icon="x-alt">
        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>x-alt</title><path fill="currentColor" d="M17.25,7.8L16.2,6.75l-4.2,4.2l-4.2-4.2L6.75,7.8l4.2,4.2l-4.2,4.2l1.05,1.05l4.2-4.2l4.2,4.2l1.05-1.05 l-4.2-4.2L17.25,7.8z"></path></svg>
    </span>
)

const Back = () => (
    <span aria-hidden="true" data-icon="back">
        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>back</title><path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
    </span>
)

const Seen = () => (
    <span aria-hidden="true" data-icon="status-dblcheck">
        <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><title>status-dblcheck</title><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
    </span>
)

const Muted = () => (
    <span aria-hidden="true" data-icon="muted">
        <svg viewBox="0 0 16 18" height="18" width="16" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 16 18"><title>muted</title><path fill="currentColor" d="M11.52,9.206c0-1.4-0.778-2.567-1.944-3.111v1.711L11.52,9.75 C11.52,9.517,11.52,9.362,11.52,9.206z M13.465,9.206c0,0.7-0.156,1.4-0.389,2.022l1.167,1.167c0.544-0.933,0.778-2.1,0.778-3.267 c0-3.344-2.333-6.144-5.444-6.844v1.633C11.832,4.695,13.465,6.717,13.465,9.206z M2.032,2.206L1.02,3.217l3.656,3.656H1.02v4.667 h3.111l3.889,3.889v-5.211l3.344,3.344c-0.544,0.389-1.089,0.7-1.789,0.933v1.633c1.089-0.233,2.022-0.7,2.878-1.4l1.556,1.556 l1.011-1.011l-7-7L2.032,2.206z M8.02,2.984L6.387,4.617L8.02,6.25V2.984z"></path></svg>
    </span>
)

const Pinned = () => (
    <span aria-hidden="true" data-icon="pinned2">
        <svg height="15" width="13" preserveAspectRatio="xMidYMid meet"><title>pinned2</title><path fill="currentColor" d="M12.074 4.21 8.7 8.232l.116 4.233a.4.4 0 0 1-.657.318L.43 6.297a.4.4 0 0 1 .199-.702l4.196-.622L8.196.957a.63.63 0 0 1 .887-.078l2.914 2.445a.63.63 0 0 1 .077.887ZM1.294 14.229a.713.713 0 0 1-1.09-.915l2.674-3.64 1.536 1.288-3.12 3.267Z"></path></svg>
    </span>
)

const More = () => (
    <span aria-hidden="true" data-icon="chevron">
        <svg viewBox="0 0 30 30" height="24" preserveAspectRatio="xMidYMid meet" x="0px" y="0px"><title>chevron</title><path fill="currentColor" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path></svg>
    </span>
)

const Mentioned = () => (
    <span aria-hidden="true" data-icon="mentions">
        <svg viewBox="0 0 14 14" height="14" width="14" preserveAspectRatio="xMidYMid meet" fill="none"><title>mentions</title><path fillRule="evenodd" clipRule="evenodd" d="M12.0904 9.31433C12.6314 8.69845 12.9311 7.85776 12.9896 6.79222C13.0481 5.61587 12.8604 4.58978 12.4267 3.71391C11.993 2.83803 11.3387 2.16676 10.464 1.70005C9.58919 1.23335 8.54508 1 7.33161 1C6.13275 1 5.06428 1.25786 4.12616 1.77357C3.18803 2.28929 2.4485 3.01278 1.90756 3.94406C1.36661 4.87534 1.0669 5.92487 1.00842 7.0927C0.954817 8.34577 1.15706 9.42194 1.61516 10.3213C2.05864 11.1907 2.72384 11.8546 3.6108 12.3127C4.49775 12.7709 5.56014 13 6.79798 13C7.30968 13 7.81772 12.9478 8.32212 12.8434C8.64175 12.7772 8.9198 12.6978 9.15626 12.6051C9.37785 12.5182 9.47328 12.2691 9.40133 12.0423C9.31939 11.7839 9.02846 11.6564 8.76984 11.7375C8.56921 11.8003 8.34931 11.8546 8.11013 11.9004C7.66421 11.9856 7.23658 12.0282 6.82721 12.0282C5.81842 12.0282 4.96438 11.8343 4.26505 11.4465C3.56572 11.0586 3.04671 10.4928 2.70801 9.74907C2.36931 9.00532 2.2292 8.11988 2.28768 7.0927C2.33154 6.08257 2.57033 5.18221 3.00406 4.39158C3.4378 3.60095 4.02381 2.99681 4.76213 2.57912C5.50045 2.16143 6.34718 1.95258 7.30237 1.95258C8.86185 1.95258 10.0302 2.37027 10.8075 3.20565C11.5848 4.04103 11.9321 5.24506 11.8492 6.81779C11.82 7.55941 11.6458 8.16356 11.3265 8.63026C11.0073 9.09697 10.5992 9.33031 10.1021 9.33031C9.45395 9.33031 9.17617 8.90837 9.26877 8.06446L9.51825 5.70216C9.59854 4.94189 9.27669 4.11826 8.54142 3.9089C8.22709 3.81939 7.86524 3.77464 7.45588 3.77464C6.91981 3.77464 6.4142 3.92701 5.93904 4.23175C5.46389 4.5365 5.07159 4.96803 4.76213 5.52637C4.45267 6.08471 4.25896 6.71124 4.18098 7.40597C4.09326 8.26266 4.23337 8.94672 4.60131 9.45818C4.96925 9.96964 5.50897 10.2254 6.22048 10.2254C6.58111 10.2254 6.9259 10.1444 7.25485 9.98242C7.58381 9.82046 7.87255 9.57752 8.12109 9.2536C8.41837 9.90997 9.00804 10.2381 9.89012 10.2381C10.8161 10.2381 11.5495 9.93021 12.0904 9.31433ZM6.26426 5.43373C5.92312 5.87913 5.70626 6.53655 5.61366 7.40603C5.55031 7.98568 5.60879 8.42574 5.7891 8.72622C5.96942 9.0267 6.25695 9.17694 6.65169 9.17694C6.91485 9.17694 7.16339 9.07572 7.39731 8.87327C7.63124 8.67081 7.8213 8.39271 7.9675 8.03896L8.22145 5.60573C8.26525 5.18602 8.00936 4.76565 7.58737 4.76565C7.04643 4.76565 6.60539 4.98834 6.26426 5.43373Z" fill="currentColor"></path><path d="M12.9896 6.79222L13.1893 6.80318L13.1893 6.80215L12.9896 6.79222ZM12.0904 9.31433L12.2407 9.44632L12.2407 9.44632L12.0904 9.31433ZM10.464 1.70005L10.3698 1.87651L10.3698 1.87651L10.464 1.70005ZM4.12616 1.77357L4.02981 1.59831L4.02981 1.59831L4.12616 1.77357ZM1.90756 3.94406L2.0805 4.04452L2.0805 4.04452L1.90756 3.94406ZM1.00842 7.0927L0.808669 7.0827L0.808607 7.08415L1.00842 7.0927ZM1.61516 10.3213L1.43695 10.412L1.43699 10.4121L1.61516 10.3213ZM3.6108 12.3127L3.70259 12.135L3.70259 12.135L3.6108 12.3127ZM8.32212 12.8434L8.28157 12.6475L8.28157 12.6475L8.32212 12.8434ZM9.15626 12.6051L9.08326 12.4189L9.08326 12.4189L9.15626 12.6051ZM9.40133 12.0423L9.59197 11.9818L9.59197 11.9818L9.40133 12.0423ZM8.76984 11.7375L8.82966 11.9283L8.82966 11.9283L8.76984 11.7375ZM8.11013 11.9004L8.07257 11.7039L8.07257 11.7039L8.11013 11.9004ZM2.28768 7.0927L2.48738 7.10407L2.48749 7.10138L2.28768 7.0927ZM3.00406 4.39158L2.82872 4.29539L2.82872 4.29539L3.00406 4.39158ZM4.76213 2.57912L4.66365 2.40504L4.66365 2.40504L4.76213 2.57912ZM11.8492 6.81779L11.6495 6.80727L11.6494 6.80991L11.8492 6.81779ZM11.3265 8.63026L11.1615 8.51735L11.1615 8.51735L11.3265 8.63026ZM9.26877 8.06446L9.46758 8.08628L9.46766 8.08547L9.26877 8.06446ZM9.51825 5.70216L9.71714 5.72316L9.71714 5.72316L9.51825 5.70216ZM8.54142 3.9089L8.59619 3.71654L8.59619 3.71654L8.54142 3.9089ZM4.18098 7.40597L3.98222 7.38366L3.98202 7.38559L4.18098 7.40597ZM4.60131 9.45818L4.76366 9.34138L4.76366 9.34138L4.60131 9.45818ZM8.12109 9.2536L8.30328 9.17108L8.16558 8.86706L7.96242 9.13185L8.12109 9.2536ZM5.61366 7.40603L5.81248 7.42776L5.81254 7.42721L5.61366 7.40603ZM6.26426 5.43373L6.10548 5.31212L6.10548 5.31212L6.26426 5.43373ZM5.7891 8.72622L5.61761 8.82913L5.61761 8.82913L5.7891 8.72622ZM7.9675 8.03896L8.15233 8.11535L8.16341 8.08855L8.16642 8.05972L7.9675 8.03896ZM8.22145 5.60573L8.42037 5.62649L8.42037 5.62649L8.22145 5.60573ZM12.7899 6.78126C12.7331 7.81566 12.4437 8.60911 11.9402 9.18235L12.2407 9.44632C12.8191 8.7878 13.1291 7.89986 13.1893 6.80318L12.7899 6.78126ZM12.2475 3.80266C12.6632 4.64223 12.847 5.63308 12.7898 6.78229L13.1893 6.80215C13.2492 5.59867 13.0576 4.53732 12.6059 3.62515L12.2475 3.80266ZM10.3698 1.87651C11.2083 2.32388 11.8325 2.96476 12.2475 3.80266L12.6059 3.62515C12.1534 2.71131 11.4691 2.00964 10.5581 1.5236L10.3698 1.87651ZM7.33161 1.2C8.51951 1.2 9.52981 1.42836 10.3698 1.87651L10.5581 1.5236C9.64856 1.03834 8.57065 0.8 7.33161 0.8V1.2ZM4.2225 1.94884C5.12771 1.45122 6.16233 1.2 7.33161 1.2V0.8C6.10318 0.8 5.00086 1.06449 4.02981 1.59831L4.2225 1.94884ZM2.0805 4.04452C2.6033 3.14447 3.31643 2.44693 4.2225 1.94884L4.02981 1.59831C3.05962 2.13165 2.29371 2.88109 1.73462 3.8436L2.0805 4.04452ZM1.20817 7.1027C1.2652 5.96394 1.55692 4.94589 2.0805 4.04452L1.73462 3.8436C1.1763 4.80478 0.868611 5.8858 0.808674 7.0827L1.20817 7.1027ZM1.79337 10.2305C1.35427 9.36847 1.15575 8.32815 1.20824 7.10125L0.808607 7.08415C0.75388 8.36339 0.959847 9.47542 1.43695 10.412L1.79337 10.2305ZM3.70259 12.135C2.85189 11.6956 2.21734 11.0617 1.79332 10.2304L1.43699 10.4121C1.89994 11.3198 2.5958 12.0135 3.51901 12.4904L3.70259 12.135ZM6.79798 12.8C5.58455 12.8 4.55516 12.5755 3.70259 12.135L3.51901 12.4904C4.44034 12.9664 5.53572 13.2 6.79798 13.2V12.8ZM8.28157 12.6475C7.79043 12.7492 7.29597 12.8 6.79798 12.8V13.2C7.32339 13.2 7.84502 13.1464 8.36266 13.0392L8.28157 12.6475ZM9.08326 12.4189C8.8598 12.5065 8.59309 12.583 8.28157 12.6475L8.36266 13.0392C8.69042 12.9714 8.9798 12.8891 9.22926 12.7913L9.08326 12.4189ZM9.21069 12.1027C9.25623 12.2463 9.19096 12.3766 9.08326 12.4189L9.22926 12.7913C9.56474 12.6597 9.69034 12.292 9.59197 11.9818L9.21069 12.1027ZM8.82966 11.9283C8.99841 11.8754 9.1667 11.964 9.21069 12.1027L9.59197 11.9818C9.47208 11.6038 9.05852 11.4374 8.71001 11.5466L8.82966 11.9283ZM8.14768 12.0968C8.39324 12.0499 8.62069 11.9938 8.82966 11.9283L8.71001 11.5466C8.51773 11.6069 8.30538 11.6594 8.07257 11.7039L8.14768 12.0968ZM6.82721 12.2282C7.25046 12.2282 7.69071 12.1842 8.14768 12.0968L8.07257 11.7039C7.63771 11.7871 7.2227 11.8282 6.82721 11.8282V12.2282ZM4.16804 11.6214C4.90384 12.0294 5.7932 12.2282 6.82721 12.2282V11.8282C5.84365 11.8282 5.02491 11.6392 4.36205 11.2716L4.16804 11.6214ZM2.52599 9.83196C2.88203 10.6138 3.43038 11.2122 4.16804 11.6214L4.36205 11.2716C3.70105 10.905 3.21139 10.3719 2.89002 9.66618L2.52599 9.83196ZM2.088 7.08133C2.02815 8.13269 2.17081 9.05202 2.52599 9.83196L2.89002 9.66618C2.5678 8.95862 2.43025 8.10706 2.48736 7.10407L2.088 7.08133ZM2.82872 4.29539C2.37852 5.11603 2.1329 6.04698 2.08787 7.08402L2.48749 7.10138C2.53018 6.11816 2.76215 5.24839 3.17941 4.48778L2.82872 4.29539ZM4.66365 2.40504C3.8909 2.84221 3.27916 3.47431 2.82872 4.29539L3.17941 4.48778C3.59644 3.7276 4.15672 3.1514 4.86061 2.75319L4.66365 2.40504ZM7.30237 1.75258C6.3171 1.75258 5.43564 1.9683 4.66365 2.40504L4.86061 2.75319C5.56525 2.35455 6.37727 2.15258 7.30237 2.15258V1.75258ZM10.9539 3.06941C10.1265 2.18014 8.8963 1.75258 7.30237 1.75258V2.15258C8.8274 2.15258 9.93395 2.56039 10.6611 3.34189L10.9539 3.06941ZM12.0489 6.82832C12.1335 5.22257 11.7804 3.95765 10.9539 3.06941L10.6611 3.34189C11.3892 4.1244 11.7306 5.26756 11.6495 6.80727L12.0489 6.82832ZM11.4916 8.74317C11.8377 8.23712 12.0188 7.59336 12.0491 6.82567L11.6494 6.80991C11.6212 7.52545 11.4538 8.09 11.1615 8.51735L11.4916 8.74317ZM10.1021 9.53031C10.6751 9.53031 11.1411 9.25566 11.4916 8.74317L11.1615 8.51735C10.8736 8.93827 10.5233 9.13031 10.1021 9.13031V9.53031ZM9.06996 8.04265C9.02176 8.48198 9.06372 8.85513 9.24061 9.12383C9.42691 9.40682 9.73219 9.53031 10.1021 9.53031V9.13031C9.82387 9.13031 9.66618 9.04283 9.57471 8.90388C9.47382 8.75063 9.42318 8.49085 9.46757 8.08628L9.06996 8.04265ZM9.31935 5.68115L9.06987 8.04346L9.46766 8.08547L9.71714 5.72316L9.31935 5.68115ZM8.48665 4.10125C9.08736 4.2723 9.39469 4.96782 9.31935 5.68115L9.71714 5.72316C9.80239 4.91595 9.46602 3.96422 8.59619 3.71654L8.48665 4.10125ZM7.45588 3.97464C7.85117 3.97464 8.19395 4.01791 8.48665 4.10125L8.59619 3.71654C8.26022 3.62088 7.87932 3.57464 7.45588 3.57464V3.97464ZM6.04702 4.4001C6.49174 4.11488 6.96016 3.97464 7.45588 3.97464V3.57464C6.87945 3.57464 6.33666 3.73914 5.83107 4.0634L6.04702 4.4001ZM4.93706 5.62333C5.23259 5.09012 5.60323 4.68473 6.04702 4.4001L5.83107 4.0634C5.32455 4.38826 4.91059 4.84594 4.5872 5.42942L4.93706 5.62333ZM4.37973 7.42827C4.45505 6.75725 4.64155 6.15649 4.93706 5.62333L4.5872 5.42942C4.26379 6.01293 4.06286 6.66523 3.98223 7.38366L4.37973 7.42827ZM4.76366 9.34138C4.43331 8.88218 4.29536 8.25233 4.37994 7.42634L3.98202 7.38559C3.89116 8.27299 4.03342 9.01126 4.43895 9.57497L4.76366 9.34138ZM6.22048 10.0254C5.56372 10.0254 5.08874 9.79326 4.76366 9.34138L4.43895 9.57497C4.84975 10.146 5.45422 10.4254 6.22048 10.4254V10.0254ZM7.16651 9.80299C6.86456 9.95165 6.54995 10.0254 6.22048 10.0254V10.4254C6.61227 10.4254 6.98723 10.3371 7.3432 10.1618L7.16651 9.80299ZM7.96242 9.13185C7.73043 9.43419 7.4649 9.65607 7.16651 9.80299L7.3432 10.1618C7.70271 9.98484 8.01467 9.72084 8.27977 9.37534L7.96242 9.13185ZM9.89012 10.0381C9.47298 10.0381 9.1409 9.96047 8.88357 9.81725C8.6288 9.67546 8.4355 9.46302 8.30328 9.17108L7.93891 9.33611C8.10396 9.70054 8.35413 9.98037 8.68904 10.1668C9.02138 10.3517 9.42518 10.4381 9.89012 10.4381V10.0381ZM11.9402 9.18235C11.4424 9.74912 10.7668 10.0381 9.89012 10.0381V10.4381C10.8653 10.4381 11.6566 10.1113 12.2407 9.44632L11.9402 9.18235ZM5.81254 7.42721C5.90323 6.57557 6.11342 5.95959 6.42304 5.55535L6.10548 5.31212C5.73283 5.79866 5.50928 6.49754 5.41479 7.38485L5.81254 7.42721ZM5.9606 8.62331C5.81335 8.37794 5.751 7.99029 5.81248 7.42776L5.41485 7.3843C5.34962 7.98108 5.40423 8.47354 5.61761 8.82913L5.9606 8.62331ZM6.65169 8.97694C6.31658 8.97694 6.09962 8.85498 5.9606 8.62331L5.61761 8.82913C5.83922 9.19843 6.19731 9.37694 6.65169 9.37694V8.97694ZM7.26643 8.72204C7.06213 8.89886 6.85857 8.97694 6.65169 8.97694V9.37694C6.97113 9.37694 7.26465 9.25258 7.5282 9.02449L7.26643 8.72204ZM7.78266 7.96257C7.64559 8.29422 7.47185 8.54426 7.26643 8.72204L7.5282 9.02449C7.79062 8.79737 7.997 8.49121 8.15233 8.11535L7.78266 7.96257ZM8.02253 5.58497L7.76858 8.01819L8.16642 8.05972L8.42037 5.62649L8.02253 5.58497ZM7.58737 4.96565C7.72476 4.96565 7.83666 5.03171 7.9157 5.14366C7.99704 5.25885 8.03977 5.41979 8.02253 5.58497L8.42037 5.62649C8.44693 5.37196 8.38362 5.11286 8.24246 4.91294C8.09901 4.70977 7.87197 4.56565 7.58737 4.56565V4.96565ZM6.42304 5.55535C6.72797 5.15722 7.11132 4.96565 7.58737 4.96565V4.56565C6.98154 4.56565 6.48282 4.81946 6.10548 5.31212L6.42304 5.55535Z" fill="currentColor"></path></svg>
    </span>
)

const DefaultGroupPhoto = () => (
    <span aria-hidden="true" data-icon="default-group">
        <svg viewBox="0 0 212 212" height="49" width="49" preserveAspectRatio="xMidYMid meet" fill="none"><title>default-group</title><path d="M105.946 0.25C164.318 0.25 211.64 47.596 211.64 106C211.64 164.404 164.318 211.75 105.945 211.75C47.571 211.75 0.25 164.404 0.25 106C0.25 47.596 47.571 0.25 105.946 0.25Z" fill="#6a7175"></path><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M102.282 77.2856C102.282 87.957 93.8569 96.5713 83.3419 96.5713C72.827 96.5713 64.339 87.957 64.339 77.2856C64.339 66.6143 72.827 58 83.3419 58C93.8569 58 102.282 66.6143 102.282 77.2856ZM150.35 80.1427C150.35 89.9446 142.612 97.857 132.954 97.857C123.296 97.857 115.5 89.9446 115.5 80.1427C115.5 70.3409 123.296 62.4285 132.954 62.4285C142.612 62.4285 150.35 70.3409 150.35 80.1427ZM83.3402 109.428C68.5812 109.428 39 116.95 39 131.928V143.714C39 147.25 41.8504 148 45.3343 148H121.346C124.83 148 127.68 147.25 127.68 143.714V131.928C127.68 116.95 98.0991 109.428 83.3402 109.428ZM126.804 110.853C127.707 110.871 128.485 110.886 129 110.886C143.759 110.886 174 116.95 174 131.929V141.571C174 145.107 171.15 148 167.666 148H134.854C135.551 146.007 135.995 143.821 135.995 141.571L135.75 131.071C135.75 121.51 130.136 117.858 124.162 113.971C122.772 113.067 121.363 112.15 120 111.143C119.981 111.123 119.962 111.098 119.941 111.07C119.893 111.007 119.835 110.931 119.747 110.886C121.343 110.747 124.485 110.808 126.804 110.853Z"></path></svg>
    </span>
)
