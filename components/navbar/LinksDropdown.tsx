import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';


const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className='flex gap-4 max-w-[100px]'>
          <LuAlignLeft className='w-6 h-6 p-0.5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='w-40' sideOffset={5}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <DropdownMenuItem>{link.label}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksDropdown