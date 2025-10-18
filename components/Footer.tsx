import { FcSupport } from "react-icons/fc"
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaDiscord, FaTwitter, FaAffiliatetheme} from "react-icons/fa"
import { SiIterm2, SiGnuprivacyguard } from "react-icons/si"
import { MdOutlineSecurity } from "react-icons/md"
import { GiFamilyTree } from "react-icons/gi"

export default function Footer() {
  return (
    <div className='flex flex-col items-center w-full mb-0 p-2 text-sm'>
        <div className = 'flex flex-col gap-2 mb-5'>
                <p className="text-[#646669] text-lg"> <span className='span'> ctrl </span> + <span className='span'> enter </span> - restart test</p>
                <p className="text-[#646669] text-lg"><span className='span'> esc </span>  or  <span className='span'> ctrl </span> + <span className='span'> shift </span> + <span className='span'> p </span> - command line</p>
        </div>
        <div className='flex items-center justify-between w-full p-1'>
            <div className='flex items-center p-2 gap-6 flex-wrap'>
                <p className='p config-btn hover:text-[#d1d0c5]'><span><IoMdMail /></span>contact</p>
                <p className='p config-btn hover:text-[#d1d0c5]'><span><FcSupport /></span>support</p>
                <p className='p config-btn hover:text-[#d1d0c5]'><span><FaGithub /></span>github</p>
                <p className='p config-btn hover:text-[#d1d0c5]'><span><FaDiscord /></span>discord</p>
                <p className='p config-btn hover:text-[#d1d0c5]'><span><FaTwitter /></span>twitter</p>
                <p className='p config-btn hover:text-[#d1d0c5]'><span><SiIterm2 /></span>terms</p>
                <p className='p config-btn hover:text-[#d1d0c5]'><span><MdOutlineSecurity /></span>security</p>
                <p className='p config-btn hover:text-[#d1d0c5]'><span><SiGnuprivacyguard /></span>privacy</p>
            </div>
            <div className='flex items-center justify-center p-2 gap-6'>
                <p className='p config-btn hover:text-[#d1d0c5]'><span><FaAffiliatetheme /></span>serika dark</p>
                <p className='p config-btn hover:text-[#d1d0c5]'><span><GiFamilyTree /></span>v25.36.0</p>
            </div>
        </div>
    </div>

  )
}
