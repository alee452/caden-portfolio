const prevButton = document.querySelector('#previousArrow');
const nxtButton = document.querySelector('#nextArrow');
const carousel = document.querySelector('.carousel');
const overlay = document.querySelector('.overlay');
const xButton = document.querySelector('.x');

//project information
const projectData = {
    puzzleCube: {
        heading: "Puzzle Cube",
        images: ["engineeringImages/cube1.png", "engineeringImages/cube2.png", "engineeringImages/cube3.png", "engineeringImages/cube4.png", "engineeringImages/cube5.png", "engineeringImages/cube6.png"],
        description: "We created a puzzle cube for children using hardwood cubes. To do this, we first modeled each of our pieces via connecting cubes. Next, we created multiview drawings by hand. Then, we modeled and assembled the cube on fusion. Finally, we created an exploded view and drawings, then dimensioned each piece individually.",
        whatILearned: "I applied knowledge from multiview drawings, dimensioning rules, and basic modeling in CAD.",
        reflection: "If I got the opportunity to do this project again, I would try making a new puzzle cube that is more challenging to solve. I didn't feel like I needed to improve anything for this project. This project was simple, but also enjoyable and important."
    },

    flingMachine: {
        heading: "Fling Machine",
        images: ["engineeringImages/fling1.png", "engineeringImages/fling2.png", "engineeringImages/fling3.png", "engineeringImages/Fling4.png"],
        description: "We created a device with craft materials like popsicle sticks, straws, tape, etc that launched a cotton ball. The goal was to make our fling machine as precise as possible by landing the cotton ball on the bullseye of a target consistently. After recording data from our first design, we created a second design to try to improve our design based on the flaws of the first design. We then recorded data for the second model and did calculations to find the mean, median, mode, range, etc and created a box plot based on our data.",
        whatILearned: "I learned to work with a team in the design process as a whole, from brainstorming concepts to presenting a solution. I also learned how to find the upper and lower fences of a box plot. Finally, I learned how to find the standard deviation of a data set. ",
        reflection: "This project was simple in terms of its goal and the resources we had at our disposal. If I had the chance to redo this project, I would try a different design that is better than our current designs, as I feel our final model could have been more consistent. This project was definitely important for establishing how the design process works, as engineers have to retrace steps and create new designs many times until they reach their final product."
    },

    isopiece: {
        heading: "Isoshapes",
        images: ["engineeringImages/isopiece1.png", "engineeringImages/isopiece2.png", "engineeringImages/isopiece3.png"],
        description: "We created 3 different shapes that required more complex features of CAD to model. This included filet, holes, spheres and sketch dimensions. It also required us to dimension more complex shapes than the puzzle cube did.",
        whatILearned: "I learned to use more features of CAD, such as filet, holes, sketch dimensioning, etc. I also learned to apply more dimensioning rules to more complex drawings. This included annotating holes, center lines and center marks, circles, etc.",
        reflection: "If I had the chance to redo this project, I would use different and easier methods to model each of the IsoShapes than what I had previously used. Other than that, there was nothing I needed to improve. This project was important in learning to use more features of CAD and creating more complex drawings, since most modeling in CAD and engineering drawings in the real world will probably be much more complex."
    },

    reverseEngineering: {
        heading: "Reverse Engineering",
        images: ["engineeringImages/reverseEngineering1.png", "engineeringImages/reverseEngineering2.png"],
        description: "In this project, we analyzed a coffee maker to find the elements of its design, including 6 elements and 6 principles of design. We also analyzed the purpose, function, how the coffee maker works, components of the coffee maker, and the inputs and outputs of the coffee maker through functional analysis. Finally, I did structural analysis on a click pen by taking apart the pen and observing each part of the pen. I then recorded my observations on the function of each part of pen and created a sketch of the entire pen and each part of the pen. I also modeled 2 parts of the pen on Fusion 360 after using a dial caliper to measure the dimensions of the parts.",
        whatILearned: "I learned to apply visual analysis (elements and principles of design), functional analysis, and structural analysis to real life products. I also learned interesting information about how a coffee machine/maker works. Finally, I learned about the structure of a click pen and why you hear the click sound when pressing the plunger.",
        reflection: "If I had the chance to redo this project, I would try talking about different elements and principles of design present in the coffee maker. I would also try modelling more parts of the click pen and improving my current models of the parts to be more accurate. It was interesting to learn about how some of the daily appliances we use work. This project was also useful, as being able to analyze designs to improve them is an important part of engineering."
    },

    Automata: {
        heading: "Automata",
        images: ["engineeringImages/automata1.png","engineeringImages/automata2.png", "engineeringImages/automata3.png", "engineeringImages/automata4.png", "engineeringImages/automata5.png", "engineeringImages/automata6.png", "engineeringImages/automata7.png", "engineeringImages/automata8.png", "engineeringImages/automata9.png"],
        description: "First, I created sketches of the types of cams we will be using for this project: Pear, snail, hexagon, and elliptical. Next, I created each part of the automata box in CAD and assembled it together using rigid joints. I then created a drawing that included the assembly of the box and each part of the box dimensioned. Next, I modeled all of the parts that would be attached to the automata box, including all of the cams, followers, guides, the axle handle, and wooden screws. Finally, I assembled the entire automata box and created a drawing with a parts list, exploded view, and isometric view of the assembled automata box.",
        whatILearned: "I learned how to use even more features of CAD. This included more types of holes, tangent relationships, and parametric modeling, the most important feature of CAD I learned from this project. While completing this project, I also learned how to dimension holes and use notes to make dimensioning drawings a simpler process.",
        reflection: "If I could redo this project, I would try a different color scheme for all of the parts of the automata box. In addition I would try the enrichment project of creating a theme for my automata box. I found this project to be fun because figuring out how to model some of the more complex cams and parts on my own was satisfying. In addition, the use of parametric modelling is an important skill to have as an engineer, as it allows designs to easily be changed to meet certain size requirements by changing a single dimension in a design.",
    },

    Car: {
        heading: "Motor Car",
        images: ["engineeringImages/car1.png", "engineeringImages/car2.png", "engineeringImages/car3.png", "engineeringImages/car4.png", "engineeringImages/car5.png", "engineeringImages/car6.png", "engineeringImages/car7.png", "engineeringImages/car8.png",],
        description: "In this project, we created a motor car made of only cardboard and electrical parts (DC motor, 4 wheels, and battery). First, I created a design with the criteria and constraints of the project. Next I researched online for both cardboard and real cars to analyze the element and principles of design they use.  Next, we sketched 8 potential motor cars and chose the 4 best options by using a decision matrix. We then created iso sketches of these 4 options. After using a second decision matrix, we figured out what the design of our motor car would be and modeled the motor car in CAD. We then cut out the cardboard frame of the car. After attaching the wheels, DC motor, and batteries to the bottom part of the car, taping the top frame of the car onto the bottom, and painting the car, the toy motor car was complete.",
        whatILearned: "Organized a project wiht a team, sheet metal on Fusion, and using decision matrices to choose a design.",
        reflection: "If I had the chance to redo this project, I would add more details to the motor car design to improve it, as I didn't add lights, doors, side mirrors, and other details that would make the car look more realistic. I would also try to improve the speed and accuracy of car's motion by reducing the car's mass to a minimum and embedding the car wheel axle inside the cardboard through an interference fit to prevent it from moving and thereby preventing it from not moving straight. Although I initially struggled to finish this project due to the lack of participation from my partner, I still found this project to be useful for its detailed use of the design process.",
    },

    machineControl: {
        heading: "Machine Control Project",
        images: ["engineeringImages/control1.png", "engineeringImages/control2.png"],
        description: "Design the control system and a prototype of an elevator that must include/do the following: Travel between three floors in any order and have a way on each floor for someone to call the elevator to that floor Use the display screen to identify when the elevator is at each floor A built-in safety mechanism that requires the elevator to normally rest on the ground floor, and return to that floor after a period of nonuse Each level includes a safety door to prevent people from entering the elevator shaft A Maintenance Mode where all doors open and  the light at each floor blinks Include an element of biomimicry found in nature To do this, the first step is project management and the assignment of roles, including the creation of a Gantt chart and design brief. Next, do research to find inspiration for possible design and biomimicry ideas and create a decision matrix with all of your team's ideas to choose the best one. Create a flowchart and initial design sketch to get a rough idea of your design before building and testing. Once your prototype is finished, make sure that it meets all design criteria and constraints.",
        whatILearned: "The objective of this project was to design, build, code and test a working prototype that meets the criteria and constraints of our chosen Machine Control Project (Elevator).",
        reflection: "In this project, I mainly learned how to create, test, and improve code used in a working prototype that fulfills specific requirements. I also learned how to build, test, and communicate with a team in a large, complex project. If I could redo this project, I would try a different method/design to create an elevator, such as a pulley system or the crane-inspired design in our decision matrix. This would give me more experience in apply code to a real prototype, but in a different way that improves my overall skill set. I might have also tried a few different projects entirely, as when looking at other group's final designs, they seemed like they would also be fun to create. For example, I would try the Automated Guided Vehicle/Sorter or the Surgical Robot Arm. Regarding the machine that my team built, here are some possible improvements:  Making the chain and sprocket more accessible to make changes easier to implement. Building a taller elevator shaft would have made our build less crammed and allowed us to add and take out components easier.  Using more variables in our code, specifically for the period of nonuse part of our program, would make this feature less finicky, as sometimes the timer would go way past the determined period of nonuse, but the elevator car was still stuck on its current floor. We could have used a variable that increases by 1 every second, then is set back to 0 every time the elevator performs a new task. Regarding the dynamics of how well my group worked together, here are some possible improvements:  Better communication during the building and testing phase would have led to fewer issues with getting our code to work correctly with our build in the first few attempts.  Our communication outside of school felt sporadic and disorganized, with response times ranging from minutes to days, or no response at all. If we improved our communication outside of school, our building sessions during class would have been more organized, focusing on one or two parts of the build at a time instead of jumping from one incomplete task to the next.  During the building and test phase, everyone did a little bit of everything, so our roles in the building and test phase were fluid. Encouraging more individual accountability would have helped every member of our group fulfill the role that they were actually assigned to and increase our organization.  Overall, this project was definitely the most complex one of POE, and I enjoyed it a lot. I learned many skills and it significantly improved my coding skills with what will eventually be coding languages like Python and C++ in my future career, forcing me to think critically and logically about how the program actually runs.",
    },

    compoundMachine: {
        heading: "Compound Machine Project",
        images: ["engineeringImages/compoundMachine1.png"],
        description: "Create a compound machine that utilizes at least 5 simple machines (lever, wheel and axle, inclined plane, screw, and a gear train) to lift a mass of 1000 grams 5 inches vertically. The mechanical advantage must be greater than 5 and less than 15. To do this, create a Gantt chart for effective communication with other team members, brainstorming sketches and decision matrixes to decide on one design to make in real life and calculate the mechanical advantage while in the process of building the compound machine. Use these deliverables to create slideshows with reflection questions.",
        whatILearned: "Combine multiple simple machines together to create a compound machine. Calculate the mechanical advantage of simple and compound machines. ",
        reflection: "If I could redo this project, I would probably try to create a more simple design with my group, since our design was very large. While did this help with our ethical twist of including extra bracing due to frequent earthquakes, our design still took a very long time to build and probably was not very cost efficient. This project was important, as it was the first team project that required effective communication due to the decently restricting time constraint. It also served as an introduction to VEX parts. ",
    }
}

//carousel
nxtButton.addEventListener('click', () => { //click listener for the button
    const firstImage = carousel.firstElementChild; //fethces first HTMl element inside of carousel
    if(!firstImage) return; //if first image doesn't exit, exit function

    carousel.style.transition = "transform 0.4s ease-in-out";
    carousel.style.transform = "translateX(-100%)"; //css styles

    carousel.addEventListener('transitionend', function handleNext() { //wait until css sliding animation is done, then run this code:
        carousel.style.transition = "none"; //temporarily turns off css animations
        carousel.appendChild(firstImage); //copies and puts the 1st image at the end of the images
        carousel.style.transform = "translateX(0)"; //puts image back in the horizontal position it's supposed to be at (since it moved)

        carousel.removeEventListener('transitionend', handleNext); //stop running this now
    })
});

prevButton.addEventListener('click', () => {
    const lastImage = carousel.lastElementChild; //fetch last element in the carousel
    if (!lastImage) return; //if last image doesn't exit, exit function

    carousel.style.transition = "none"; //temp turn off css animations
    carousel.style.transform = "translateX(-100%)";
    carousel.insertBefore(lastImage, carousel.firstElementChild); //puts the last image before the first image

    setTimeout(() => { //finish layout changes then run this code
        carousel.style.transition = "transform 0.4s ease-in-out"; //add css animations back
        carousel.style.transform = "translateX(0)";
    }, 0);
});



function openPopup(projectID, event) { //open popup function
    if (event) {
        event.preventDefault(); //don't redirect the page
    }

    const data = projectData[projectID];

    document.getElementById("heading").innerText = data.heading; //looks for HTMl "heading", change the text inside it to the string out of "data.heading"
    document.getElementById("description").innerText = data.description;
    document.getElementById("whatIlearned").innerText = data.whatILearned;
    document.getElementById("reflection").innerText = data.reflection;

    carousel.innerHTML = ""; //gets rid of old images in popup
    data.images.forEach(imgSrc => { //loops through the array and temporarily names the image path imgSrc
        let img = document.createElement("img"); //create img tag
        img.src = imgSrc; //sets source of the image to the file path from the array (tells browser which pic to load)
        img.className = "images"; //applies css
        carousel.appendChild(img); //takes the image and adds it to the carousel
    });

    overlay.classList.add('show');
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');
}

function closePopup() {
    overlay.classList.remove('show');
    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');
}



//buttons in svg listener
const cubeBtn = document.querySelector('#cube');
const flingBtn = document.querySelector('#fling');
const isopieceBtn = document.querySelector('#isopieces');
const reverseEngineering1 = document.querySelector('#reverseMachine');
const reverseEngineering2 = document.querySelector('#reversePen');
const automata = document.querySelector('#automata');
const car = document.querySelector('#car');
const machinecontrol = document.querySelector('#control');
const compoundmachine = document.querySelector('#compound');





if (cubeBtn) {
    cubeBtn.addEventListener('click', (event) => openPopup('puzzleCube', event)); //if the user clicks on the cube, then run openPopup with the strings with puzzlecube?
}

if (flingBtn) {
    flingBtn.addEventListener('click', (event) => openPopup('flingMachine', event));
}

if (isopieceBtn) {
    isopieceBtn.addEventListener('click', (event) => openPopup('isopiece', event));
}

if (reverseEngineering1) {
    reverseEngineering1.addEventListener('click', (event) => openPopup('reverseEngineering', event));
}

if (reverseEngineering2) {
    reverseEngineering2.addEventListener('click', (event) => openPopup('reverseEngineering', event));
}

if (automata) {
    automata.addEventListener('click', (event) => openPopup('Automata', event));
}

if (car) {
    car.addEventListener('click', (event) => openPopup('Car', event));
}

if (machinecontrol) {
    machinecontrol.addEventListener('click', (event) => openPopup('machineControl', event));
}

if (compoundmachine) {
    compoundmachine.addEventListener('click', (event) => openPopup('compoundMachine', event));
}




overlay.addEventListener('click', (event) => { //listens for click on overlay. have to do this since it's a container for the popup
    if (event.target === overlay) { //if they did, then close the popup
        closePopup();
    }
});


xButton.addEventListener('click', closePopup); //if the user clicks on the x, then close the popup