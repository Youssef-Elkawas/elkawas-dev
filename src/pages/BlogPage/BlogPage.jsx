import { useEffect } from "react";
import "./BlogPage.css";

const blogPosts = [
    {
        date: "First Entry",
        title: "My First Blog Post",
        content: (
            <>
                After completing CS50x, I didn't know exactly what the next step
                should be. Every course promised huge results and I became
                distracted. So I grabbed a pen and paper and wrote down exactly
                what I wanted to become. Through CS50x I discovered that web
                development excited me most. I decided that I wanted to build
                websites and real products from A to Z and become a Full-Stack
                Developer. Since the path wasn't completely clear, I used AI to
                help me create a roadmap. What I learned is simple: You don't
                need to see the whole road. You only need to see the next step.
                For me, that next step was HTML. Then CSS. Then whatever comes
                after that.
            </>
        ),
    },
    {
        date: "second step",
        title: "CSS Confusion",
        content: (
            <>
                After learning HTML, I started learning CSS. I was confused by
                all the different properties and I thought I had to memorize
                them all. But actually I only need to learn how to use them to
                know which one fit here to achieve the design I want. It's not
                about memorizing, it's about understanding how to apply them.
                And the most hard obstacle I faced was structuring my HTML in a
                way that makes it easy to style with CSS. Then I realized this
                is a skill that I will develop over time as I build more
                projects and see how other people structure their HTML. More
                projects, more experience, more understanding of how to
                structure my HTML and use CSS effectively. Next step is
                JavaScript, and I know that as I learn JavaScript, my
                understanding of HTML and CSS will also improve because they are
                all connected.
                <span className="blog-post-note">
                    <br />
                    small note: You will never know the road until you start
                    walking it.
                </span>
            </>
        ),
    },
    {
        date: "third step",
        title: "Finishing JS",
        content: (
            <>
                Finishing JavaScript and Looking Ahead After finishing CSS, I
                moved on to JavaScript, and the learning experience was very
                different. CSS is mostly visual. You can instantly see the
                results of what you build, whether it's a layout, animation, or
                design improvement. JavaScript, on the other hand, requires much
                more logical thinking and problem-solving. One of the most
                important things I learned is that JavaScript is mainly used to:
                <br />
                1. Save and manage data. ✅ <br />
                2. Generate HTML dynamically. ✅ <br />
                3. Make websites interactive. ✅
                <br />
                These capabilities make building websites much faster and more
                powerful. JavaScript is also the gateway to backend development.
                However, before diving deeper into the backend, I decided to
                learn React first because it is heavily based on JavaScript and
                is one of the most widely used frontend technologies today. 
                <br />
                Next step: React.js ⚛️
                <span className="blog-post-note">
                    <br />
                    small note: The journey of change is like driving a car on a
                    dark road that is 100 kilometers long. You don't need to see
                    the entire road before you start. You don't need all 100
                    kilometers to be illuminated. You only need the ten meters
                    in front of you to be visible through your headlights. As
                    you move forward, the next ten meters become visible, and
                    then the next ten after that. The same principle applies to
                    life. You will never reach a point where you know everything
                    you need before starting something new. Most of the time,
                    clarity comes from movement, not from waiting. So start with
                    what you know, take the next step, and trust that the road
                    will reveal itself along the way.
                </span>
            </>
        ),
    },
    {
        date: "Fourth step",
        title: "React Made JavaScript Click",
        content: (
            <>
                After finishing JavaScript, I thought React would be an entirely
                new world. Surprisingly, React made many JavaScript concepts
                easier to understand. While learning React, I worked with:
                <br />
                1. Components ✅ <br />
                2. Props ✅ <br />
                3. State ✅ <br />
                4. Hooks ✅ <br />
                5. Routing ✅ <br />
                6. API ✅ <br />
                7. Requests ✅ <br />
                8. Backend Communication ✅ <br />
                9. Data Fetching & Mutation ✅ <br />
                10. Deployment Basics ✅
                <br />
                One of the biggest lessons was realizing how modern web
                applications are built from small reusable pieces rather than
                large pages full of repeated code. React also helped me connect
                many concepts I learned earlier in JavaScript, especially
                working with data, user interactions, APIs, and application
                structure. Another important realization was that building a
                complete application is not about memorizing every step. It is
                about understanding how different parts of a system communicate
                together. The more I learn, the more I see software development
                as systems working together rather than isolated pieces of code.
                <br />
                Next step: Node.js 🚀
                <br />
                Time to move from building interfaces to building the server
                side of applications and continue the journey toward full-stack
                development.
                <span className="blog-post-note">
                    <br />
                    Small note: Looking back, React felt intimidating at first, but after
                    building real projects with it, many concepts became much
                    clearer than they seemed in the beginning.
                </span>
            </>
        ),
    },
];

export default function BlogPage() {
    useEffect(() => {
        document.title = "Elkawas.Dev - Blog";
    }, []);

    return (
        <>
            <section className="blog-hero">
                <div className="container">
                    <div className="blog-header">
                        <p className="section-label">My Journey</p>
                        <h1 className="blog-title">Blog</h1>
                        <p className="blog-description">
                            Here, I document my learning journey, lessons,
                            mistakes, wins, and everything I build as I grow
                            into a full-stack developer.
                        </p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="blog-grid">
                        {blogPosts.map((post) => (
                            <article
                                key={post.title}
                                className="blog-card card"
                            >
                                <span className="blog-date">{post.date}</span>
                                <h2 className="blog-post-title">
                                    {post.title}
                                </h2>
                                <p className="blog-post-text">{post.content}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
