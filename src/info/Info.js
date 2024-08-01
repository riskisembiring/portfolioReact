import apsi2 from "../img/apsi2.png"
import portfolio2 from "../img/portfolio2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Riski",
    lastName: "Sembiring",
    initials: "🚀", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Developer",
    // selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Where there is coffee, there is a solution'
        },
        {
            emoji: '🌎',
            text: 'Based in the Depok City'
        },
        {
            emoji: "💼",
            text: "Software Developer"
        },
        {
            emoji: "📧",
            text: "ikiputra876@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/riski.s.sembiring",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/riski_sembiring/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/riskisembiring",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/riski-sahputra-sembiring-51b7b2223/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/IkiPutr90290894",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Riski. As a graduate with a Bachelor's degree in Information Systems, I bring a solid foundation in IT principles and a proven track record as a Software Developer at Bank OCBC. My expertise lies in utilizing cutting-edge technologies such as React, Angular, and SQL to deliver robust software solutions. Currently, I am on the lookout for new opportunities that will allow me to leverage my technical skills and continue my career in the IT field.",
    skills:
        {
            proficientWith: ['javascript', 'reactJs', 'git', 'mySql', 'angularJs', 'html', 'css', '.Net', 'php', 'git', 'Jenkins', 'c#'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'it enthusiast',
            emoji: '💻'
        },
        {
            label: 'game',
            emoji: '🎮'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'gym',
            emoji: '💪'
        },
        {
            label: 'singing',
            emoji: '🎤'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://docs.google.com/presentation/d/1my2Eo7f0vAbiqraITLMzReOtr_ic36OS/edit#slide=id.p1", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/riskisembiring/skripsiApsi", // this should be a link to the **repository** of the project, where the code is hosted.
            image: apsi2
        },
        {
            title: "Project 2",
            live: "https://github.com/riskisembiring/SIASmaSmartSchoolRESTApi",
            source: "https://github.com/riskisembiring/SIASmaSmartSchoolRESTApi",
            image: portfolio2,
        },
    ]
}