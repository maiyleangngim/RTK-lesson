
"use client"
import { decrement, increment, resetValue } from '@/features/countSlice/countSlice';
import { Button } from './ui/button'
import { useDispatch } from 'react-redux';

export default function ButtonComponent() {
  const dispatch = useDispatch();

  return (
    <div className='p-4'>
      <Button onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <Button onClick={()=>dispatch(decrement()) }>
        Decrement
      </Button>
      <Button onClick={ ()=> dispatch(resetValue())}>
        Reset
      </Button>
    </div>
  )
}
