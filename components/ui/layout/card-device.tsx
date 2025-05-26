import { ReactNode } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { DotStatus } from "../custom/dot-status"

type CardDeviceProps = {
    title: string
    status: 'online' | 'offline'
    content: ReactNode
    footer: ReactNode
}

export const CardDevice = ({
    title,
    status,
    content,
    footer,
}: CardDeviceProps) => {
    
    const router = useRouter()

    const slug = title.toLowerCase().replace(/\s+/g, '-') // "Kelembapan Udara" → "kelembapan-udara"

    function handleClick() {
        router.push(`/${slug}`)
    }
    
    return ( 
        <Card 
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleClick()
            }}
            className="shadow-lg cursor-pointer hover:shadow-none transition-shadow"
        >
            <CardHeader>
                <CardTitle>
                    <div className='flex justify-between'>
                        <p>{title}</p>
                        <DotStatus
                        status={status}
                        label={status}
                        />
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {content}
            </CardContent>
            <CardFooter>
                {footer}
            </CardFooter>
        </Card>
    );
}