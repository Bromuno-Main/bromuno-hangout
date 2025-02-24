import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProdImage } from "../../data";
import { HeartIcon } from "../../data/icons";

function CaseGrooveUp() {
    return (
        <div className="h-fit w-full">
          {/* Groove hero */}
          <div className=" bg-[#730C9C] w-full h-fit justify-center items-center flex">
          
            <div className="w-full lg:min-h-[704px] max-w-[1512px] lg:min-width-[1024px] lg:h-[704px] flex  text-white justify-center items-center">
    
              

              <div className=" lg:w-[570px] lg:h-[185px] gap-[23px] flex flex-col justify-center items-start relative">
                <h4 className="big-shoulder font-bold lg:text-[56px] lg:leading-[56.44px]">Grooveup</h4>
                <p className="font-bold lg:text-[24px] lg:leading-[30.12px] w-full h-[60px]">A Stream to earn music platform powered by blockchain technology</p>
                <p className="w-full h-[23px] font-medium lg:text-[18px] lg:leading-[22.59px]">UI/UX Design</p>

                <div className="absolute -top-[160px] left-[0px] gap-4 flex">
                  <Link href={"/"} className="font-normal text-[16px] leading-[20.08px] h-[20px] w-[44px] ">Home</Link> <span className="font-normal text-[16px] leading-[20.08px] w-[81px] h-[20px]">Case Study</span>
              </div>
              </div>

              <div className=" lg:w-[613px] lg:h-[335px] rounded-[32px] flex items-center justify-center bg-center bg-[url('/groove2.svg')] ">
                <div className="lg:w-[150px] lg:h-[32px] flex justify-center items-center">
                  <Image src={"./grooveupLogo.svg" }alt="grooveup logo" width={100} height={100} className="object-cover w-full h-full"/>
                </div>
              </div>

            </div>
          </div>

          {/* Groove About */}
          <div className=" bg-white  w-full h-fit justify-center items-center flex">
          
            <div className="w-full lg:min-h-[4076px] max-w-[1512px] lg:min-width-[1024px] lg:h-fit   text-black  flex-col justify-center items-center">

              {/* groove wants */}
              <div className="lg:w-[605px] lg:mt-[234px] mx-auto  lg:h-[364px] flex justify-center items-start flex-col gap-[19px]">
                <p className="lg:h-[200px] lg:w-[605px] font-bold lg:text-[32px] lg:leading-[40.16px] ">
                Grooveup wanted a fun looking music streaming platform that is not a spotify alternative but one that brings a whole new meaning to music streaming.
                </p>
                <p className=" lg:w-[650px] h-[80px] font-bold lg:text-[32px] lg:leading-[40.16px] text-[#F26869]  ">
                A Reward-Based music streaming platform.
                </p>
                <p className="lg:w-[605px] lg:h-[46px] font-medium lg:text-[18px] lg:leading-[22.59px] text-[#41464F] ">Users will be gifted with the in-app currency called Groove Coin as they interact with the app features.</p>
              </div>

              {/* groove target */}
              <div className="w-full lg:min-w-[1024px] lg:max-w-[1228px] lg:py-[10px] xl:py-0 lg:mt-[195px] mx-auto lg:h-[634.69px] rounded-[24px] justify-between flex  items-center lg:py[33px] lg:px-[25px] bg-[#6E0EC1]">
                <div className="lg:w-[623.92px] lg:h-[568.69px] flex justify-center items-center gap-[17px]" >
                  <div className="flex-col flex lg:w-[313px] lg:h-full gap-[15px] items-center justify-center ">
                    <div className="lg:h-[276.84px] w-full">
                      <Image src={'./targetone.svg'} width={100} height={100} alt="gen-z" className="object-cover w-full h-full" />
                    </div>
                    <div className="lg:h-[276.84px] w-full">
                      <Image src={'./targettwo.svg'} width={100} height={100} alt="gen-z" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <div className="flex-col flex lg:w-[293px] lg:h-full gap-[15px] items-center justify-center ">
                    <div className="w-full h-full">
                    <Image src={'./targetthree.svg'} width={100} height={100} alt="gen-z" className="object-cover w-full h-full" />
                    </div>
                  </div>
                </div>
                <div className="lg:h-[568.69px] lg:w-[554.08px] py-[170px] px-[48px]  flex items-center justify-center">
                  <div className="w-full h-full justify-center items-start gap-[17px] flex-col">
                    <h4 className="text-[#FEB344] font-bold lg:text-[16px] lg:leading-[20.08px] lg:w-[125px] lg:h-[20px] ">Target Audience</h4>
                    <p className=" text-white lg:w-[458.08px] lg:h-[160px] font-bold lg:text-[32px] lg:leading-[40.16px] ">Grooveup is targeted at young audience of Gen-z and Gen-alpha demographic globally.</p>
                  </div>
                </div>
              </div>

              {/* samples of groove features */}

              <div className="h-[2338px] ">
                <div className=" w-full lg:min-w-[1024px] lg:max-w-[1228px] gap-x-[110px] mx-auto h-fit lg:px-[70px] xl:px-[140px] lg:grid grid-cols-3">
                  {
                    ProdImage.map((prod, index)=>{
                      return <div className={` rounded-[25.12px] lg:h-[500.84px] lg:w-[236.92px] border-[#263238] border-[6.09px]  justify-center items-center flex flex-col  overflow-hidden shadow-2xl ${index===0? "mt-[385px]":index===1? "mt-[265px]":index===2? "mt-[425px]":index===3? "mt-[100px]":index===4? "-mt-[50px]": index===5? "mt-[250px]":index===6? "":index===7? "-mt-[150px]":index>7? "hidden":""}`} key={index}>
                      <div className={`lg:w-[236.92px] lg:h-full border-[0.76px] rounded-[24.36px] overflow-hidden border-[#A46DB1] ${index===7? "flex justify-end items-end bg-[url('/product5.svg')]":""}`}>
                        <Image src={prod.image} width={100} height={100} alt="feature image" className={` w-full h-full object-cover ${index===7? "h-[299px] rounded-[24px] -mb-[20px] w-full":""}`}/>
                      </div>
                    </div>
                    })
                  }
                </div>
              </div>

              <div className="h-fit w-full ">
                {
                  ProdImage.map((prod,index)=>{
                    return (
                      <div className={` w-full lg:min-w-[1024px] lg:max-w-[1228px] gap-x-20 mx-auto h-fit justify-center items-start ${index===8?"flex":"hidden"}`} key={index}>
                        <div>
                          <div className={` rounded-[25.12px] lg:h-[500.84px] lg:w-[236.92px] border-[#263238] border-[6.09px]  justify-center items-center flex flex-col  overflow-hidden shadow-2xl `} >
                            <div className={`lg:w-[236.92px] lg:h-full border-[0.76px] rounded-[24.36px] overflow-hidden border-[#A46DB1] `}>
                              <Image src={prod.image} width={100} height={100} alt="feature image" className={` w-full h-full object-cover `}/>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`w-[573px] h-fit flex-col flex lg:gap-[107px]  `}>
                          <h4 className="lg:w-[573.9px] lg:h-[120px] font-bold lg:text-[32px] lg:leading-[40.16px]">We were able to design lovely features that make music streaming not just rewarding but enjoyable.</h4>
                          <div className="flex justify-between items-center">
                          {
                                ProdImage.map((prod,index)=>{
                                  return ( 
                                    <div key={index} className={` ${index>8&&index<11?"block":"hidden"}`}>
                                      <div className={` rounded-[25.12px] lg:h-[500.84px] lg:w-[236.92px] border-[#263238] border-[6.09px]  justify-center items-center flex  overflow-hidden shadow-2xl `} >
                                        <div className={`lg:w-[236.92px] flex lg:h-full border-[0.76px] rounded-[24.36px] overflow-hidden border-[#A46DB1] `}>
                                          <Image src={prod.image} width={100} height={100} alt="feature image" className={` w-full h-full object-cover `}/>
                                        </div>
                                      </div>
                                    </div>       
                                  )
                                })
                              }
                          </div>
                        </div>
                            
                      </div>
                    )
                  })
                }
              </div>

            </div>
          </div>

          {/* groove feature */}
          <div className=" bg-white  w-full h-fit justify-center items-center mt-[165px] flex">
          
            <div className="w-full lg:min-h-[831px] max-w-[1512px] lg:min-width-[1024px] lg:h-fit mx-auto  lg:gap-[175px]  flex items-center justify-center text-black relative">
              <div className=" rounded-[33.96px] lg:h-[677px] lg:w-[320.29px] border-[#263238] border-[8.23px] py-[2.06px] justify-center items-center flex px-[1.03px] overflow-hidden shadow-2xl">
                <div className="w-full lg:h-[674px] border-[1.03px] rounded-[32.94px] overflow-hidden border-[#A46DB1]">
                  <Image src={'./featureimg.svg'} width={100} height={100} alt="feature image" className="w-full h-full object-cover"/>
                </div>
              </div>
              <p className="lg:w-[389.86px] lg:h-[200px] font-bold lg:text-[32px] lg:leading-[40.16px] ">
              The Groove feature allows users to share their music reactions in a way that no other music app does.
              </p>
            </div>
          </div>

          {/* another feature */}
          <div className=" bg-white  w-full h-fit justify-center items-center mt-[165px] flex">
          
            <div className="w-full lg:max-w-[1512px] lg:min-width-[1024px] lg:h-fit mx-auto  border-red-500 lg:gap-[175px]  flex items-center justify-center text-black relative">
              <div className=" border-purple-500 w-full lg:max-w-[1228px] flex justify-center lg:gap-12 lg:min-w-[1024px] h-[794px] ">
                <div className="lg:w-[590px] lg:h-full gap-8 flex-col flex justify-start items-center">
                  <h4 className="lg:w-[533.06px] lg:h-[160px] font-bold lg:text-[32px] lg:leading-[40.116px]">We were able to design lovely features that make music streaming not just rewarding but enjoyable.</h4>
                  <div className="lg:w-full lg:h-[596px] rounded-[32px] bg-[#4D0B48] overflow-hidden flex items-center justify-center">
                    <div className={` rounded-[25.12px] lg:h-[500.84px] lg:w-[236.92px] border-[#263238] border-[6.09px]  justify-center items-center flex flex-col  overflow-hidden shadow-2xl mt-[140px] `} >
                      <div className={`lg:w-[236.92px] lg:h-full border-[0.76px] rounded-[24.36px] overflow-hidden border-[#A46DB1] `}>
                        <Image src={"/product19.svg"} width={100} height={100} alt="feature image" className={` w-full h-full object-cover `}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start h-full lg:w-[590px] ">
                  <div className="w-full h-[591px] rounded-[32px] bg-[#7731FF] flex items-center justify-center overflow-hidden">
                    <div className={` rounded-[25.12px] lg:h-[500.84px] lg:w-[236.92px] border-[#263238] mt-[140px] border-[6.09px]  justify-center items-center flex flex-col  overflow-hidden shadow-2xl `} >
                      <div className={`lg:w-[236.92px] lg:h-full border-[0.76px] rounded-[24.36px] overflow-hidden border-[#A46DB1] `}>
                        <Image src={"/product9.svg"} width={100} height={100} alt="feature image" className={` w-full h-full object-cover `}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* another feature */}
          <div className="bg-white  w-full h-fit justify-center items-center mt-[165px] flex">
          <div className="h-fit w-full  ">
                {
                  ProdImage.map((prod,index)=>{
                    return (
                      <div className={`  w-full lg:min-w-[1024px] lg:max-w-[1228px] gap-x-20 mx-auto h-fit justify-center items-start ${index===11?"flex":"hidden"}`} key={index}>
                        <div>
                          <div className={` rounded-[25.12px] lg:h-[500.84px] lg:w-[236.92px] border-[#263238] border-[6.09px]  justify-center items-center flex flex-col  overflow-hidden shadow-2xl `} >
                            <div className={`lg:w-[236.92px] lg:h-full border-[0.76px] rounded-[24.36px] overflow-hidden border-[#A46DB1] `}>
                              <Image src={prod.image} width={100} height={100} alt="feature image" className={` w-full h-full object-cover `}/>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`w-[573px] h-fit flex-col flex lg:gap-[107px]  `}>
                          <h4 className="lg:w-[573.9px] lg:h-[120px] font-bold lg:text-[32px] lg:leading-[40.16px]">We were able to design lovely features that make music streaming not just rewarding but enjoyable.</h4>
                          <div className="flex justify-between items-center">
                          {
                                ProdImage.map((prod,index)=>{
                                  return ( 
                                    <div key={index} className={` ${index>11&&index<14?"block":"hidden"}`}>
                                      <div className={` rounded-[25.12px] lg:h-[500.84px] lg:w-[236.92px] border-[#263238] border-[6.09px]  justify-center items-center flex  overflow-hidden shadow-2xl `} >
                                        <div className={`lg:w-[236.92px] flex lg:h-full border-[0.76px] rounded-[24.36px] overflow-hidden border-[#A46DB1] `}>
                                          <Image src={prod.image} width={100} height={100} alt="feature image" className={` w-full h-full object-cover `}/>
                                        </div>
                                      </div>
                                    </div>       
                                  )
                                })
                              }
                          </div>
                        </div>
                            
                      </div>
                    )
                  })
                }
              </div>
          </div>

          {/* another feature */}
          <div className="bg-[#7731FF] mb-[29px]  w-full h-[1008px] justify-start items-center mt-[250px] flex flex-col">
            <h4 className="lg:w-[573px] mt-[95px] lg:h-[137.62px] font-bold lg:text-[32px] lg:leading-[40.16px] text-center text-white">Grooveup has features that allow artists to upload and manage their songs.</h4>
            <div className="lg:w-[1159px] relative flex xl:gap-[230px] lg:gap-[130px] items-start justify-center mt-[45px]">
            {
                    ProdImage.map((prod, index)=>{
                      return <div className={` rounded-[25.12px] lg:h-[500.84px] lg:w-[236.92px] border-[#263238] border-[6.09px]  justify-center items-center flex-col  overflow-hidden shadow-2xl ${index===14?"flex mt-[126px]":index===15?"flex":index===16?"flex mt-[126px]":"hidden"}`} key={index}>
                      <div className={`lg:w-[236.92px] lg:h-full border-[0.76px] rounded-[24.36px] overflow-hidden border-[#A46DB1] `}>
                        <Image src={prod.image} width={100} height={100} alt="feature image" className={` w-full h-full object-cover ${index===7? "h-[333px] rounded-[24px] -mb-[20px] w-full":""}`}/>
                      </div>
                    </div>
                    })
                  }
                  <span className="absolute top-[540px] lg:left-[43.5%] xl:left-[43%]  text-white font-bold lg:text-[24px] lg:leading-[30.12px] text-center">Upload music</span>
            </div>
            
          </div>

          <div className="w-full mb-[29px] h-[928px] flex justify-center items-center  ">
            <div className="lg:w-[1512px] h-full  ">
              <Image src={"/groove2.svg"} width={100} height={100} alt="" className="w-full h-full object-cover"/>
            </div>
            
          </div>

          <div className="flex mb-[29px] items-center justify-center w-full ">
          <div className="w-[1512px] h-[911px] items-center justify-center gap-[26px]  flex">
            <div className="lg:w-[743.5px] h-full">
              <Image src={"/groove3.svg"} width={100} height={100} alt="" className="w-full h-full object-fill"/>
            </div>
            
            <div className="lg:w-[743.5px] h-full">
              <Image src={"/groove1.svg"} width={100} height={100} alt="" className="w-full h-full object-cover"/>
            </div>
            
          </div>
          </div>

          <div className="w-full h-[956px] ">
            <Image src={"/slanted.svg"} width={100} height={100} alt="" className="w-full h-full object-cover"/>
          </div>

          {/* final product */}
          <div className=" lg:h-[1384px] lg:w-full justify-center items-start flex " >

            <div className={` rounded-[25.12px] lg:h-[500.84px] lg:w-[236.92px] border-[#263238] border-[6.09px]  justify-center items-center flex flex-col  overflow-hidden shadow-2xl lg:mt-[178.42px] `} >
              <div className={`lg:w-[236.92px] lg:h-full border-[0.76px] rounded-[24.36px] overflow-hidden border-[#A46DB1] `}>
                <Image src={"/product18.svg"} width={100} height={100} alt="feature image" className={` w-full h-full object-cover `}/>
              </div>
            </div>

          </div>

          {/* appreciate */}
          <div className="w-full lg:h-[377px] flex justify-center items-center ">
            <div className="w-full lg:min-w-[1024px] lg:max-w-[1512px] justify-center items-center flex flex-col h-full border-b-[2px] border-[#D9D9D9]">
              <HeartIcon/>
              <h4 className="big-shoulder mt-[31px] lg:w-[570px] lh:h-[56px] font-bold lg:text-[56px] lg:leading-[56.44px] text-center text-[#0D0D0D]  ">Thanks for viewing</h4>
            </div>
          </div>

          <div className="w-full lg:h-[632px] flex justify-center items-center  mt-[85px]">
            <div className="w-full lg:min-w-[1024px] lg:max-w-[1512px] justify-center items-center flex ">
              <div className="lg:w-[570px] lg:h-[155px] justify-center items-start flex flex-col lg:gap-[23px]">
                <p className="font-bold lg:text-[24px] lg:leading-[30.12px]">Up next:</p>
                <h4 className="big-shoulder font-bold lg:text-[56px] lg:leading-[56.44px] ">Kedu by Voiceoftheeast</h4>
                <span className="font-medium lg:text-[18px] lg:leading-[22.59px]">UI/UX Design</span>
              </div>
              <div className="lg:w-[613px] lg:h-[335px] rounded-[32px] overflow-hidden">
                <Image src={"/vote.svg"} width={100} height={100} alt="" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>

        </div>
    )
}
export default CaseGrooveUp;