export default
    {
      
   
        name :'@ok',
        headerTagline: [//Line 1 For Header
                        'Hi 👋, I am Aubrey.',
                        //Line 2 For Header
                        'Creative/FrontEnd Developer ',
                        //Line 3 For Header
                        'from Minnesota'
    ],
        //Contact Email
        contactEmail:'aubrey@prginc.com',
       
        abouttext: "Hello, my name is Aubrey Onni Koski(AOK). I was born and raised in Minnesota, where I attended Hopkins High School, before heading to UW-Madison to study Strategic Communications and Journalism(BA), as a Chancellor's Scholar. I'm half Finnish and Half Black(pretty sure I'm the only one ever). I'm passionate about employing my creative talent to help others. I'm an aspiring Creative Director, with a unique set of skills that makes me very dangerous. I'm a published journalist, but my true calling is creative ideation, whether it be branding, copywriting, design, or front-end development.",
        aboutImage:'./profpic.jpg',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
    
       projects:[
           {
            id: 1,
            title:'The Peace Project', 
             service:'UI/UX Design, Branding', 
      
             imageSrc:"https://imgur.com/UPGOlg4.png",
          
             url:'https://ygajway.github.io/Project_01/index.html'
            },
            {
                id: 2,
                title: 'Progress Insight',
                service: 'Branding, Frontend',
                imageSrc: "https://imgur.com/QJ2iKuf.png",
                url: 'https://bigtunaproj.herokuapp.com/'
            },
            { 
                id: 3,
                title: 'NoteTaker',
                service: 'Web App',
                imageSrc: "https://imgur.com/GoJycXD.png",
                url: 'https://ancient-oasis-02957.herokuapp.com/'
            },
            {
                id: 4,
                title: 'Fitness Tracker',
                service: 'Web App',
                imageSrc: "https://imgur.com/1x7awBU.png",
                url: 'https://young-sands-52271.herokuapp.com/'
           }

                    /*

                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
           
            {   name:'Github',
                url:'https://github.com/Aokoski'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/aubrey-koski-7a95999a/'
            }
           

        ]
    }