import { useState } from 'react'

const Content = () => {

    const [visibilities, setVisibilities] = useState([false, false, false, false, false, false]);

    const PlusClick = (index: number) => {
      const newVisibilities = [...visibilities];
      
      newVisibilities[index] = !newVisibilities[index];
      
      setVisibilities(newVisibilities);
    };

    return(
    <div className="display grid">
        <div className="mt-[-10%] z-0 relative first">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/e7e58f4b-0b00-40fa-a337-1a8b902b86c8/PH-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" className="z-0 brightness-50"/>
          <div className="z-10 display grid place-content-center mt-[-40%] text-white text-center gap-2 blur-none one">
            <h1 className="text-6xl">Enjoy big movies, hit series and more from 2$.</h1>
            <p className="text-2xl">Join today Cancel anytime</p>
            <div className="display grid gap-2">
                <p className="text-xl ">Ready to watch? Enter your email to create or restart your membership</p>
                <label htmlFor="email" className="display flex justify-center items-center gap-2">
                    <input type="email" placeholder="Email Adress" id="email" className="rounded-xl   p-4 bg-[rgba(15,15,15,255)] w-[300px]"/> <button className=" p-2 text-2xl rounded-lg  get">Get Started </button>
                </label>
            </div>
          </div>
        </div>
            <div className="mt-[8%] second">
            <div className=" relative display flex justify-evenly border-y-8 border-slate-800 items-center p-4 bg-black two">
                <div className="display grid text-center  text-white gap-2">
                <h1 className="text-6xl">Enjoy on your TV</h1>
                <p className="text-2xl whitespace-prewrap  w-[60%] relative left-[25%]">Watch on Smart TVs, Playstation, Xbox, 
                Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
           </div>
        </div>
        <div className="third">
            <div className="  display flex justify-evenly border-y-8 border-slate-800 items-center p-4 bg-black flex-row-reverse three">
                <div className="display grid text-center  text-white gap-2">
                <h1 className="text-6xl">Download your shows to watch offline</h1>
                <p className="text-2xl whitespace-prewrap  w-[60%] relative left-[25%]">Save your favorites easily always have something
                to watch
                </p>
                </div>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
           </div>
        </div>
        <div className="fourth">
            <div className=" display flex justify-start border-y-8 border-slate-800 items-start  p-4 bg-black four">
                <div className="display grid place-content-center text-center  text-white gap-2 h-[50vh]">
                <h1 className="text-6xl">Watch
                everywhere</h1>
                <p className="text-2xl whitespace-prewrap  w-[60%] relative left-[25%]">Stream unlimited movies and TV 
                shows on your phone, tablet, laptop,
                and TV.</p>
                </div>
           </div>
        </div>
        <div className="fifth">
            <div className="display flex justify-evenly border-y-8 border-slate-800 items-center p-4 bg-black flex-row-reverse five">
                <div className="display grid text-center  text-white gap-2">
                <h1 className="text-6xl">Create profiles for kids</h1>
                <p className="text-2xl whitespace-prewrap  w-[60%] relative left-[25%]">Send kids on adventures with their favorite
                characters in a space made just for them-fee with your membership</p>
                </div>
                <img src="https://occ-0-2738-395.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" alt="" />
           </div>
        </div>
        <div className="border-y-8 border-slate-800  bg-black text-white sixth" >
            <div className="display grid text-center gap-2 p-10
            six">
                <h1 className="text-6xl">Frequently Asked Questions</h1>
                <div className="display flex flex-col justify-center items-center gap-2">
                {visibilities.map((visible, index) => (
        <div key={index} className="display grid  w-[60%] cursor-pointer" onClick={() => PlusClick(index)}>
          <h1 className="display flex items-center justify-between bg-[rgba(45,44,44,255)] boder-y-2 border-black text-2xl p-4">
            What is Netflix?{' '}
            <span className={`text-4xl duration-500 ${visible ? 'rotate-180' : ''}`}>+</span>
          </h1>
          <p style={{ display: visible ? 'block' : 'none' }} className="bg-[rgba(45,44,44,255)]">
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
          </p>
        </div>
      ))}
    </div>
        <div className="display grid gap-3 mt-[2%]">
                        <h1 className="text-xl">Ready to watch? Enter your email to create or restart your membership.</h1>
                        <label htmlFor="" className="display flex items-center justify-center gap-2">
                        <input type="email" placeholder="Email Adress" id="email" className="rounded-xl  p-4 bg-[rgba(15,15,15,255)] w-[300px]"/> <button className=" p-2 text-2xl rounded-lg  get">Get Started </button>
                        </label>
            </div>
           </div>
        </div>
  </div>
        
    )

}



export default Content;