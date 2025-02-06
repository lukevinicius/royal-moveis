import Image from 'next/image'
import logo from '@/assets/rsa-logo.png'

export function Logo(props: { width?: number; height?: number }) {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={props.width ? props.width : 100}
      height={props.height ? props.height : 100}
    />
  )
}
