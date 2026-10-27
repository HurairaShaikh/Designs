// let first_name = document.getElementById("first-name");
// let last_name = document.getElementById("last-name");
// let email = document.getElementById("email");
// let number = document.getElementById("Phone");
// let address = document.getElementById("address");
// let message = document.getElementById("message");


let form = document.querySelector("#forum");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(form);
    // for (let [key,value] of formData.entries()) {
    //     console.log([key][0],":",[value][0]);
    // }
    // let username = formData.get("first-name");
    // let lastname = formData.get("last-name");
    // let email = formData.get("email");
    // let message = formData.get("message");
    // console.log("firstname:", username );
    // console.log("Lastname:", lastname );
    // console.log("Email:", email );
    // console.log("Message:", message );

    let userdata = {
        "username": formData.get("first-name") + " " + formData.get("last-name"),
        "email": formData.get("email"),
        "Phone": formData.get("number"),
        "address": formData.get("address"),
        "message": formData.get("message")
    }
    console.log(userdata);



})

// let submit = document.getElementById("submit");
// submit.addEventListener("click",() => {
//     // console.log("First Name ",first_name.value);
//     // console.log("Last Name ",last_name.value);
//     // console.log("Email ",email.value);
//     // console.log("Number ",Phone.value);
//     // console.log("Message ",message.value);

// });


for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Gsap Animations  :
// Methods => .from(),.to(),.fromTo(),gsap.timeline(),scrollTrigger,
document.addEventListener("DOMContentLoaded", (event) => {

    let gtl = gsap.timeline();
    let gtl2 = gsap.timeline();
    gtl.from("header", {
        y: "-200%",
        opacity: 0,
        duration: 1
    })
        .from(".hero-contents", {
            y: "10%",
            opacity: 0,
            duration: 2,
        }, "hero").from(".bg-house ", {
            x:"5%",
            opacity: 0,
            duration: 2,

        }, "hero").from(".explore-more1 ", {
            x: "10%",
            opacity: 0,
            duration: 2
        }, "hero");

        gsap.from(".about-section", {
            scrollTrigger:".about-section",
            y: "10%",
            opacity: 0,
            duration: 3
        });
        gsap.from(".about-bg-image-col",{
            scrollTrigger: ".about-bg-image-col",
            x: "10%",
            opacity: 0,
            duration: 2
        });

        gsap.from(".contact-forum",{
            scrollTrigger: ".contact-forum",
             y: "10%",
            opacity: 0,
            duration: 2

        });
        gsap.from(".contact-left-side",{
            scrollTrigger: ".contact-left-side",
            x:"-10%",
            opacity:0,
            duration:2
        });
        gsap.from(".contact-right-side",{
            scrollTrigger: ".contact-right-side",
            x:"10%",
            opacity:0,
            duration:2
        });
        let boxtl = gsap.timeline();
        gsap.to(".box",{
            duration:1,
            // backgroundColor:'#ff83e2',
            // x:'92.5vw',
            // xPercent:-100,
            repeat:2,
            repeatDelay:1,
            // borderRadius: "50%",
            // marginTop: 20,
            // yoyo:true,
            rotation:360
        });
        gsap.to(".box2",{
            duration:1,
            // backgroundColor:'#1860fd',
            // x:'92.5vw',
            // xPercent:-100,
            // repeat:2,
            // borderRadius: "50%",
            // marginTop: 20,
            // yoyo:true,
            rotation:360,
            delay:1
        });

    //   gsap.from("header",{
    //     y: "-200%",
    //     opacity:0,
    //     duration:2
    //   });
    //   gsap.from(".hero-contents",{
    //     y: "10%",
    //     opacity:0,
    //     duration: 3,
    //     // delay: 2
    //   })
    //   gsap.from(".bg-house ",{
    //     x: "20%",
    //     opacity: 0,
    //     duration: 3,
    //     // delay: 2
    //   })
    //   gsap.from(".explore-more1 ",{
    //     x: "10%",
    //     opacity: 0,
    //     duration: 3,
    //     // delay: 2
    //   })
});
