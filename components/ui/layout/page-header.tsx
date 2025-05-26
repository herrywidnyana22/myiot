
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { stringConverter } from '@/lib/string-converter'

interface PageHeaderProps {
  title: string
  imageUrl?: string
}

export function PageHeader({ title, imageUrl }: PageHeaderProps) {
    const pageTitle = stringConverter(title)
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">{pageTitle}</h1>
            <Avatar>
                <AvatarImage src={imageUrl || 'https://github.com/shadcn.png'} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}