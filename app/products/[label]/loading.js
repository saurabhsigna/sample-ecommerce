import GallerySkeleton from '@components/products/loading/GallerySkeleton'
import BasicSkeleton from '@components/products/loading/Skeleton'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
    <div>
      <div className='hidden md:block'>
      <GallerySkeleton/>
      </div>
   <div className='md:hidden'>
      <BasicSkeleton/>
      
   </div>
      </div>
      )
  }