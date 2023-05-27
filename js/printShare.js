function ToPDF(){
    const text = document.getElementsByClassName("story-p")[0].innerText

    const storyBox = document.createElement("div")
    storyBox.innerHTML = "<p>" + text + "</p>"
    storyBox.style.padding = "1.7rem"
    storyBox.style.display = "flex"
    storyBox.style.flexDirection = "column-reverse"
    storyBox.style.justifyContent = "space-around"
    storyBox.style.backgroundColor = "snow"
    storyBox.style.color = "#333"
    storyBox.style.fontSize = "clamp(1.3rem, 2vw + 0.5rem, 1rem)"
    storyBox.style.lineHeight = "1.4"
    storyBox.style.border = "5px solid black"
    
    var opt = {
        margin:       1,
        filename:     'myStory.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    }
    html2pdf().set(opt).from(storyBox).save()
}

function ToPDFBlank(){
    let text = ""
    if(document.title.includes("Secret Lives of Cats")){
        text = "I went downstairs one [__________](time of day) to get a glass of [__________](beverage), and I saw our cat, [__________](pet's name), sitting on the [__________](furniture). But beside him was another cat, a(n) [__________](color) one I’d never seen before. They didn’t see me sneak into the nearby [__________](room), so they continued to sit there calmly. Then all of a sudden I heard a shout, “[__________](interjection)!” As I peeked around the corner, I saw another cat, this one a(n) [__________](color) tabby. He was wearing a [__________](hat) and stood on his hind legs with his paws on his side. “What do you think you’re doing? Humans need to be supervised at all times!” The other strange cat was just [__________](-ing verb) and [__________](-ed verb). “It’s fine, relax. We’re taking a break, besides we just–” My cat spotted me and we made eye contact. All of a sudden they dropped into a regular cat posture and meowed at each other innocently and the two strange cats disappeared."
    } else if(document.title.includes("Dia De Los Muertos")){
        text = "Hace mucho tiempo, en un(a) [__________](adjetivo) pueblo de México, llegó el Día de los Muertos. La gente preparó altares con [__________](sustantivo), [__________](sustantivo) y [__________](sustantivo) para honrar a sus seres queridos que habían [__________](verbo) hace mucho tiempo. Los colores brillantes de las flores [__________](adjetivo) de cempasúchil y las velas [__________](adjetivo) iluminaban las calles. Los niños se disfrazaron con disfraces [__________](adjetivo) de calaveras y [__________](verbo) por las calles. Las familias comieron comida [__________](adjetivo) tradicional, como tamales y pan de muerto, y bebieron [__________](sustantivo) caliente. Todos compartieron historias de sus [__________](sustantivo) mientras disfrutaban de la festividad."
    } else if(document.title.includes("Hiking in the Mountains")){
        text = "Once upon a time, a group of [__________](adjective) friends decided to hike mount [__________](name). They packed [__________](plural noun), a [__________](noun), and put on their hiking boots. On the hike, their boots made a \"[__________](sound)\" sound on the trail. At the top, they were amazed by the amazing view of the mountains and valleys. They took [__________](adjective) photos and celebrated their achievement. Going down the mountain they sang songs, and talked about the fun on their adventure. Next time, they will [__________](verb) to the peak of the mountain."
    } else if(document.title.includes("Robot Apocalypse")){
        text = "In the year [__________](year), robots became [__________](adjective) and turned on their human creators. They [__________](verb) everything in sight, causing [__________](noun) and chaos. People had to [__________](verb) to survive, forming small groups and hiding from the [__________](adjective) machines. But there was a glimmer of hope when a team of [__________](adjective) scientists developed a new weapon that could [__________](verb) the robots. The weapon was delivered to the battlefield by a group of [__________](adjective) warriors who fought their way through the robot hordes. With the robots disabled, humanity was able to [__________](verb) once again and begin rebuilding their world."
    }
    

    const storyBox = document.createElement("div")
    storyBox.innerHTML = "<p>" + text + "</p>"
    storyBox.style.padding = "1.7rem"
    storyBox.style.display = "flex"
    storyBox.style.flexDirection = "column-reverse"
    storyBox.style.justifyContent = "space-around"
    storyBox.style.backgroundColor = "snow"
    storyBox.style.color = "#333"
    storyBox.style.fontSize = "clamp(1.3rem, 2vw + 0.5rem, 1rem)"
    storyBox.style.lineHeight = "1.4"
    storyBox.style.border = "5px solid black"
    
    var opt = {
        margin:       1,
        filename:     'madLibs.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    }
    html2pdf().set(opt).from(storyBox).save()
}