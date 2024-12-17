export default function Chat() {
    return (
        <main className="h-dvh w-full flex flex-col relative">
            <img src="/bg-chat.png" className="h-dvh object-cover absolute -z-10" />

            <header className="h-16 w-full flex justify-center items-center bg-[#202c33]">
                <img src="/file.png" className="size-10" />
                <div className="me-auto">
                    <h3 className="text-[#e9edef]">Mostafa</h3>
                    <p className="text-[#8696a0]">message yourself</p>
                </div>
                <span className="text-6xl">
                    <Search />
                </span>
                <span>
                    <More />
                </span>
            </header>
            <div className="size-full overflow-auto mb-auto text-white" style={{ scrollbarWidth: 'none' }}>
                {messages.map(m =>
                    <div key={m.id}>{m.content}</div>)
                }
            </div>
            <footer className="h-16 w-full flex justify-center items-center bg-[#202c33]">
                <span><Attach /></span>
                <div className="w-full m-1 p-2 flex items-center bg-[#2a3942] text-[#d1d7db]">
                    <span><AddSticker /></span>
                    <input className="text-[#d1d7db] bg-[#2a3942] placeholder:text-[#8696a0]" type="text" placeholder=" Type a message" />
                </div>
                <span><Record /></span>
            </footer>
        </main>
    )
}

const messages = [
    {
        id: 1,
        content: 'first',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'https://buffalo-burger-clone.vercel.app/',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },
    {
        id: 1,
        content: 'last',
        time: '13:39',
        type: 'link',
        sender: 'mostafa'
    },

]

const Search = () => (
    <span aria-hidden="true" data-icon="search-alt">
        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>search-alt</title><path fill="currentColor" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path></svg>
    </span>
)

const More = () => (
    <span aria-hidden="true" data-icon="menu">
        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
    </span>
)

const Attach = () => (
    <span aria-hidden="true" data-icon="plus">
        <svg viewBox="0 0 24 24" width="30" preserveAspectRatio="xMidYMid meet"><title>plus</title><path fill="currentColor" d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path></svg>
    </span>
)

const AddSticker = () => (
    <span aria-hidden="true" data-icon="expressions">
        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>expressions</title><path d="M8.49893 10.2521C9.32736 10.2521 9.99893 9.5805 9.99893 8.75208C9.99893 7.92365 9.32736 7.25208 8.49893 7.25208C7.6705 7.25208 6.99893 7.92365 6.99893 8.75208C6.99893 9.5805 7.6705 10.2521 8.49893 10.2521Z" fill="currentColor"></path><path d="M17.0011 8.75208C17.0011 9.5805 16.3295 10.2521 15.5011 10.2521C14.6726 10.2521 14.0011 9.5805 14.0011 8.75208C14.0011 7.92365 14.6726 7.25208 15.5011 7.25208C16.3295 7.25208 17.0011 7.92365 17.0011 8.75208Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.8221 19.9799C15.5379 21.2537 13.8087 21.9781 12 22H9.27273C5.25611 22 2 18.7439 2 14.7273V9.27273C2 5.25611 5.25611 2 9.27273 2H14.7273C18.7439 2 22 5.25611 22 9.27273V11.8141C22 13.7532 21.2256 15.612 19.8489 16.9776L16.8221 19.9799ZM14.7273 4H9.27273C6.36068 4 4 6.36068 4 9.27273V14.7273C4 17.6393 6.36068 20 9.27273 20H11.3331C11.722 19.8971 12.0081 19.5417 12.0058 19.1204L11.9935 16.8564C11.9933 16.8201 11.9935 16.784 11.9941 16.7479C11.0454 16.7473 10.159 16.514 9.33502 16.0479C8.51002 15.5812 7.84752 14.9479 7.34752 14.1479C7.24752 13.9479 7.25585 13.7479 7.37252 13.5479C7.48919 13.3479 7.66419 13.2479 7.89752 13.2479L13.5939 13.2479C14.4494 12.481 15.5811 12.016 16.8216 12.0208L19.0806 12.0296C19.5817 12.0315 19.9889 11.6259 19.9889 11.1248V9.07648H19.9964C19.8932 6.25535 17.5736 4 14.7273 4ZM14.0057 19.1095C14.0066 19.2605 13.9959 19.4089 13.9744 19.5537C14.5044 19.3124 14.9926 18.9776 15.4136 18.5599L18.4405 15.5576C18.8989 15.1029 19.2653 14.5726 19.5274 13.996C19.3793 14.0187 19.2275 14.0301 19.0729 14.0295L16.8138 14.0208C15.252 14.0147 13.985 15.2837 13.9935 16.8455L14.0057 19.1095Z" fill="currentColor"></path></svg>
    </span>
)

const Record = () => (
    <span aria-hidden="true" data-icon="ptt">
        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>ptt</title><path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg>
    </span>
)