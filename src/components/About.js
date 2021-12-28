import "../styles/about.scss";

const About = () => {
    return (
        <div className="about__main">
            <h2>Who we are?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet vitae nunc ut vulputate. Vestibulum et bibendum ipsum, consequat elementum leo. Proin molestie imperdiet nisl, nec aliquet nunc fringilla quis. Nunc elit sem, placerat vel fermentum vitae, sagittis quis ipsum. Duis fermentum ultricies mi sit amet porttitor. Vivamus fringilla ipsum vel augue egestas, vel condimentum sapien finibus. Morbi pellentesque imperdiet libero, ac faucibus massa eleifend ut. Donec sagittis feugiat mauris, ornare aliquet metus.</p>
            <h2>Our goal</h2>
            <p>Pellentesque vulputate iaculis sapien eu euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tincidunt porta nibh ac sollicitudin. Nam sagittis pretium sapien at facilisis. Proin quis aliquet arcu. Nunc quis ipsum orci. Suspendisse dapibus varius turpis eget accumsan. In venenatis sed dolor vel ultricies. In ac justo nisl. Vivamus mattis et nulla et elementum. Etiam rutrum diam a tortor venenatis, at tempus sem rutrum. Etiam ac molestie nisi. Nam tristique vel massa ut aliquam. Sed sed odio gravida, semper ante nec, porta ipsum. Sed eu aliquet augue. Fusce eget vehicula massa, et malesuada tellus.</p>
            <h2>Contact:</h2>
            <p>Phone: 123-123-123</p>
            <p>Address: ul. Ulica 2 Wrocław</p>
            <h2>You can also find us on:</h2>
            <div className="main__links">
                <a href="https://facebook.com">Facebook</a>
                <a href="https://pyszne.pl">Pyszne.pl</a>
            </div>
        </div>
    );
}

export default About;