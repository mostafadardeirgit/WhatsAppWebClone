import 'tailwindcss/tailwind.css'
import NavBar from './Components/NavBar'
import LS from './Components/LS'
import RS from './Components/RS'
import { LSContentProvider, RSContentProvider } from './utils/context'
import { useState } from 'react'


export default function App() {
    const [lsContent, setLSContent] = useState('Chats')
    const [rsContent, setRSContent] = useState('Welcome')

    return (
        <RSContentProvider value={{ rsContent, setRSContent }}>
            <LSContentProvider value={{ lsContent, setLSContent }}>
                <main className="h-dvh w-full flex overflow-hidden fixed rop-0">
                    <div className='w-16'>
                        <NavBar />
                    </div>
                    <div className='w-96'>
                        <LS />
                    </div>
                    <div className='grow'>
                        <RS />
                    </div>
                </main>
            </LSContentProvider>
        </RSContentProvider>
    )
}
