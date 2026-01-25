
import { div } from 'motion/react-client';
import type { AspectRatio, IThumbnail } from '../assests/assets/assets'
import { Loader2Icon } from 'lucide-react';

function Preview(
    {thumbnail,isLoading , aspectRatio} : {
        thumbnail:IThumbnail,
        isLoading :boolean ,
        aspectRatio : AspectRatio;
    }) {
    const aspectClasses ={
        '16:9' : 'aspect-video',
        '1:1' : 'aspect-square',
        '9:16' : 'aspect-[9/16]',
    } as Record<AspectRatio , string>;
  return (
    <div className='relative mx-auto w-full max-w-2x1'>
        <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]}`}>
            {/* Loading State */}

            {isLoading &&(
                <div>
                    <Loader2Icon  className='size-8 animate-spin text-zinc-400'/>
                    <div> </div> 
           </div>
            )}

        </div>

    </div>
  )
}

export default Preview