

export const Hero = () => {

    return (
        <div className="hero container mx-auto">
            <div
                className="hero h-96 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(https://picsum.photos/200/300?grayscale)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Well come </h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}