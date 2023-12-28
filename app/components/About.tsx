import React from "react";
import Image from "next/image"

const About = () =>{
    return (<>

    <div className=" fixed bottom-3  px-2 w-40 lg:w-56 ">
        
    <div className='flex flex-row gap-3 justify-center lg:py-3'>
    <div className=" text-sm bold ">
            Visit My Profile: 
        </div>
                                        <a href='https://instagram.com/cool_deep_96?igshid=NTc4MTIwNjQ2YQ=='>
                                            <Image className="h-5 w-5 grayscale hover:grayscale-0 transition duration-1000 " src='/instagram.png' alt="instagram" width={`${20}`} height={`${20}`}/>
                                        </a>
                                        <a href='https://www.linkedin.com/in/cool-deep96/'>
                                            <Image className="h-5 w-5 grayscale hover:grayscale-0 transition duration-1000 " src="/linkedin.png" alt="linkedin" width={`${20}`} height={`${20}`}/>
                                        </a>
                            
                                    


                                    </div>

    </div>
    </>

    )
}

export default About;