"use client";

import { useEffect } from 'react';

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'


const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
  // (
  //   <div className='p-4'>
  //     Root Page

  //     {/* <Modal title='Test' description='Test Desc' isOpen={true} onClose={() =>{}}>
  //       Children
  //     </Modal>
  //     <UserButton afterSignOutUrl='/' />


  //     <Button size="default" variant="outline">Outline</Button>
  //     <Button size="default" variant="destructive">Destructive</Button>
  //     <Button size="default" variant="ghost">ghost</Button>
  //     <Button size="default" variant="default">Default</Button>
  //     <Button size="default" variant="link">link</Button>
  //     <Button size="default" variant="secondary">Secondary</Button>
  //     <Button size="lg" variant="outline">lg=large, sm, default, icon</Button> */}
  //   </div>
  // );
}
export default SetupPage;
