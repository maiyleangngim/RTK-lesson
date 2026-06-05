

"use client"

import { useAppSelector } from "@/store/hooks"

export default function GetCountComponent() {
    const count = useAppSelector((value) => value.count.value);

  return (
    <div className="p-4">Count: {count}</div>
  )
}
