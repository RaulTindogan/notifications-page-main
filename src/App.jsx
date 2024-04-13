function App() {
  return (
    <main className="text-Grayish-blue px-3 pt-5 max-w-[700px] bg-White sm:px-10 md:my-10 md:rounded-xl sm:pt-10">
      <header className="flex justify-between mb-5 sm:mb-10">
        <h1 className="text-Very-dark-blue cursor-pointer text-xl font-[700] sm:text-3xl">Notification <span className="text-center px-2 rounded-lg bg-Blue text-White">3</span></h1>
        <button className="text-Grayish-blue hover:text-Blue">Mark all as read</button>
      </header>
      <section>
        <div className="flex gap-4 p-3 bg-Very-light-grayish-blue rounded-md mb-4">
          <img src="src/assets/images/avatar-mark-webber.webp" alt="Mark Webber" className="size-[45px]"/>
          <div>
            <h2><a href="#" className="text-Very-dark-blue font-[700] hover:text-Blue">Mark Webber</a> reacted to your recent post <a href="#" className="font-[600] text-Very-light-grayish-blue-2 hover:font-[700] hover:text-Blue">My first tournament today!</a><span className="inline-block ml-2 w-2 h-2 rounded-full bg-Red"></span></h2>
            <p>1m ago</p>
          </div>
        </div>
        <div>
          <div className="flex gap-4 p-3 bg-Very-light-grayish-blue rounded-md mb-4">
            <img src="src/assets/images/avatar-angela-gray.webp" alt="Angela Gray" className="size-[45px]"/>
            <div>
              <h2><a href="#" className="text-Very-dark-blue font-[700] hover:text-Blue">Angela Gray</a> followed you<span className="inline-block ml-2 w-2 h-2 rounded-full bg-Red"></span></h2>
              <p>5m ago</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 p-3 bg-Very-light-grayish-blue rounded-md mb-4">
          <img src="src/assets/images/avatar-jacob-thompson.webp" alt="Jacob Thompson" className="size-[45px]"/>
          <div>
            <h2><a href="#" className="text-Very-dark-blue font-[700] hover:text-Blue">Jacob Thompson</a> has joined your group <a href="#" className="font-[600] text-Blue hover:font-[700]">Chess Club</a><span className="inline-block ml-2 w-2 h-2 rounded-full bg-Red"></span></h2>
            <p>1 day ago</p>
          </div>
        </div>
        <div className="flex gap-4 p-3 bg-White rounded-md mb-4">
          <img src="src/assets/images/avatar-rizky-hasanuddin.webp" alt="Rizky Hasanuddin" className="size-[45px]"/>
          <div>
            <h2><a href="#" className="text-Very-dark-blue font-[700] hover:text-Blue">Rizky Hasanuddin</a> sent you a private message</h2>
            <p>5 day ago</p>
            <div className="cursor-pointer rounded-lg bg-White mt-4 p-3 border-Light-grayish-blue-2 border-[1px] hover:bg-Light-grayish-blue-2">
              Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.
            </div>
          </div>
        </div>
        <div className="flex justify-between p-3 bg-White rounded-md mb-4">
          <div className="flex gap-4">
            <img src="src/assets/images/avatar-kimberly-smith.webp" alt="Kimberly Smith" className="size-[45px]"/>
            <div>
              <h2><a href="#" className="text-Very-dark-blue font-[700] hover:text-Blue">Kimberly Smith</a> sent you a private message</h2>
              <p>1 week ago</p>
            </div>
          </div>
          <img src="src/assets/images/image-chess.webp" alt="Woman Playing Chess" className="size-[45px]" />
        </div>
        <div className="flex gap-4 p-3 bg-White rounded-md mb-4">
          <img src="src/assets/images/avatar-nathan-peterson.webp" alt="Nathan Peterson" className="size-[45px]"/>
          <div>
            <h2><a href="#" className="text-Very-dark-blue font-[700] hover:text-Blue">Nathan Peterson</a> reacted to your recent post <a href="#" className="text-Very-light-grayish-blue-2 font-[600] hover:font-[700] hover:text-Blue">5 end-game strategies to increase your win rate</a></h2>
            <p>2 weeks ago</p>
          </div>
        </div>
        <div className="flex gap-4 p-3 bg-White rounded-md mb-4">
          <img src="src/assets/images/avatar-anna-kim.webp" alt="Anna Kim" className="size-[45px]"/>
          <div>
            <h2><a href="#" className="text-Very-dark-blue font-[700] hover:text-Blue">Anna Kim</a> left the group <a href="#" className="font-[600] text-Blue hover:font-[700]">Chess Club</a></h2>
            <p>2 weeks ago</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
