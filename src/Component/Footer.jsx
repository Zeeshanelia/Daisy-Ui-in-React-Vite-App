export const Footer = () => { 


    return (<>
    
    <section className='py-12 md:py-24'>
      <div className='container'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start'>
          <span className='flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold text-primary'>Let's make something <br className='hidden sm:inline' /> great together.</span>
          <button className='btn btn-secondary rounded-full sm:btn-lg'>Let's connect</button>
        </div>
      </div>
    </section> 
<br />
    
    <footer className='bg-base-200 text-base-content '>
      <div className='container '>
        <div className="footer py-10 md:py-16 grid-cols-2 sm:grid-cols-4 lg:grid-cols-auto">
          <div>
            <span className="footer-title">Solutions</span>
            <a href="#!" className="link link-hover">Marketing</a>
            <a href="#!" className="link link-hover">Analytics</a>
            <a href="#!" className="link link-hover">Commerce</a>
            <a href="#!" className="link link-hover">Insights</a>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a href="#!" className="link link-hover">Branding</a>
            <a href="#!" className="link link-hover">Design</a>
            <a href="#!" className="link link-hover">Marketing</a>
            <a href="#!" className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a href="#!" className="link link-hover">About us</a>
            <a href="#!" className="link link-hover">Contact</a>
            <a href="#!" className="link link-hover">Jobs</a>
            <a href="#!" className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a href="#!" className="link link-hover">Terms of use</a>
            <a href="#!" className="link link-hover">Privacy policy</a>
            <a href="#!" className="link link-hover">Cookie policy</a>
          </div>
          <div className='w-full col-span-full md:col-auto'>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input type="text" placeholder="user@site.com" className="input input-bordered w-full pr-16" />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row items-center border-t border-base-300 py-4 gap-2'>
          <div className="flex-grow text-center sm:text-start">
            <p>© 2022 Company, Inc. All rights reserved.</p>
          </div>
          <div className="grid grid-flow-col gap-4">
            <a className='link link-secondary' href='#!'><i className='bi bi-facebook text-xl'></i></a>
            <a className='link link-secondary' href='#!'><i className='bi bi-instagram text-xl'></i></a>
            <a className='link link-secondary' href='#!'><i className='bi bi-twitter text-xl'></i></a>
            <a className='link link-secondary' href='#!'><i className='bi bi-github text-xl'></i></a>
            <a className='link link-secondary' href='#!'><i className='bi bi-dribbble text-xl'></i></a>
          </div>
        </div>
      </div>
    </footer>
  

    
    </>)
}
 

