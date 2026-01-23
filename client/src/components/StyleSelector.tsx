import React from 'react'

const StyleSelector = ({value, onChange, isOpen , setIsOpen} : {value:ThumbNailStyle ; onChange :()=> void;
    isOpen : boolean ; setIsOpen : (open : boolean) =>void
} ) =>
     {

  return (
    <div className='relative space-y-3 dark'>
<label className='block text-sm font-medium text-zinc-200'> ThumbNail Style</label>
    </div>
  )
}

export default StyleSelector