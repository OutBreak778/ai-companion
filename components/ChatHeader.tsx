import axios from 'axios'
import { Companion, Message } from '@prisma/client'
import React from 'react'
import { Button } from './ui/button'
import { ChevronLeft, Edit, MessagesSquare, MoreVertical, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import BotAvatar from './BotAvatar'
import { useUser } from '@clerk/nextjs'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useToast } from './ui/use-toast'

interface ChatHeaderProps {
    companion: Companion &{
        messages: Message[]
        _count: {
            messages: number
        }
    }
}

const ChatHeader = ({
  companion,
}: ChatHeaderProps) => {

    const router = useRouter()
    const {user} = useUser()
    const {toast} = useToast()

    const onDelete = async () => {
        try {
            await axios.delete(`/api/companion/${companion.id}`)
            toast({
                description: "Successfully deleted",
                variant: "default"
            })
            router.refresh()
            router.push('/')
        } catch (error) {
            toast({
                description: "Something went wrong!",
                variant: "destructive"
            })
        }
    }

  return (
    <div className='w-full flex items-center justify-between border-b border-primary/10 pb-5'>
        <div className="flex items-center gap-x-3">
            <Button onClick={() =>router.back()} variant="ghost" size="icon">
                <ChevronLeft className='h-8 w-8' />
            </Button>
            <BotAvatar src={companion.src} />
            <div className="flex flex-col gap-y-1">
                <div className="flex items-center gap-x-3">
                    <p className="font-medium mr-3">
                        {companion.name}
                    </p>
                    <div className="flex items-center text-muted-foreground text-xs">
                        <MessagesSquare className='h-3 w-3 mr-1' />
                        {companion._count.messages}
                    </div>
                </div>
                <p className="text-sm text-muted-foreground">
                    Created by <b className='text-md underline-offset-2 underline'>{companion.userName}</b>
                </p>
            </div>
        </div>
        {user?.id === companion.userId && (
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon">
                        <MoreVertical />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                     <DropdownMenuItem onClick={() => router.push(`/companion/${companion.id}`)}>
                        <Edit className='w-4 h-4 mr-2' />
                        Alteration
                     </DropdownMenuItem>
                     <DropdownMenuItem onClick={onDelete}>
                        <Trash className='w-4 h-4 mr-2' />
                        Elimination
                     </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
        )}
    </div>
  )
}

export default ChatHeader
