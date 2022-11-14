const Main = () => {

    const handleSubscribe = (event) => {
        event.preventDefault();
    }

    return (
        <main>
            <h2>This app is currently in development.</h2>
            <p>Sign up below to be emailed when it launches.</p>
            <form onSubmit={handleSubscribe}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email"></input>
                <button type="submit">Subscribe</button>
            </form>
        </main>
    )
}

export default Main;