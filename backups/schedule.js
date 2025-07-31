$(document).ready(function () {
  //variable that holds all the info

  //variable that holds all the info
  var original_info = [
    {
      name: "Jamboree Highlight Reel #1 (Weekend Recap)",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTU5",
      region: "-",
      location: "-",
      track: "Featured",
      time: "11,17,0640,10",
      title: "iGEM Foundation",
      description:
        "Missed something during the Giant Jamboree? Don’t worry, We got you! The Highlight Reel will bring to you an event round up from the weekend, so that you can stay updated as the Jamboree progresses",
      event_type: "Livestream",
      event_id: "111",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Future-proofing your project",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTYw",
      region: "-",
      location: "-",
      track: "Sustainability",
      time: "11,17,0700,45",
      title: "iGEM SDG Working Group",
      description:
        "Ultimately, your work is not meant to stay in the lab: you want it to contribute to the Sustainable Development Goals (SDGs). However, in making the leap from lab to practice, your project may have all sorts of uncertain impacts on its users, communities or the environment. Thinking carefully and integrally about how your work affects the world, and how the world affects your work, is vital to future-proofing your project. Therefore, we‘re building tools that can help you anticipate potential impacts of your work on the SDGs and to reflect on broad underlying values, such as safety and equity. And we want to ask the iGEM community for help! In this hands-on session, you will get acquainted with a prototype of the tools, and we warmly welcome any feedback or idea`s you may have!",
      event_type: "Workshop",
      event_id: "7.1",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Navigating iGEM and beyond: The Mentorship Network and Eduhall",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTYx",
      region: "-",
      location: "-",
      track: "Education,Accessibility",
      time: "11,17,0800,30",
      title: "After iGEM Education Committee",
      description:
        "Join us in the unveiling of two of our initiatives:  the Mentor Network and EduHall. Our flagship Mentorship Program brought together experienced iGEMers to create a positive impact with their unique knowledge. We are taking this program a step further for the benefit of participating iGEM teams by creating a network of past, present and potential mentors. We also envisage EduHall, an initiative focused on curating resources to help teams facing common yet crucial technical and non-technical challenges in iGEM. ",
      event_type: "Interactive Session",
      event_id: "9.1",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Global Biotech Revolution: GapSummit",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTYy",
      region: "-",
      location: "-",
      track: "Innovation,Networking",
      time: "11,17,0800,45",
      title: "Global Bioeconomy Summit",
      description:
        "Join us for a fireside chat with some of the 100 young leaders from GapSummit who are working on new ventures to create a better bioeconomy!",
      event_type: "Panel  Discussion",
      event_id: "39",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "iGEM Pub Quiz",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTYz",
      region: "-",
      location: "-",
      track: "Fun",
      time: "11,17,0900,60",
      title: "Measurement Committee",
      description:
        "Test your iGEM and SynBio knowledge, as well as your team work, with a pub quiz that combines quick-fire questions with an online scavenger hunt!",
      event_type: "Pub Quiz",
      event_id: "8",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "iGEM Career Fair",
      link: "https://live.remo.co/e/igem-2020-career-fair",
      region: "-",
      location: "-",
      track: "Career,Networking",
      time: "11,17,0900,90",
      title: "iGEM Foundation",
      description:
        "iGEM is hosting a career fair event on Tuesday, November 17, to foster relationships within the synthetic biology community. This unique opportunity offers top employers a chance to meet with iGEM participants and discuss career opportunities. Be sure to prepare your resume or CV!",
      event_type: "Networking",
      event_id: "38",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "How iGEM teams are using SnapGene and Geneious",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTY1",
      region: "-",
      location: "-",
      track: "Innovation,Knowledge",
      time: "11,17,0900,45",
      title: "SnapGene | Geneious",
      description:
        "Join us as we introduce you to SnapGene and Geneious’s core features and how other iGEM teams are using them to create successful experiments. In this webinar, we’ll demonstrate the best ways to plan, visualize and document molecular biology procedures with SnapGene and unlock the value of your sequence data with Geneious.",
      event_type: "Webinar",
      event_id: "48.1",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Beyond an iGEM team: how to stay connected with other local iGEMers after the competition",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTY2",
      region: "-",
      location: "-",
      track: "Networking,Accessibility",
      time: "11,17,1000,45",
      title: "iGEM Ambassadors",
      description:
        "Have you ever wondered what happens after iGEM? Do you wish to stay connected with other iGEM Alumni? Or perhaps you want to participate actively in the promotion of Synthetic Biology in your local area? Whatever your motivation is, join this Panel Discussion to learn more about the benefits of participating in SynBio Associations and local iGEM Alumni Networks",
      event_type: "Panel  Discussion",
      event_id: "35",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Long term lab sustainability in science with My Green Lab",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTY3",
      region: "-",
      location: "-",
      track: "Innovation,Knowledge",
      time: "11,17,1000,45",
      title: "Promega",
      description:
        "Lab sustainability is increasingly important to the scientific community and iGEMers.  Join Promega Corporation as we welcome Ritika Singh from our partner My Green Lab to talk about lab sustainbility, My Green Lab product and lab certification programs and challenge contests, and the new My Green Lab Ambassador program.  Bring your sustainbility questions and be ready for an energetic discussion.",
      event_type: "Webinar",
      event_id: "57.1",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Synbio Associations Networking ",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTY4",
      region: "-",
      location: "-",
      track: "Networking,Accessibility",
      time: "11,17,1045,30",
      title: "iGEM Ambassadors",
      description:
        "Following up on our Panel about Synbio and Alumni Associations, join us to talk more about how you can start creating and/or engaging with your local iGEMers Network. Participate in our Networking Session to meet and get inspired by local (University/city level) and regional (country/continent level) associations that have been developing amazing work in their communities. Let`s exchange insights and connect!",
      event_type: "Networking",
      event_id: "36",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Keynote: Care How Biology is Used - with Ginkgo Bioworks` Reshma Shetty",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTY5",
      region: "-",
      location: "-",
      track: "Keynote",
      time: "11,17,1300,45",
      title: "Ginkgo Bioworks",
      description:
        "Reshma Shetty co-founded synthetic biology Ginkgo Bioworks, Inc. in 2008. Spun out of MIT, Ginkgo’s mission is to make biology easier to engineer. Started in a Cambridge, MA apartment, Reshma has helped to grow the company to 200 people and raised $450M in financing. In October 2018, Ginkgo launched Bioworks4, its fourth generation facility for design, fabrication and testing of custom designed microbes. Ginkgo is concurrently engineering more than 50 organisms to spec for customers including Ajinomoto, Cargill and ADM. Reshma has been active in the field of synthetic biology for 10+ years and co-organized SB1.0, the first international conference in synthetic biology in 2004. In 2005, Reshma and colleagues founded OpenWetWare.org, a wiki for the free sharing of information among biological and biological engineering researchers. In 2006, she was an advisor to the international Genetically Engineered Machines (iGEM) competition where she was best known for engineering bacteria to smell like bananas and mint. In 2008, Forbes magazine named Reshma one of Eight People Inventing the Future and in 2011, Fast Company named her one of 100 Most Creative People in Business. In 2014, Ginkgo became the first biotech company to participate in YCombinator. In 2018, Business Insider named her one of the most powerful female engineers.",
      event_type: "Lecture+Q&amp;A",
      event_id: "49",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Human Practices, what is it and what does it mean to you?",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTcw",
      region: "-",
      location: "-",
      track: "Knowledge,Feedback",
      time: "11,17,1400,45",
      title: "Human Practices Committee",
      description:
        "Human Practices can set good science apart from incredible achievement. In this session, hear from the committee about where we see the most confusion about what great HP is, and take part in an evolving dicussion about what synthetic biology can and ought to do for the world. ",
      event_type: "Workshop",
      event_id: "19",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Exploring the COVID-19 genome and PCR diagnostics with Benchling",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTcx",
      region: "-",
      location: "-",
      track: "Innovation,Knowledge",
      time: "11,17,1400,45",
      title: "Benchling",
      description:
        "Benchling is a data-management platform built to help scientists design sequences, record notes and datasets, and collaborate on experiments. Rather than spend time using different software tools, paper notebooks, or spreadsheets, iGEMmers using Benchling can spend time focusing on what they care about: synthetic biology. In this interactive workshop,we will introduce how to use Benchling through a fun guided activity exploring the COVID-19 genome and visualize how PCR is used to detect the virus. Attendees can enter into a raffle afterwards to win a Benchling t-shirt!",
      event_type: "Workshop",
      event_id: "58",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Shape iGEM`s Code of Responsible Communication",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTcy",
      region: "-",
      location: "-",
      track: "Governance",
      time: "11,17,1500,30",
      title: "Safety &amp; Security Committee, Human Practices Committee",
      description:
        "iGEM teams are ambassadors for the global synthetic biology community, how you communicate may have a large impact beyond the competition. iGEM is considering introducing a Code of Responsible Communication specifically to address how teams communicate their science. This is your chance to shape that policy! ",
      event_type: "Discussion Workshop",
      event_id: "26.1",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "The Evolution of Synthetic Biology: a Fireside chat with IDT experts",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTcz",
      region: "-",
      location: "-",
      track: "Featured,Partner",
      time: "11,17,1500,30",
      title: "Integrated DNA Technologies (IDT)",
      description:
        "In the last few decades, synthetic biology has emerged making great strides in genomics, understanding evolution, and systems biology. In this workshop, join IDT’s Director of Innovation Adam Clore and Director of Business Development Tom Speedy as they discuss the progress of synthetic biology, where it is today, and what sustainable biological solutions continue to emerge and impact our lives.  ",
      event_type: "Panel  Discussion",
      event_id: "55",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "CRISPR: a powerful, yet accessible gene editing tool for any research application",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTc0",
      region: "-",
      location: "-",
      track: "Innovation,Knowledge",
      time: "11,17,1515,45",
      title: "GenScript",
      description:
        "Join us in listening to James Chon, Field Application Scientist at GenScript, about how CRISPR can benefit your research and some of its cutting-edge applications.",
      event_type: "Lecture+Q&amp;A",
      event_id: "53",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "SynBio SciFi Fair",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTc1",
      region: "-",
      location: "-",
      track: "Creativity,Fun",
      time: "11,17,1530,30",
      title: "SynBio SciFi Group",
      description:
        "Join us for an exhibtion of +16 SynBio inspired original works developed by the participants throughout the season, with authors from Africa, Asia, Europe, Latin America and North America.",
      event_type: "Interactive Session",
      event_id: "5",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Industry or Academia: Inspiration to decide",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTc2",
      region: "-",
      location: "-",
      track: "Innovation,Networking",
      time: "11,17,2000,45",
      title: "After iGEM Industry Committee",
      description:
        "Have you ever questioned yourself about what`s next in your career path? Join us to get a broader perspective, guidance and inspiration about what`s out there in academia and in the synbio industry for you.  Get first handed experiences from our top Alumni experts in this fields. ",
      event_type: "Panel  Discussion",
      event_id: "13",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "CCiC: from Meet Up to Community",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTc3",
      region: "-",
      location: "-",
      track: "Networking,Accessibility",
      time: "11,17,2100,30",
      title: "CCiC (Conference of China iGEMer Committee)",
      description:
        "Conference of China iGEMer Community is an annual meet up in China started in 2014. During August 2020, we held the 7th CCiC online, with seventy teams and a thousand iGEMers participated. Beyond iGEM, CCiC also had lectures and workshops from academia and industry, live stream panel discussion, online courses, wiki freeze coffee and other activities. Here, we want to share our progress and experience with the entire iGEM community, and looking forward to collaborate with teams, institutions and communities across the world",
      event_type: "Webinar",
      event_id: "45",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Keynote: SENAI Approach to Deliver Sustainable Industrial Solutions Using Synbio",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTc4",
      region: "-",
      location: "-",
      track: "Keynote",
      time: "11,17,2130,45",
      title: "SENAI",
      description:
        "Aline S. Romão-Dumaresq holds a diploma degree in Agronomic Engineering from the University of São Paulo (USP), with a concentration area in Biotechnology. She finished her Ph.D. in Genetics at the University of São Paulo (USP) in 2010, and part of her Ph.D. was developed at the University of Exeter, United Kingdom. She was a Research Post-Doctoral fellow in Computational Biology at Oswaldo Cruz Institute (IOC) – FIOCRUZ (2012).  Subsequently, she joined the Renewable Technologies Innovation team at the petrochemical company BRASKEM, where she was a Biotechnology Researcher and worked on the production of green products using genetically modified microbial cells in bioprocesses. In the end of 2015, she started working at SENAI Innovation Institute for Biosynthetics and Fibers (SENAI CETIQT). There, she was responsible for setting up the Biotechnology sector. Currently, she is the Coordinator of the Biotechnology sector at that Institute and leads a group of 23 professionals.",
      event_type: "Livestream",
      event_id: "64",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Jamboree Highlight Reel #2 (Tuesday Recap)",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTc5",
      region: "-",
      location: "-",
      track: "Featured",
      time: "11,18,0640,10",
      title: "iGEM Foundation",
      description:
        "Missed something during the Giant Jamboree? Don’t worry, We got you! The Highlight Reel will bring to you an event round up from Tuesday, so that you can stay updated as the Jamboree progresses",
      event_type: "Livestream",
      event_id: "112",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Climate Challenge Hackathon",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTgw",
      region: "-",
      location: "-",
      track: "Sustainability",
      time: "11,18,0700,60",
      title: "SDG Working Group",
      description:
        "Come and join us for an entrepreneurial &amp; design thinking based ideation session focused on the climate challenges in Food, Health and Water - To win a spot in the EPIC 2021 program. ",
      event_type: "Workshop",
      event_id: "2",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "iGEM Measurement Feedback Session",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTgx",
      region: "-",
      location: "-",
      track: "Feedback",
      time: "11,18,0700,45",
      title: "Measurement Committee",
      description:
        "The iGEM Measurement Committee wants to hear from you! We will review the committee`s activities in 2020 and ask for feedback and ideas to help plan for 2021. What worked well and what could be improved? What do teams need help with? What protocols and units should we focus on in 2021?",
      event_type: "Interactive Session",
      event_id: "10",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "BioFutures 2020",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTgy",
      region: "-",
      location: "-",
      track: "Innovation,Networking",
      time: "11,18,0800,45",
      title: "Hello Tomorrow",
      description:
        "Join us as we share insights from a year of dialogues with EU biotech researchers, startups &amp; industry to present what challenges remain to facilitate a sustainable Biofuture. ",
      event_type: "Webinar",
      event_id: "4",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Next-Level Biosecurity: Dual Use Research of Concern Workshop",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTgz",
      region: "-",
      location: "-",
      track: "Governance",
      time: "11,18,0800,120",
      title: "Safety &amp; Security Committee, Human Practices Committee",
      description:
        "Why should we concern ourselves with biosecurity beyond the safety form? Dual Use Research of Concern and the publics’ conception of risks pose a threat to free research. The aim of this interactive workshop is to enable you to evaluate Dual Use Research of Concern risks to bring your biosecurity considerations to the next level.      ",
      event_type: "Workshop",
      event_id: "37",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Celebrating and Discussing Mentorship in iGEM",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTg0",
      region: "-",
      location: "-",
      track: "Education,Networking,Fun",
      time: "11,18,0900,45",
      title: "After iGEM Education Committee",
      description:
        "Every iGEM team knows that some challenges are best addressed by working with a good mentor. We will recognize outstanding mentors from the 2020 After iGEM mentorship program, followed by an interactive discussion where all may share experiences with mentorship and suggest improvements for next year`s program. If you are interested in helping iGEM teams succeed, please come through!",
      event_type: "Interactive Session",
      event_id: "11",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "The future of biological parts screening",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTg1",
      region: "-",
      location: "-",
      track: "Governance",
      time: "11,18,1000,45",
      title: "Safety &amp; Security Committee, Human Practices Committee",
      description:
        "Recent advances in data science are transforming biological parts screening. Hear from experts on questions like: Can we tell who engineered DNA? Can we tell if DNA codes for something dangerous?  How should we govern sequence synthesis? and discuss how iGEM`s parts should be screened in the future.",
      event_type: "Talks + Q&amp;A",
      event_id: "25",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Women in iGEM and STEM",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTg2",
      region: "-",
      location: "-",
      track: "Inclusion,Accessibility",
      time: "11,18,1000,60",
      title: "iGEM Ambassadors",
      description:
        "What does it mean to involve and engage women in STEM, synbio, and broadly biotech? After listening to amazing advice from our guests of the After iGEM Women in STEM Interview Series, now we want to showcase and connect iGEM teams that have been working to promote gender diversity and women in science. Also, we want to get to know all of you in the biotech and synbio world and how you envision this for the future. Join our networking session targeted towards women in STEM looking to connect with other women, but open to all those looking to discuss more!",
      event_type: "Wokrshop/Networking",
      event_id: "33",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "How iGEM teams are using SnapGene and Geneious",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTg3",
      region: "-",
      location: "-",
      track: "Innovation,Knowledge",
      time: "11,18,1000,45",
      title: "SnapGene | Geneious",
      description:
        "Join us as we introduce you to SnapGene and Geneious’s core features and how other iGEM teams are using them to create successful experiments. In this webinar, we’ll demonstrate the best ways to plan, visualize and document molecular biology procedures with SnapGene and unlock the value of your sequence data with Geneious.",
      event_type: "Webinar",
      event_id: "48.2",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "iGEM Brew: Bring your own coffee, unless you want some of our FRaPPe.",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTg4",
      region: "-",
      location: "-",
      track: "Networking,Fun",
      time: "11,18,1100,30",
      title: "IISER_Berhampur",
      description:
        "An interactive event where teams can reminisce their experiences during iGEM 2020. The unprecedented pandemic has gone a long way in influencing our work, and here we can share our reflections on the same.   How did we grow as a team? And what were the anticipated moments we missed and the moments we enjoyed during our online journey to the Jamboree?",
      event_type: "Interactive Session",
      event_id: "43",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Ginkgo Bioworks Challenge: How to make biology easier to engineer?",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTg5",
      region: "-",
      location: "-",
      track: "Innovation,Fun,Sponsor",
      time: "11,18,1100,60",
      title: "Ginkgo Bioworks",
      description:
        "Biology is the best manufacturing platform on the planet. But engineering living cells is hard—evolution is four billion years ahead of us. We want to hear from you: How can we make biology easier to engineer? Submit your team’s idea and selected teams will pitch to a panel of Ginkgo Bioworks judges (and SynBio rockstars!): Christina Agapakis, Patrick Boyle, and Tom Knight! Impress the judges and the audience to win Ginkgo’s prize: DNA synthesis as Twist plasmids and Ginkgo mentorship to make your idea a reality. Join us, and let’s make biology easier and funnier to engineer together. Apply before November 16, 23:59 EST. Visit 2020.igem.org for more info!",
      event_type: "Workshop",
      event_id: "59",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Keynote: High School iGEM: Reflections and Future",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTkw",
      region: "-",
      location: "-",
      track: "Keynote",
      time: "11,18,1300,45",
      title: "iGEM Foundation",
      description:
        "Join us for a discussion of High School iGEM. What is the shared history, successes, and challenges that High School students and their advisors face? The session will begin with a keynote by Janet Standeven, iGEM advisor to the Lambert_GA team and a member of Human Practices Committee. After the keynote, the meeting will allow attendees to interact and share best practices as well as brainstorm ideas for the future.",
      event_type: "Lecture+Q&amp;A",
      event_id: "50",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Future-proofing your project",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTkx",
      region: "-",
      location: "-",
      track: "Sustainability",
      time: "11,18,1400,45",
      title: "iGEM SDG Working Group",
      description:
        "Ultimately, your work is not meant to stay in the lab: you want it to contribute to the Sustainable Development Goals (SDGs). However, in making the leap from lab to practice, your project may have all sorts of uncertain impacts on its users, communities or the environment. Thinking carefully and integrally about how your work affects the world, and how the world affects your work, is vital to future-proofing your project. Therefore, we‘re building tools that can help you anticipate potential impacts of your work on the SDGs and to reflect on broad underlying values, such as safety and equity. And we want to ask the iGEM community for help! In this hands-on session, you will get acquainted with a prototype of the tools, and we warmly welcome any feedback or idea`s you may have!",
      event_type: "Workshop",
      event_id: "7.2",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Navigating iGEM and beyond: The Mentorship Network and Eduhall",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTky",
      region: "-",
      location: "-",
      track: "Education,Accessibility",
      time: "11,18,1400,30",
      title: "After iGEM Education Committee",
      description:
        "Join us in the unveiling of two of our initiatives:  the Mentor Network and EduHall. Our flagship Mentorship Program brought together experienced iGEMers to create a positive impact with their unique knowledge. We are taking this program a step further for the benefit of participating iGEM teams by creating a network of past, present and potential mentors. We also envisage EduHall, an initiative focused on curating resources to help teams facing common yet crucial technical and non-technical challenges in iGEM. ",
      event_type: "Interactive Session",
      event_id: "9.2",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Improved methods for CRISPR HDR using Alt-R modified dsDNA donors and Alt-R HDR Enhancer ",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTkz",
      region: "-",
      location: "-",
      track: "Innovation,Knowledge,Sponsor",
      time: "11,18,1400,30",
      title: "Integrated DNA Technologies (IDT)",
      description:
        "CRISPR-based homology-directed repair (HDR) is an invaluable tool for researchers looking to make precise, specific mutations in a genomic region of interest. Unfortunately, HDR is a challenge for many as efficiency is often low. HDR repair outcomes with CRISPR/Cas systems are most efficient with single-stranded DNA templates when small insertions, deletions, or SNP changes are desired edits. Here, we present work demonstrating that improved efficiency in HDR rates for large insertions is obtained. Learn how IDT’s Alt-R modified dsDNA donor templates and the Alt-R HDR Enhancer V2 allows researchers to maximize HDR rates for their large knock-in experiments.",
      event_type: "Webinar",
      event_id: "56",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Same but different: a global perspective in the synbio industry",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTk0",
      region: "-",
      location: "-",
      track: "Innovation,Career",
      time: "11,18,1430,45",
      title: "After iGEM Industry Committee",
      description:
        "Join us to get to know the differences in the Synbio industry needs and get a broader perspective into several regions around the world",
      event_type: "Panel  Discussion",
      event_id: "12",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "GenScript Interview Reunion with sponsored teams",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTk1",
      region: "-",
      location: "-",
      track: "Networking,Innovation",
      time: "11,18,1515,45",
      title: "GenScript",
      description:
        "Join us as we reunite with our Interviewed teams for a Trivia Night! We will be hosting a GenScript/MolecularCloud Interview Reunion. Our interviewees will join us once again to play some Trivia and catch up with the teams!",
      event_type: "Interactive Session",
      event_id: "54",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Survey Roast Trivia: Spot the Mistakes!",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTk2",
      region: "-",
      location: "-",
      track: "Fun,Knowledge",
      time: "11,18,1530,30",
      title: "Human Practices Committee",
      description:
        "Did your team distribute a survey this year as a part of your human practices effort? Join the HP committee as we host trivia for the most common pitfalls in poor survey research design. Prizes and light-hearted roasting abound! ",
      event_type: "Interactive Session",
      event_id: "21",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Cyberbiosecurity: Immunize Your Web Applications",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTk3",
      region: "-",
      location: "-",
      track: "Governance",
      time: "11,18,2000,30",
      title: "FBI",
      description:
        "Scott Narwrocki of the FBI will demonstrate the stages of a network based cyber attack against a vulnerable web based bioinformatics application. Critical Security Controls will be outlined to address the aforementioned vulnerabilities. Finally, the Bioengineering Systems Kill Chain will be reviewed to address steps an attacker would take to disrupt a cyber and physical application.",
      event_type: "Webinar",
      event_id: "27.3",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "It Came From A Lab: Responsible Synbio Beyond Containment",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTk4",
      region: "-",
      location: "-",
      track: "Governance",
      time: "11,18,2030,30",
      title: "Safety &amp; Security Committee",
      description:
        " Many synthetic biology projects won`t realize their full potential unless they move outside of labs or other highly-controlled environments and into the environment. Can we do this safety and responsibly? You can shape iGEM`s future policies!",
      event_type: "Discussion",
      event_id: "24.1",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Safeguarding Science and the Future",
      link: "https://app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU2OTk5",
      region: "-",
      location: "-",
      track: "Governance",
      time: "11,18,2100,30",
      title: "FBI",
      description:
        "Join Ed You from the FBI for a presentation on the bioeconomy and its connections to biosecurity.",
      event_type: "Webinar",
      event_id: "27.2",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Youth Roadmap for the Future of the Bioeconomy ",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDAw",
      region: "-",
      location: "-",
      track: "Career,Innovation",
      time: "11,19,0600,120",
      title: "Global Bioeconomy Summit",
      description:
        "GBS youth champions are organizing a workshop that will bring together young people from across the world to help construct a bioeconomy roadmap. The roadmap will consist of short, medium and long terms goals that young people can work towards to help promote innovation and sustainability in biotech ",
      event_type: "Workshop",
      event_id: "29",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Jamboree Highlight Reel #3 (Wednesday Recap)",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDAx",
      region: "-",
      location: "-",
      track: "Featured",
      time: "11,19,0640,10",
      title: "iGEM Foundation",
      description:
        "Missed something during the Giant Jamboree? Don’t worry, We got you! The Highlight Reel will bring to you an event round up from Wednesday, so that you can stay updated as the Jamboree progresses",
      event_type: "Livestream",
      event_id: "113",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Shape iGEM`s Code of Responsible Communication",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDAy",
      region: "-",
      location: "-",
      track: "Governance",
      time: "11,19,0700,30",
      title: "Safety &amp; Security Committee, Human Practices Committee",
      description:
        "iGEM teams are ambassadors for the global synthetic biology community, how you communicate may have a large impact beyond the competition. iGEM is considering introducing a Code of Responsible Communication specifically to address how teams communicate their science. This is your chance to shape that policy! ",
      event_type: "Discussion Workshop",
      event_id: "26.2",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "The Rise of Synthetic Biology in Africa-Alumni Reunion Time",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDAz",
      region: "-",
      location: "-",
      track: "Networking,Meetup",
      time: "11,19,0730,45",
      title: "iGEM Ambassadors",
      description:
        "For the last 10 years, African teams have been participating in iGEM, started small but growing bigger and bigger each year. We have a number of Alumni and friends that are making it possible to grow Synthetic Biology in Africa which has been a new concept. We have always found it challenging to attend the Jambore due many challenges including Visas and Costs involved. However, this year comes with its own blessings and chances, its the for us to discover our Alumni, have a sense of belonging and relate with buddies (the iGEM Community). It will be a session to remember, great experience. We will be joined by the Co-Founder of Synbio Africa.",
      event_type: "Workshop",
      event_id: "31",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "How To Successfully Pitch Yourself In Academia",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDA0",
      region: "-",
      location: "-",
      track: "Knowledge,Career",
      time: "11,19,0800,45",
      title: "After iGEM Academia Committee",
      description:
        "iGEM is a platform that has inspired many alumni to pursue graduate and academic careers. In this workshop, we aim to reflect on how budding iGEMers might want to approach applying for positions related to academia. The session will explore a range of tips-and-tricks, and we will focus on conveying important considerations and nuances one should contemplate during the decision making process.",
      event_type: "Webinar",
      event_id: "14",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Human Practices Spotlight: Megan Palmer and Ruipeng Lei in Conversation",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDA1",
      region: "-",
      location: "-",
      track: "Knowledge",
      time: "11,19,0815,30",
      title: "Human Practices Committee",
      description:
        "Join Megan Palmer, a longtime Human Practices leader at iGEM, in conversation with Ruipeng Lei, a leading Chinese bioethicist, for a conversation touching on issues like cultures of responsibility, the definition of human practices, and constrasting gene edited babies with basic research.",
      event_type: "Webinar",
      event_id: "20",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "iGEM 2020: Finalist Announcement",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDA2",
      region: "-",
      location: "-",
      track: "iGEM 2020 Competition",
      time: "11,19,0900,35",
      title: "iGEM 2020 Competition",
      description:
        "Join us for the live announcement of the 7 iGEM 2020 Finalists!  We will play the finalists` presentation videos following the announcement and will have highlights from those teams throughout the day. Long time iGEM community member, Kristin Ellis, will announce the finalists.",
      event_type: "Webinar",
      event_id: "99",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "The birth of Synthetic Biology &amp; iGEM - with Drew Endy",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDA3",
      region: "-",
      location: "-",
      track: "Keynote",
      time: "11,19,0945,45",
      title: "After iGEM",
      description:
        "Join Zeeshan (iGEM Ambassador to Australia) for a video version of After iGEM Podcast! In this episode: Drew Endy is a member of the bioengineering faculty at Stanford University and the President of the BioBricks Foundation. He is also the co-founder of iGEM! Join us for this very exciting episode where Zeeshan talks to Drew about turning biology into an engineering discipline, the birth of synbio and iGEM, and the future of synbio education.",
      event_type: "Livestream",
      event_id: "62",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "It’s time to Decode the World! - with Arvind Gupta and Po Branson",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDA4",
      region: "-",
      location: "-",
      track: "Keynote",
      time: "11,19,0945,45",
      title: "After iGEM",
      description:
        "Join Zeeshan (iGEM Ambassador to Australia) for a video version of After iGEM Podcast! On this episode: Arvind Gupta and Po Bronson talk about their new book, Decoding The World: A roadmap for the questioner. Arvind is the founder and a venture advisor at IndieBio, the world`s leading science accelerator with 136 companies to date. Po is the Managing Director of IndieBio. He`s the author of seven bestselling books, including the #1 New York Times bestseller What Should I Do With My Life? Join us for this incredibly fun episode where we decode the real cause of the pandemic, climate change, iGEM, and synbio and silicon valley!",
      event_type: "Livestream",
      event_id: "63",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Collaborative Science in the 21st Century",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDA5",
      region: "-",
      location: "-",
      track: "Partnership",
      time: "11,19,1030,45",
      title: "Just One Giant Lab (JOGL)",
      description:
        "Have you always wanted to build international collaborations to support your iGEM project, but not known how or where to start? Join this workshop to learn the best practices for open science collaborations from Just One Giant Lab (JOGL), an online mobilization platform for collective problem-solving! Come share your successes, failures, and ideas regarding your endeavors in iGEM, and find out how to set up your next scientific collaboration for success. We look forward to shaping the future of open science with you! ",
      event_type: "Webinar",
      event_id: "3",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Biosecurity in the Time of COVID-19",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDEw",
      region: "-",
      location: "-",
      track: "Governance",
      time: "11,19,1030,60",
      title: "FBI",
      description:
        "Scientists will save the world. But as new technologies are developed to benefit humankind, scientists must actively work to safeguard these developments from being subverted. As the world works to recover from a pandemic, the importance of biosecurity has become even more apparent. What can you do, and who can help? Come find out with Susan Cropp and Josh Cantor from the FBI.",
      event_type: "Webinar",
      event_id: "27.1",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Informatics tools and NEB enzymes to enable one-pot Golden Gate Assemblies of unprecedented complexity​",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDEx",
      region: "-",
      location: "-",
      track: "Innovation,Knowledge",
      time: "11,19,1030,45",
      title: "New England Biolabs (NEB)",
      description:
        "Accelerate your Design-Build-Test cycle with Golden Gate Assembly (GGA) reagents and informatics design tools from NEB! Recent advances in understanding the fidelity, bias, and efficiency of fragment assembly in GGA now allow for assemblies of unprecedented complexity and target size in one pot – over 50 fragments, with assemblies of up to 40kB demonstrated. Data-optimized Assembly Design (DAD) using informatics tools with NEB enzymes, kits and workflows allow rapid and accurate production of large targets from many fragments with minimal screening of products required.  Join NEB scientists for a discussion of the latest innovations in DNA assembly. ",
      event_type: "Webinar",
      event_id: "60.1",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Bioinspired Valuation Models",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDEy",
      region: "-",
      location: "-",
      track: "Innovation,Knowledge",
      time: "11,19,1200,60",
      title: "Doughnut Economics Action Lab, EPIC",
      description:
        "Join us to explore new sustainable models for valuation that go beyond % growth!",
      event_type: "Workshop",
      event_id: "6",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Keynote: A New Role for Biofoundries in Rapid Development and Validation of Automated SARS-CoV-2 Clinical Diagnostic - Paul Freemont",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDEz",
      region: "-",
      location: "-",
      track: "Keynote",
      time: "11,19,1300,45",
      title: "iGEM Foundation",
      description:
        "Professor Freemont is Head of the Section of Structural and Synthetic Biology in the Department of Infectious Disease at Imperial College. The Section is based in South Kensington Sir Alexander Fleming Building and focuses on the molecular mechanisms of human disease and infection using the tools of integrated structural biology comprising X-ray crystallography, Cryo-EM and associated biophysical, spectroscopic and cellular techniques. The Section is also leading the London Consortium for Cryo-EM (LonCEM) with partners Kings College, Institute of Cancer Research, Queen Mary University and the Francis Crick Institute. In addition the Section also has research programs in synthetic biology focused on automation, cell free systems, microbiome engineering, low cost viral and pathogenic biosensors and novel natural product discovery. Professor Freemont is also co-founder of the Imperial College Centre for Synthetic Biology (2009) and co-founder/co-director of the National UK Innovation and Knowledge Centre for Synthetic Biology (SynbiCITE, since Oct 2013) at Imperial College London. The Centre aims to enable synthetic biology research in application areas like biosensors, biosynthesis, bioprocessing and metabolic and genome engineering and enable the translation of new synthetic biology technologies into start-ups, SME`s and industry.",
      event_type: "Lecture+Q&amp;A",
      event_id: "51",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Human Practices Bingo!",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDE0",
      region: "-",
      location: "-",
      track: "Fun,Feedback",
      time: "11,19,1400,45",
      title: "Human Practices Committee",
      description:
        "Join the Human Practices Committee for a few rounds of BINGO! Teams are invited to fill out their bingo cards covering different activities that iGEM considers good `Human Practices. Round winners will receive fabulous prizes and be encouraged to share their experience about an interesting aspect of their human practices for their project that year.",
      event_type: "Interactive Session",
      event_id: "18",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Creative Storytelling in Synthetic Biology - with Ginkgo Bioworks` Grace Chuang",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDE1",
      region: "-",
      location: "-",
      track: "Innovation,Knowledge,Sponsor",
      time: "11,19,1400,45",
      title: "Ginkgo Bioworks",
      description:
        "What if we could grow everything? What does designing with biology really mean? In this talk, Grace Chuang from Ginkgo’s Creative Team shares how navigating the intersections of art, science, society, and identity can help us to envision the future of synthetic biology, and how you can be a part of it too.",
      event_type: "Talk + Q&amp;A",
      event_id: "47",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Science Communication Careers: An Exploratory Journey",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDE2",
      region: "-",
      location: "-",
      track: "Career,Accessibility",
      time: "11,19,1500,60",
      title: "After iGEM Communications Committee",
      description:
        "Highlighting science communication from different perspectives for iGEMers, from communication in education, consulting, digital media, entrepreneurship, and policy. Learn about how you can get involved with science communication and why it’s becoming an essential aspect of research beyond bench.",
      event_type: "Panel  Discussion",
      event_id: "22",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "UHC iGEM Minecraft Event",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDE3",
      region: "-",
      location: "-",
      track: "Fun,Networking",
      time: "11,19,1500,60",
      title: "UPF_Barcelona",
      description:
        "The session will consist on a Minecraft ultra-hardcore competition (UHC). Although the name can be misleading, UHC is a minigame that allows for cooperation and competition between groups, thus giving tons of fun to the people participating and watching. The game is similar to what can be seen in the first “Hunger games” movie and it consists on searching for resources by groups in a definite amount of time to then do a final combat between the teams. The last team standing will be the winner, which would receive then a prize.",
      event_type: "Pre-recorded/Live Discussion",
      event_id: "44",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Long term lab sustainability in science with My Green Lab",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDE4",
      region: "-",
      location: "-",
      track: "Innovation,Knowledge",
      time: "11,19,1500,45",
      title: "Promega",
      description:
        "Lab sustainability is increasingly important to the scientific community and iGEMers.  Join Promega Corporation as we welcome Ritika Singh from our partner My Green Lab to talk about lab sustainbility, My Green Lab product and lab certification programs and challenge contests, and the new My Green Lab Ambassador program.  Bring your sustainbility questions and be ready for an energetic discussion.",
      event_type: "Webinar",
      event_id: "57.2",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Future-proofing your project",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDE5",
      region: "-",
      location: "-",
      track: "Sustainability",
      time: "11,19,2000,45",
      title: "iGEM SDG Working Group",
      description:
        "Ultimately, your work is not meant to stay in the lab: you want it to contribute to the Sustainable Development Goals (SDGs). However, in making the leap from lab to practice, your project may have all sorts of uncertain impacts on its users, communities or the environment. Thinking carefully and integrally about how your work affects the world, and how the world affects your work, is vital to future-proofing your project. Therefore, we‘re building tools that can help you anticipate potential impacts of your work on the SDGs and to reflect on broad underlying values, such as safety and equity. And we want to ask the iGEM community for help! In this hands-on session, you will get acquainted with a prototype of the tools, and we warmly welcome any feedback or idea`s you may have!",
      event_type: "Workshop",
      event_id: "7.3",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Jamboree Highlight Reel #4 (Thursday Recap)",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDIw",
      region: "-",
      location: "-",
      track: "Featured",
      time: "11,20,0640,10",
      title: "iGEM Foundation",
      description:
        "Missed something during the Giant Jamboree? Don’t worry, We got you! The Highlight Reel will bring to you an event round up from Thursday, so that you can stay updated as the Jamboree progresses",
      event_type: "Livestream",
      event_id: "114",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Good ideas needs good policy!",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDIx",
      region: "-",
      location: "-",
      track: "Knowledge,Career",
      time: "11,20,0700,75",
      title: "After iGEM Policy Committee",
      description:
        "The year of 2020 showed us the importance of having science as a guideline for creating policies! Countries that have early adopted evidence based solutions to fight the coronavirus have been more successful in flatening the pandemic curve and they`ve been recovering their economies faster. The adoption of science and new technologies in many fields of work needs an interdisciplinary approach, combining educators, communicators, scientists and policymakers. In this workshop, we will have Cornell Alliance for Science share some of their experience in working with science based agricultural practices around the world and with creating policy frameworks that embraces technology and sustainability.",
      event_type: "Webinar/Workshop",
      event_id: "30",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "What is next for the European SynBio ecosystem?",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDIy",
      region: "-",
      location: "-",
      track: "Networking,Accessibility",
      time: "11,20,0700,30",
      title: "EUSynbioS",
      description:
        "Our main missions at the European Synthetic Biology Society (EUSynBioS) are to promote and consolidate the field of synthetic biology in Europe. As the European synthetic biology ecosystem is changing and evolving quickly, EUSynBioS wants to create a discussion with people from all around the world, to see what the future holds for European Synbio, and how we can build a better and more inclusive community. ",
      event_type: "Panel  Discussion",
      event_id: "41",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "High School After Party",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDIz",
      region: "-",
      location: "-",
      track: "Fun,Networking",
      time: "11,20,0800,60",
      title: "After iGEM High School Committee",
      description:
        "An exciting mixer event for iGEM High-school students with ice-breaking activities such as Never Have I ever, Bingo, and sharing the most memorable moments so far with a general theme of their iGEM experience throughout the year as students from all over the world connect with each other over their iGEM experience in the most engaging way possible. A place for them to kick-back and talk after a fruitful year of iGEM. Winners of the games will win a `secret` prize towards the end of the session!",
      event_type: "Talk/Networking",
      event_id: "17",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "iGEM EPIC: Start-up Showcase",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDI0",
      region: "-",
      location: "-",
      track: "Innovation,Career",
      time: "11,20,0830,300",
      title: "iGEM EPIC (Entrepreneurship Program &amp; Innovation Community)",
      description:
        "Join us as we highlight the top iGEM Biofounders from our global community working on our transition to a sustainable bioeconomy. We will be hosting a day of keynotes, panels, pitch competitions and workshops - celebrating iGEM Biofounders success in challenges of Food, Health and Water.",
      event_type: "Start-Up Pitch",
      event_id: "1",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Building an anti-racist STEM community",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDI1",
      region: "-",
      location: "-",
      track: "Inclusion,Diversity",
      time: "11,20,0900,45",
      title: "Diversity &amp; Inclusion Committee",
      description:
        "How can we build a STEM community that is anti-racist? Join the iGEM Diversity and Inclusion commitee as we work together to develop solutions.",
      event_type: "Workshop",
      event_id: "15",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "CCiC Networking Event",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDI2",
      region: "-",
      location: "-",
      track: "Meetup,Networking",
      time: "11,20,1000,30",
      title: "CCiC (Conference of China iGEMer Committee)",
      description:
        "Conference of China iGEMer Community (CCiC) is a national-wide community for Chinese iGEMers, which has a history of 7 years. Join us to celebrate our iGEM experience in 2020, and discuss what we can do to promote our community. Anyone interested in our community is welcome!",
      event_type: "Networking",
      event_id: "46",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Capturing stories of iGEMers: The After iGEM Experience",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDI3",
      region: "-",
      location: "-",
      track: "Career",
      time: "11,20,0930,60",
      title: "After iGEM Communications Committee, iGEM Ambassadors",
      description:
        "After iGEM has taken initiatives such as the iGEM Digest, iGEMers of the  World Podcast and iGEMer of the Month to capture and celebrate the experiences and journey of iGEMers, the discussion will feature team members who are engaged in these project, what they have learnt so far and future goals",
      event_type: "Discussion",
      event_id: "28",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Keynote: A New Beginning In Ghana: Reflections from the journey and a roadmap for the local future of Synthetic Biology and iGEM",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDI4",
      region: "-",
      location: "-",
      track: "Keynote",
      time: "11,20,1300,45",
      title: "iGEM Foundation",
      description:
        "I have completed most of my education at Arizona State University with Bachelor’s degrees in Mathematics and Microbiology, followed by a Master’s Degree in Microbiology and finally my PhD in Bioengineering. I continued my journey in cancer research at Johns Hopkins University followed by a fellowship at Kings College London and established my laboratory at University of Hull looking into the role of the immune modulation in cancer therapies. Currently, I am a senior lecturer at Ashesi University in Ghana in the engineering department. I am passionate about teaching and I am interested in how to challenge students to develop unique and novel solutions to problems. Using current challenges along with research and engineering principles as motivators I strive to inspire their curiosity and desire to approach even the most daunting problems. My research interests lie in how to use principles of synthetic biology and biological inspiration to solve some of the problems facing the African continent. I am particularly fascinated by how to use the complexity and connectivity of the immune system in the context of cancer and other tropical diseases such as malaria to build a specific and personalized treatment.",
      event_type: "Lecture+Q&amp;A",
      event_id: "52",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "It Came From A Lab: Responsible Synbio Beyond Containment",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDI5",
      region: "-",
      location: "-",
      track: "Governance",
      time: "11,20,1400,30",
      title: "Safety &amp; Security Committee",
      description:
        " Many synthetic biology projects won`t realize their full potential unless they move outside of labs or other highly-controlled environments and into the environment. Can we do this safety and responsibly? You can shape iGEM`s future policies!",
      event_type: "Discussion",
      event_id: "24.2",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Ibero-American Meetup",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDMw",
      region: "-",
      location: "-",
      track: "Fun,Meetup",
      time: "11,20,1400,45",
      title: "iGEM Ambassadors",
      description:
        "Do you speak Portuguese or Spanish? Come join the LATAM Ambassadors and the Ibero-American iGEM teams for a chat! Let´s meet, connect, and talk about our iGEM experience - all that in portuñol. We made it to the Jamboree: Vamos celebrar! / ¡Vamos a celebrar!",
      event_type: "Networking",
      event_id: "32",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Informatics tools and NEB enzymes to enable one-pot Golden Gate Assemblies of unprecedented complexity​",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDMx",
      region: "-",
      location: "-",
      track: "Innovation,Knowledge",
      time: "11,20,1400,45",
      title: "New England Biolabs (NEB)",
      description:
        "Accelerate your Design-Build-Test cycle with Golden Gate Assembly (GGA) reagents and informatics design tools from NEB! Recent advances in understanding the fidelity, bias, and efficiency of fragment assembly in GGA now allow for assemblies of unprecedented complexity and target size in one pot – over 50 fragments, with assemblies of up to 40kB demonstrated. Data-optimized Assembly Design (DAD) using informatics tools with NEB enzymes, kits and workflows allow rapid and accurate production of large targets from many fragments with minimal screening of products required.  Join NEB scientists for a discussion of the latest innovations in DNA assembly. ",
      event_type: "Webinar",
      event_id: "60.2",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Engineering Biodefense Policy",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDMy",
      region: "-",
      location: "-",
      track: "Governance",
      time: "11,20,1500,30",
      title: "FBI",
      description:
        "Join Will So from the FBI to learn about biopolicy. In Engineering Biology, the end product or function is pre-determined where we then use component parts, with known functions, and how they interact to achieve our goal. The goal of a biodefense policy is to prevent naturally occurring, accidental, or deliberate biological incidents. Now, how do we engineer a policy to meet that goal? Do we have the component parts? Do we know the functions of the component parts? Can we use the design-build-test-learn approach to policy to balance the needs of science, health, and security? Come into my laboratory and let`s find out...together.",
      event_type: "Webinar",
      event_id: "27.4",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "iGEM Bingo by UPF_Barcelona Team",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDMz",
      region: "-",
      location: "-",
      track: "Fun,Networking",
      time: "11,20,1500,30",
      title: "UPF_Barcelona",
      description:
        "We aim to prepare a bingo game related to iGEM and synthetic biology. To do so, instead of numbers the cards will contain images of synthetic biology and iGEM (pipette, E.coli, Arduino, bio-bricks...).",
      event_type: "Interactive Session/Game",
      event_id: "42",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "Guidelines to building and managing a SynBio Association",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjU3MDM0",
      region: "-",
      location: "-",
      track: "Networking,Accessibility",
      time: "11,20,1530,30",
      title: "GASB (German Association for Synthetic Biology)",
      description:
        "If you feel something is missing in your community - create that something! Synthetic Biology is a fast growing field with an already massive impact on our daily lives. But as big as the accomplishments of individuals may be, in order to flourish, research fields like this need a good infrastructure. In this workshop we will talk about the necessity for national and local organisations, how GASB - the German Association for Synthetic Biology was found and how it is managed today. ",
      event_type: "Webinar+Q&amp;A",
      event_id: "40",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
    {
      name: "NEW Keynote: The Founding and future prospects of SynBio Africa and iGEM - Otim Geoffrey",
      link: "https://igem.app.swapcard.com/event/igem-2020-virtual-giant-jamboree-1/planning/UGxhbm5pbmdfMjY3NjQw",
      region: "-",
      location: "-",
      track: "Keynote",
      time: "11,20,1100,45",
      title: "iGEM Foundation",
      description:
        "Otim Geoffrey, MSc.Founder and CEO of SynBio Africa Otim Geoffrey is a Molecular biologist with a strong passion for synthetic biology which he developed after attending his first synthetic biology conference (SB.7) in Singapore as a Biosecurity fellow, sponsored by Johns Hopkins center for Health security. There, he met, interacted, and created network with many thought leaders and pioneers of synthetic biology who have continued to play a bigger role in mentoring and supporting his synbio initiatives. He founded IGEM Makerere University team in 2018, the first IGEM team from East Africa to participate and represent at the IGEM Giant Jamboree in Boston. He later Founded Synbio Africa as an After IGEM initiative to promote and spread the gospel of synthetic biology across Africa.",
      event_type: "Lecture,Q&amp;A",
      event_id: "3000",
      video_link_promotion: "-",
      video_link_presentation: "-",
      section: "-",
      parts_link: "-",
      poster_link: "-",
      poster_session: "-",
      poster_location: "-",
    },
  ];

  ///SETUP AND PRINTING

  //setup the data and clean it up
  let temp_date;

  for (x = 0; x < original_info.length; x++) {
    //standard names for track
    original_info[x].track_standard = original_info[x].track.replace(/\s/g, "");

    //standard names for team name
    original_info[x].name_standard = original_info[x].name.toLowerCase();

    //split time into month, day, hour, and session length
    temp_date = original_info[x].time.split(",").map(Number);

    original_info[x].month = temp_date[0];
    original_info[x].day = temp_date[1];
    original_info[x].hour = temp_date[2];
    original_info[x].duration = temp_date[3];
  }

  //create a const object sorted chronologicaly
  const cleaned_info = original_info.sort((a, b) => (a.time > b.time ? 1 : -1));

  //print the default, all data in EST time zone
  place_general_data(cleaned_info, 0, "All", "All");

  //////////////////////////////////////////////////////////////////////////////////

  //INTERACTION / FILTERING

  //if the user changes the timezone, track or event type
  $(".select_dropdown").on("change", function (e) {
    //refresh options
    $("#track_select optgroup#team_tracks").prop("disabled", false);
    $("#track_select optgroup#gj_tracks").prop("disabled", false);
    $("#event_workshop").prop("disabled", false);
    $("#event_team_presentation").prop("disabled", false);

    //get time zone, track filter and event filter
    var timezone_selected = $("#timezone_select option:selected").val();
    var track_selected = $("#track_select option:selected").val();
    var event_type_selected = $("#event_type_select option:selected").val();

    //block options not available based on event type
    if (event_type_selected === "Team Presentation") {
      $("#track_select optgroup#gj_tracks").prop("disabled", true);
    }
    if (event_type_selected === "Workshop") {
      $("#track_select optgroup#team_tracks").prop("disabled", true);
    }

    //block options not available based  track type
    if (track_selected != "All") {
      if (
        track_selected === "Workshop" ||
        track_selected === "Meetup" ||
        track_selected === "Hackthon"
      ) {
        $("#event_team_presentation").prop("disabled", true);
      } else {
        $("#event_workshop").prop("disabled", true);
      }
    }

    //send things to print
    place_general_data(
      cleaned_info,
      parseInt(timezone_selected),
      track_selected,
      event_type_selected,
    );
  });

  //switching between displays
  $(".switch_display").click(function () {
    //remove and hide
    $(".switch_display").removeClass("current_display");
    $(".choosen_display").hide();

    //add and show
    var selected_display = $(this).attr("id");
    $(this).addClass("current_display");
    $("." + selected_display).show();
  });

  //////////////////////////////////////////////////////////////////////////////////

  //FUNCTIONS
  //time zone change functions
  //main function for switching time
  function change_time_zone(month, day, time, duration, change) {
    //maximum amount of days in the month we are in
    var months_days_limit = days_in_a_month(month);

    //time event starts
    var time_start = time + change;

    //convert duration minutes in military format
    if (duration % 60 == 0) {
      duration = (duration / 60) * 100;
    } else if (duration > 60) {
      duration = ((duration / 60) | 0) * 100 + (duration % 60);
    }

    //add converted minutes
    var time_end = time_start + duration;

    //check if time_end needs to be adjusted
    var time_end_minutes = time_end % 100;

    if (time_end_minutes == 60) {
      time_end = time_end - 60 + 100;
    } else if (time_end_minutes > 60) {
      //from those minutes, get how many hours
      var sixty = ((time_end_minutes / 60) | 0) * 100;

      //add hours plus minutes in military format
      time_end_minutes = sixty + ((time_end % 100) - 60);

      //get the final time end by adding the correct minute convertion
      time_end = time_start - (time_start % 100) + time_end_minutes;
    }

    //check if adjusted time change crosses the international date line
    if (time_start >= 2400) {
      time_start = time_start - 2400;
      time_end = time_end - 2400;

      day = day + 1;
    }

    if (time_start < 0) {
      time_start = 2400 - time_start;
      time_end = 2400 - time_end;

      day = day - 1;
    }

    //check if the new day switches months
    if (day > months_days_limit) {
      month = month + 1;
      day = day - months_days_limit;
    }
    if (day <= 0) {
      month = month - 1;
      day = days_in_a_month(month);
    }

    var date_changed = [month, day, time_start, time_end];

    //return changed date
    return date_changed;
  }

  //get the number of days in the month
  function days_in_a_month(month) {
    const days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 30, 30, 31];

    return days_in_month[month];
  }

  //switch hours from 24 to 12 format
  function switch_hours(hour) {
    let converted_hour = 12;

    switch (hour) {
      case 13:
        converted_hour = 1;
        break;
      case 14:
        converted_hour = 2;
        break;
      case 15:
        converted_hour = 3;
        break;
      case 16:
        converted_hour = 4;
        break;
      case 17:
        converted_hour = 5;
        break;
      case 18:
        converted_hour = 6;
        break;
      case 19:
        converted_hour = 7;
        break;
      case 20:
        converted_hour = 8;
        break;
      case 21:
        converted_hour = 9;
        break;
      case 22:
        converted_hour = 10;
        break;
      case 23:
        converted_hour = 11;
        break;
    }

    return converted_hour;
  }

  //styling functions
  //make months + days look nice
  function month_day_for_display(month, day) {
    const months_array = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    //return month
    return months_array[month - 1] + " " + day;
  }

  //make hours and minutes look nice
  function hour_for_display(hour_x) {
    //store hours, minutes and midday for time start and time end
    var hour_obj = { hours: 0, minutes: 0, midday: "AM" };

    //get hours
    hour_obj.hours = (hour_x / 100) | 0;

    //check if PM, (by default its AM)
    if (hour_x > 1159) {
      hour_obj.midday = "PM";
      hour_obj.hours = switch_hours((hour_x / 100) | 0);
    }

    //get minutes
    hour_obj.minutes = hour_x % 100;

    //if minutes are 0, change to 00 for displaying
    if (hour_obj.minutes < 10) {
      hour_obj.minutes = "0" + hour_obj.minutes;
    }

    return hour_obj.hours + ":" + hour_obj.minutes + "  " + hour_obj.midday;
  }

  //sorting and printing functions
  // schedule overview : sort sessions by day and hour
  function sort_sessions_day_hour(
    current_info,
    filter_track,
    filter_event_type,
  ) {
    //setup a new object to use in this function
    var info = JSON.parse(JSON.stringify(current_info));

    //hide and clean the div
    $(".schedule_overview_append").hide().empty();

    //auxiliary variable to append
    let append_var = "";
    let aux_append = "";

    //navigate all the array and generate places to append
    for (x = 0; x < info.length; x++) {
      //generate divs to append by days
      if ($("#day_" + info[x].day).length == 0) {
        $(".schedule_overview_append").append(
          "<div class='day_wrappers'" +
            " id='day_" +
            info[x].day +
            "'>" +
            "<h2>" +
            month_day_for_display(info[x].month, info[x].day) +
            "</h2></div>",
        );
      }

      //generate divs to append by hours
      for (y = 0; y < info.length; y++) {
        //apply the filters
        if (
          filter_track === "All" ||
          info[y].track_standard.includes(filter_track) === true
        ) {
          if (
            filter_event_type === "All" ||
            info[y].event_type.includes(filter_event_type) === true
          ) {
            //if it is the same day
            if (info[y].day == info[x].day) {
              if (
                $("#day_" + info[x].day + " > #hour_" + info[y].hour).length ==
                0
              ) {
                $("#day_" + info[x].day).append(
                  "<div class='hour_wrapper' id='hour_" +
                    info[y].hour +
                    "'>" +
                    "<div class='left_side_time'>" +
                    hour_for_display(info[y].hour) +
                    "</div><div class='right_side_events'></div></div>",
                );
              }
            }
          }
        }
      }

      //append each session to where it belongs and setup the info cards
      append_var =
        "#day_" +
        info[x].day +
        " > #hour_" +
        info[x].hour +
        "> .right_side_events";

      //apply the filters
      if (
        filter_track === "All" ||
        info[x].track_standard.includes(filter_track) === true
      ) {
        if (
          filter_event_type === "All" ||
          info[x].event_type.includes(filter_event_type) === true
        ) {
          $(append_var).append(
            "<div id='" +
              info[x].event_id +
              "'class='event " +
              info[x].track_standard.substring(
                info[x].track_standard.indexOf(",") + 1,
              ) +
              "'>" +
              "<div class='track'></div>" +
              "<div class='name'>" +
              info[x].name +
              "</div></div>",
          );
        }
      }
    }

    //once all events have been added

    //fade in the results
    $(".schedule_overview_append").fadeIn(1000);

    // let user click on them to see the info cards
    show_card_info(info);
  }

  //click on events after they are placed on the overview schedule
  function show_card_info(info) {
    var what_clicked = "";
    let selected_info = "";
    let aux_append = "";

    $(".event").click(function () {
      //empty info card
      $(".info_card").empty();

      //get what event was clicked
      what_clicked = $(this).attr("id");
      console.log(what_clicked);

      //find the info of the selected event
      for (x = 0; x < info.length; x++) {
        if (info[x].event_id === what_clicked) {
          selected_info = x;
        }
      }

      //append the info to the info card
      aux_append =
        "<div class='close_card'></div> <h2>" +
        info[selected_info].name +
        "</h2>";

      aux_append =
        aux_append +
        "<h3>Time: " +
        month_day_for_display(
          info[selected_info].month,
          info[selected_info].day,
        ) +
        ", " +
        hour_for_display(info[selected_info].hour) +
        " - " +
        hour_for_display(info[selected_info].time_end) +
        "</h3>" +
        "<h3>Host: " +
        info[selected_info].title +
        "</h3>" +
        "<h3>Track: " +
        info[selected_info].track +
        "</h3>" +
        "<h3>Event Type: " +
        info[selected_info].event_type +
        "</h3>" +
        "<h3>Session Link: <a href='" +
        info[selected_info].link +
        "'>Join Session! </a> </h3>" +
        "<p>" +
        info[selected_info].description +
        "</p>";

      $(".info_card").append(aux_append);

      //show the overlay
      $(".main_cover").show();
      $(".info_card").show();

      //clicking outside the info card
      $(".main_cover").click(function () {
        $(".main_cover").hide();
        $(".info_card").hide();
      });
      $(".close_card").click(function () {
        $(".main_cover").hide();
        $(".info_card").hide();
      });
    });
  }

  //table display: place sessions on table format
  function table_sessions(current_info, filter_track, filter_event_type) {
    //setup a new object to use in this function
    var info = JSON.parse(JSON.stringify(current_info));

    //clean the div
    $(".table_display_append").hide().empty();

    //aux variable to hold data
    var append_holder =
      "<table><tr> " +
      "<th width='20%'>Time</th>" +
      "<th>Name</th> " +
      "<th>Track</th>" +
      "<th>Join</th></tr>";

    //print all sessions
    for (x = 0; x < info.length; x++) {
      //apply the filters
      if (
        filter_track === "All" ||
        info[x].track_standard.includes(filter_track) === true
      ) {
        if (
          filter_event_type === "All" ||
          info[x].event_type.includes(filter_event_type) === true
        ) {
          append_holder =
            append_holder +
            "<tr>" +
            "<td>" +
            month_day_for_display(info[x].month, info[x].day) +
            "<br>" +
            hour_for_display(info[x].hour) +
            " - " +
            hour_for_display(info[x].time_end) +
            "</td>" +
            "<td>" +
            info[x].name +
            "</td>" +
            "<td>" +
            info[x].track +
            "</td>" +
            "<td><a href='" +
            info[x].link +
            "'>Join session</a></td></tr>";
        }
      }
    }

    //close the table
    append_holder = append_holder + "</table>";

    //append results
    $(".table_display_append").append(append_holder);

    //fade in the results
    $(".table_display_append").fadeIn(1000);
  }

  //list display: place sessions on list format
  function list_sessions(current_info, filter_track, filter_event_type) {
    //setup a new object to use in this function
    var info = JSON.parse(JSON.stringify(current_info));

    //clean the div
    $(".list_display_append").hide().empty();

    //sort sessions alphabetically name
    // 	info.sort((a, b) => (a.name_standard > b.name_standard) ? 1 : -1);

    //auxiliary varible
    var append_holder = "";

    //print sessions
    for (x = 0; x < info.length; x++) {
      //apply the filters

      if (
        filter_track === "All" ||
        info[x].track_standard.includes(filter_track) === true
      ) {
        if (
          filter_track === "All" ||
          info[x].event_type.includes(filter_event_type) === true
        ) {
          append_holder =
            append_holder +
            "<div class='team_info_card'>" +
            "<h2>" +
            info[x].name +
            "</h2>" +
            "<h4>Time: " +
            month_day_for_display(info[x].month, info[x].day) +
            ", " +
            hour_for_display(info[x].hour) +
            " - " +
            hour_for_display(info[x].time_end) +
            " </h4>" +
            "<h4>Host: " +
            info[x].title +
            "</h4>" +
            "<h4>Track: " +
            info[x].track +
            "</h4>" +
            "<h4>Event Type: " +
            info[x].event_type +
            "</h4>" +
            "<h4>Session Link: <a href='" +
            info[x].link +
            "'>Join session! </a> </h4>" +
            "<p>" +
            info[x].description +
            "</p>" +
            "</div>" +
            "<div class='clear extra_space'></div>";
        }
      }
    }

    //add all events
    $(".list_display_append").append(append_holder);

    //fade in the results
    $(".list_display_append").fadeIn(1000);
  }

  //setup functions

  //called when setting up or when a timezone change
  function place_general_data(
    original_info,
    time_difference,
    filter_track,
    filter_event_type,
  ) {
    //create a new object to change the time zone
    var current_info = JSON.parse(JSON.stringify(original_info));

    //hold month day hour and duration
    var temp_array = [];

    //change data to new timezone
    for (x = 0; x < current_info.length; x++) {
      //send times to be changed
      temp_array = change_time_zone(
        current_info[x].month,
        current_info[x].day,
        current_info[x].hour,
        current_info[x].duration,
        time_difference,
      );

      //add new times to the current array
      current_info[x].month = temp_array[0];
      current_info[x].day = temp_array[1];
      current_info[x].hour = temp_array[2];
      current_info[x].time_end = temp_array[3];
    }

    //schedule -overview send current to sort and print
    sort_sessions_day_hour(current_info, filter_track, filter_event_type);

    //place info in table format
    table_sessions(current_info, filter_track, filter_event_type);

    //place current info on the list format
    list_sessions(current_info, filter_track, filter_event_type);
  }

  /////////////////////////////////////////////////////////
});
