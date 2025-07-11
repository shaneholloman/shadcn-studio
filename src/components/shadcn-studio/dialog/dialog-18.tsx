import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const DialogTopRightAlignDemo = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant='outline'>Top right align</Button>
        </DialogTrigger>
        <DialogContent className='sm:end-0 sm:top-0 sm:left-auto sm:m-6 sm:max-w-[425px] sm:translate-x-0 sm:translate-y-0'>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          <div className='grid gap-4'>
            <div className='grid gap-3'>
              <Label htmlFor='name-1'>Name</Label>
              <Input id='name-1' name='name' defaultValue='Pedro Duarte' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='username-1'>Username</Label>
              <Input id='username-1' name='username' defaultValue='@peduarte' />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default DialogTopRightAlignDemo
