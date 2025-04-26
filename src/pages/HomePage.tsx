const HomePage = () => {
    return (
        <div className="home_container">
            <div className="home_content">
                <div className="home_header">
                    <h1>CodeLeap Network</h1>
                </div>
                <div className="home_body">
                    <div className="home_form">
                        <h2>
                            What’s on your mind?
                        </h2>
                        <div className="home_post_form">
                            <div className="home_post_form_title">
                                <label htmlFor="title">Title</label>
                                <input type="text" placeholder="Hello world" id="title"/>
                            </div>
                            <div className="home_post_form_content">
                                <label htmlFor="content">Content</label>
                                <textarea placeholder="Content here" id="content"/>
                            </div>
                        </div>
                        <span className="home_post_btn">
                            Create
                        </span>
                    </div>
                    <div className="home_post_list">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage