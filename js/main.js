(() => {
const $ = (s, r=document) => r.querySelector(s), $$ = (s, r=document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
const root = document.documentElement;

const P = [
  {id:'ashoka-web', title:'Ashoka Changemakers', label:'Ashoka Changemakers', client:'Ashoka Changemakers', tags:['Experience design','UX design','UI design','Design leadership'], year:'2025–26', bg:'var(--breeze)', fg:'#1E2214', glyph:'grid', isNew:true,
   thumb:'img/ashoka/thumb-home.webp', role:'Experience Design Manager', when:'2025 – 2026', team:'The founder, programme and challenge managers, and the people who build what we design', tools:'Figma',
   sum:'Leading how people experience Changemakers: the website, its accessibility, its event pages and the help people get when they’re stuck.',
   ov:'As Experience Design Manager, I set how people experience Changemakers from their first visit to joining a challenge or partnering with us. I run UX audits, keep the platform accessible, fix the pages people rely on most, and lead the website redesign.',
   lead:{title:'How I lead the work.', toc:'How I lead',
     intro:['My job is to make sure everything Changemakers puts in front of people works for them, and to bring the whole team along while we get there.',
            'I don’t design in a corner. I start from what people are struggling with, agree priorities with the founder and programme leads, test early, and leave the team with standards and templates they can use without me.'],
     team:['Founder','Programme managers','Challenge managers','Partnerships and fundraising','Developers','Young changemakers and partners we design for'],
     steps:[['Listen','Interview stakeholders, read the data and collect feedback from the people using the platform.'],
            ['Audit and prioritise','Review journeys end to end and agree with the team what to fix first, and why.'],
            ['Prototype and test','Put working prototypes in front of stakeholders and users before anything is built.'],
            ['Iterate in the open','Share each round, take feedback, and refine. The website went through two full rounds.'],
            ['Hand over and enable','Leave standards, components and templates so the team can keep going on their own.']]},
   story:{
     url:'changemakers.com',
     roleTitle:'Designing how people experience change.',
     roleOverview:['Ashoka Changemakers runs social innovation challenges, mostly for young people, that find, fund and connect the people solving the world’s hardest problems. Young innovators, funders, partners and event guests all meet us online first.',
                   'I lead experience design across that whole journey. Some of it is visible, like the new website. Much of it is quieter: auditing what we have, making it accessible, cleaning up the pages people depend on, and making sure nobody gets stuck without a way to ask for help.'],
     streams:[['Website redesign','Refocused the site on fundraising and partnerships, with a bolder brand and pages the team can build on their own. The full story is below.','Deep dive'],
              ['UX audits','Reviewed the platform journey by journey, logged where people drop off or get confused, and turned it into a prioritised list the team works through.','Ongoing'],
              ['Accessibility','Contrast, structure, readable layouts and keyboard use. I make accessibility part of how pages are designed and reviewed, not a fix at the end.','Ongoing'],
              ['Conference and event pages','Cleaned up conference pages so guests can find the agenda, the speakers and how to take part without digging.','Events'],
              ['Chatbot and support','Designed the chatbot experience so people always have a way to ask a question and reach the right answer, or the right person.','Support'],
              ['Standards, research and impact','Set design standards, run research and track experience and impact measures, so our decisions follow what people actually do.','Practice']],
     cover:'img/ashoka/cover-partner.webp',
     overview:['The website is often the first place young innovators, funders and partners meet Changemakers, so it was the first big piece of work I led.',
               'It was built to describe programmes, not to invite people in. As the experience design lead, I took it from problem framing through research, prototyping and two rounds of design to launch.'],
     goal:'Refocus the site on fundraising and partnerships, let the brand speak with more confidence, feel inviting to young changemakers, and make the site simpler for the team to build and maintain with the brand assets we already had.',
     issues:[
       ['var(--nunzia)','Funders and partners had no clear way in','There was no partner journey. The asks to donate or partner sat at the very bottom of long pages, after everything else.'],
       ['var(--lemon)','The brand wasn’t coming through','Text-heavy pages and generic layouts undersold an organisation that runs bold, youth-led challenges. Proof of impact sat in small, quiet tiles.'],
       ['var(--spring)','Hard to run and hard to reach','Building new pages and challenges took effort, and contact requests arrived without context, so challenge managers spent time working out what people needed.']],
     steps:[['var(--breeze)','Define','Named the core problem: a site that informed but didn’t invite, especially for funders and partners.'],
            ['var(--spring)','Research','Interviewed the founder and stakeholders, studied existing visit data, and benchmarked how other NGOs win support.'],
            ['var(--lemon)','Prototype','Built a working prototype and walked through it with the founder and stakeholders to test the direction early.'],
            ['var(--nunzia)','Design & iterate','Designed the first iteration, gathered feedback, and refined it into a second, final iteration.'],
            ['var(--verdant)','Ship','Handed off, launched, and set the team up to create challenges and manage pages on their own.']],
     decisions:[
       {img:'img/ashoka/annot-home.webp', w:1000, h:1347, url:'changemakers.com', pins:[
         [50,29,'Proof up front','Impact numbers moved out of small pastel tiles into one bold bar near the top, so visitors and funders see scale straight away.'],
         [45,84,'Make the ask clear','A dedicated partnership moment, “Don’t just fund projects. Change systems.”, puts Partner with us and Donate side by side, with partner logos as social proof.']]},
       {img:'img/ashoka/annot-form.webp', w:1000, h:542, url:'changemakers.com/partner', pins:[
         [65,30,'Say why you’re reaching out','The enquiry form starts with “I’m interested in” options, so every message arrives with its purpose and goes to the right person.'],
         [12,56,'Set expectations','Three short promises explain what happens next: a reply within two business days, a short call, then a proposal shaped around their goals.']]}],
     ba:{before:'img/ashoka/about-old.webp', after:'img/ashoka/about-new.webp', w:1200, h:750, url:'changemakers.com/about',
         cap:'The About page went from a block of text to a clear statement of what Changemakers does, with a direct invitation to get involved.'},
     screens:[['img/ashoka/full-home.webp','Home','Proof, partnership and programmes in one clear scroll',false,2965],
              ['img/ashoka/full-partner.webp','Partner with us','A new page built for funders and partners',true,2982],
              ['img/ashoka/full-impact.webp','Our Impact','Case studies, past winners and reports',false,3834],
              ['img/ashoka/full-about.webp','About','The mission, the people and a clear way to connect',false,2602]],
     wins:[['path','Clearer journeys','Visitors, young innovators and funders each have an obvious path to what they came for.'],
           ['eye','Better accessibility','Stronger contrast, clearer hierarchy and more readable layouts across the site.'],
           ['chat','Clearer requests','People now state why they’re reaching out, so users and challenge managers can report and solve problems properly.'],
           ['people','Better collaboration','With context on every request, the team, partners and participants work together with less back-and-forth.'],
           ['grid','Easier to run','The team can create proper challenges and manage pages themselves, using the existing brand assets.']],
     winsNote:'We’re still gathering numbers. These are the changes the team and users have seen since launch.',
     reflect:'Next time I’d dig deeper into the <em>why</em>. We learned a lot from what people did on the old site and the results of their visits, but less about why they behaved that way. I’d pair the data with more interviews and observed sessions, so the reasons behind each behaviour shape the design too.'
   }},
  {id:'sca', title:'She Code Africa', label:'She Code Africa', client:'She Code Africa', tags:['Design direction','Campaign materials','Design systems','Design leadership'], year:'2020–25', bg:'var(--lemon)', fg:'#1E2214', glyph:'star',
   thumb:'img/sca/24-wall.webp', role:'Design Lead (joined as a volunteer designer)', when:'Dec 2020 – 2025 · 4 years, 8 months', team:'The design team I built, chapter designers, and the programmes, partnerships and comms teams', tools:'Figma, Canva, Adobe Illustrator',
   sum:'Four years and eight months growing from volunteer designer to Design Lead: building the team, the design system and the look of a pan-African community.',
   ov:'I joined She Code Africa as a volunteer on its first design team and grew into its Design Lead. I built the design team, set up its first shared design system, and led the creative direction for around 40 events and programmes a year.',
   role_:{
     url:'shecodeafrica.org',
     coverPhoto:['img/sca/24-wall.webp',1600,1066,'“Doing Tech Girls Things”, She Code Africa Summit 2024'],
     headline:'From volunteer to Design Lead.',
     overview:['She Code Africa supports African women in tech through events, programmes, chapters and a community of more than 50,000 women. Almost everything it does reaches people through design: a flyer, a deck, a website, a stage.',
               'I joined in December 2020 as a volunteer on the pioneer design team. Over four years and eight months I became Design Lead, responsible for the visual design and much of the communication behind nearly every event, programme and campaign.'],
     goalLabel:'What I was there to do',
     goal:'Make She Code Africa look and feel like one organisation across every chapter, programme and platform, and give the people creating that work the system and support to do it well.',
     stats:[['4+','years, from volunteer designer to Design Lead'],['~40','events and programmes designed for each year'],['3','designers on the team I built'],['1st','shared design system across chapters and programmes']],
     lead:{title:'How I led design.', toc:'How I led',
       intro:['With around 40 events and programmes a year, design could not depend on one person. I treated the success of each one as my measure, and built the team and the system so we could deliver at that pace without losing quality.',
              'Each piece of work started with a brief from the team running it and ended with a review, so the next one started a little better.'],
       team:['Programmes team','Partnerships and grants','Community and chapter leads','Social media','Chapter designers','Fourthcanva, during the rebrand'],
       steps:[['Build the team','Grew a design team with two other designers and shared out the work by strength.'],
              ['Set up the system','A shared Figma and Canva workspace with libraries, reusable components and a clear brand tone.'],
              ['Brief, design, review','Every event and campaign ran on a brief, a first round, feedback and a final round.'],
              ['Coach the chapters','Mentored chapter and channel designers to use and adapt the system locally.'],
              ['Learn and improve','Looked back after each flagship event and carried what worked into the next one.']]},
     streamsTitle:'What I led.', streamsToc:'What I led',
     streams:[['Design system and workspace','She Code Africa’s first central design system: libraries, components and templates that kept chapters, programmes and platforms consistent.','Foundations'],
              ['Events and programmes','Design for nearly every major event and programme, including the SCA Summit (2022–2024), STEM A Girl, the Ehigbenti Summit and grant-funded campaigns.','~40 a year'],
              ['Websites','Led the visual redesign of the main She Code Africa website, the Summit websites and the STEM A Girl website.','Web'],
              ['Decks and campaign resources','Pitch, sponsorship and partnership decks, presentation slides and templates, flyers, social graphics, motion assets and video direction.','Resources'],
              ['Brand and rebrand','Looked after how the brand showed up on social and community touchpoints, and gave internal direction during the rebrand led by Fourthcanva.','Brand'],
              ['Community and mentoring','Co-created and co-hosted the Design Talk with She Code Africa, mentored women moving into UI/UX and visual design, and ran workshops.','People']],
     galleryTitle:'A little of the work.', galleryToc:'The work',
     galleryIntro:'A small selection. The full Summit story has its own case study.',
     gallery:[['img/sca/24-deck-cover.webp',464,600,'Summit 2024 deck'],['img/sca/22-flyers.webp',800,524,'Campaign flyers'],['img/sca/23-social.webp',800,248,'Social campaign: ticket drops and calls for sponsors'],['img/sca/23-deck.webp',754,600,'Sponsorship deck'],['img/sca/23-countdown.webp',800,534,'Countdown series'],['img/sca/23-watchparty.webp',800,600,'Chapter watch parties']],
     resultsTitle:'What it led to.',
     wins:[['grid','One recognisable brand','Chapters, programmes and platforms looked and sounded like one organisation.'],
           ['people','A team that could keep up','A small design team, and chapter designers, delivering around 40 events and programmes a year.'],
           ['chat','More designers in the room','Mentoring, workshops and the Design Talk helped more women move into design.']],
     link:{case:'sca-summit', label:'Read the Summit case study'}
   }},
  {id:'sca-summit', title:'She Code Africa Summit Experience', label:'SCA Summit 2022–24', client:'She Code Africa', tags:['Design direction','Campaign materials','UI design','Event experience'], year:'2022–24', bg:'var(--nunzia)', fg:'#1E2214', glyph:'sun',
   thumb:'img/sca/23-hall.webp', role:'Design lead: UX, brand, web and event design', when:'2022 – 2024 · three summits', team:'The Summit creative and UX team I led', tools:'Figma, Adobe Illustrator',
   sum:'Three years designing Africa’s largest gathering of women in tech, for the women in the room and the ones following from everywhere else.',
   ov:'I led the UX and creative team behind the She Code Africa Summit from 2022 to 2024: the website, the brand, the campaigns and everything people touched at the venue.',
   lead:{title:'How I led the team.', toc:'How I led',
     intro:['Each year I led the creative and UX team behind the Summit, working to one brief with the organising team: make 1,000 women in the room, and thousands more online, feel part of the same day.',
            'We worked in rounds. Theme and moodboard first, then the identity, then a campaign system the whole team could use, then the venue. After every Summit we looked at what worked and carried it into the next one.'],
     team:['Summit organising team','Creative and UX team','Speakers and sponsors','Chapter leads','Volunteers','Venue, print and merch vendors'],
     steps:[['Set the theme','Agree the year’s theme and audience with the organising team.'],
            ['Explore and pick a direction','Moodboards and identity options, reviewed with the team before we committed.'],
            ['Build the campaign system','Templates for every announcement, so the whole team could publish without waiting on design.'],
            ['Design the venue','Wayfinding, photo moments and installations, briefed to vendors and checked on site.'],
            ['Review and carry forward','What landed, what didn’t, and what to keep for next year.']]},
   showcase:{
     cover:'img/sca/23-hall.webp', coverW:1600, coverH:900, coverCap:'The main hall at #SCASummit23, Lagos',
     brief:['She Code Africa is a community of more than 50,000 African women in tech, spread across 43 local chapters in 22 countries. Once a year it gathers in one room in Lagos for the Summit.',
            'Most of the community will never be in that room. So every year the brief was the same: make an experience that everyone feels part of, whether they are at the venue or following from Nairobi, Accra or a chapter watch party. I led the UX and creative team that designed it, three years in a row.'],
     stats:[['3','summits designed, 2022–2024'],['43','local chapters across 22 countries to include'],['4.5M+','social impressions in 2023'],['1,000+','attendees from 12 countries in 2023']],
     layers:[
       ['var(--lemon)','Before the day','Build anticipation everywhere','A full social system for each Summit: speaker and sponsor announcements, calls for volunteers, ticket drops and countdowns, all in one recognisable identity and one hashtag.'],
       ['var(--nunzia)','In the room','Make the venue feel like ours','Welcome walls, wayfinding, interactive installations, photo moments, a prayer room and merch with a voice, so 1,000 women could find their way and find each other.'],
       ['var(--spring)','Beyond the venue','Bring everyone else in','Live streaming, chapter watch parties, “Let’s Talk!” live conversations, a Wall of Fame for community members and content made to be shared, so the Summit travelled further than Lagos.']],
     years:[
       {y:'2022', theme:'Elevating the African Woman in Tech', meta:'12 November 2022 · Lagos', c:'var(--nunzia)',
        story:'The first Summit I led. The identity grew from a woven pattern inspired by African textiles, framing every flyer, badge and stage screen. The voice did the rest: merch that spoke the way the community talks, from “Tech bro” crossed out for “Tech sis” to “Mi run Tech, Tech don’t run Mi!”',
        chips:['1,000+ attendees','529.8k impressions on #SCASummit22'],
        feature:['img/sca/22-stage.webp',800,534,'The 2022 stage, framed by the Summit pattern'],
        gallery:[['img/sca/22-theme.webp',800,450,'Theme: Elevating the African Woman in Tech'],['img/sca/22-pattern.webp',800,314,'The Summit pattern'],['img/sca/22-flyers.webp',800,524,'Campaign: keynote, calls for sponsors and volunteers, countdowns'],['img/sca/22-hoodies.webp',800,192,'Hoodies: “Tech bro” becomes “Tech sis”'],['img/sca/22-bottles.webp',800,600,'“Mi run Tech, Tech don’t run Mi!”'],['img/sca/22-totes.webp',800,534,'“Soft(ware) babe doing Tech Tings”'],['img/sca/22-lanyards.webp',800,192,'Badges for attendees, speakers and the team'],['img/sca/22-booths.webp',800,540,'Exhibition and non-profit spotlight booths'],['img/sca/22-panel.webp',800,534,'Panel on employability and career growth'],['img/sca/22-speaker.webp',800,534,'On stage at #SCASummit22']]},
       {y:'2023', theme:'Beyond Inclusion: African Women Shaping the Future of Tech', meta:'30 September 2023 · Queens Park Event Centre, Lagos', c:'var(--lemon)',
        story:'We started with a moodboard and a new mark, then built three symbols that carried the theme: Star Girls, Collective Growth and Inclusive Community. Inside the venue the brand became places to stop and take part. Outside it, chapters hosted watch parties, “Let’s Talk!” sessions kept the conversation going online, and the Summit was streamed for everyone who couldn’t travel.',
        chips:['1,000+ attendees','12 countries','4.5M+ social impressions','22 speakers, 14 sessions'],
        feature:['img/sca/23-sculpture.webp',1600,1066,'Queueing past the 2023 logo sculpture'],
        groups:[
          ['Identity',[['img/sca/23-moodboard.webp',800,450,'Moodboard'],['img/sca/23-logo.webp',800,304,'Summit 2023 lockups'],['img/sca/23-symbols.webp',800,304,'Three symbols: Star Girls, Collective Growth, Inclusive Community'],['img/sca/23-theme.webp',800,450,'Theme: Beyond Inclusion']]],
          ['Campaign, for everyone not in the room',[['img/sca/23-watchparty.webp',800,600,'“The Chapter’s Watch Party!” and “Let’s Talk!” sessions'],['img/sca/23-countdown.webp',800,534,'Countdown series'],['img/sca/23-social.webp',800,248,'Ticket drops, call for sponsors, “It’s Today!”'],['img/sca/23-deck.webp',754,600,'2023 sponsorship deck']]],
          ['Things to wear and carry',[['img/sca/23-tote.webp',600,600,'“Tech babe, Periodt!”'],['img/sca/23-tees.webp',800,534,'Summit tees'],['img/sca/23-bags.webp',800,600,'Gift bags with a QR code'],['img/sca/23-lanyard.webp',800,568,'Badges: “An SCA Queen”'],['img/sca/23-ribbons.webp',800,534,'Lanyards, ready for the day'],['img/sca/23-socks.webp',750,600,'Socks with the SCA mark']]],
          ['On the day',[['img/sca/23-welcomewall.webp',450,600,'“You’re about to have the experience of a lifetime!”'],['img/sca/23-welcome.webp',800,534,'Welcome to the largest gathering of African women in tech'],['img/sca/23-journey.webp',800,534,'Your Tech Journey: an interactive string wall'],['img/sca/23-walloffame.webp',800,534,'Wall of Fame: our Sheroes from across the community'],['img/sca/23-logowall.webp',800,534,'Photo moments built from the mark'],['img/sca/23-prayer.webp',800,534,'Wayfinding, including a prayer room']]]]},
       {y:'2024', theme:'#SCASummit24', meta:'21 September 2024', c:'var(--spring)',
        story:'By 2024 the Summit had a system. I designed the Summit deck that took the story to partners, and a set of campaign resources built as reusable templates, so the team could keep announcements flowing through the whole run-up without starting from scratch each time. At the venue, the map wall highlighted women from across the continent, with an arch inviting everyone to follow along across Africa.',
        chips:['Summit deck','Campaign resources','Women highlights on the map'],
        feature:['img/sca/24-wall.webp',1600,1066,'“Doing Tech Girls Things”, 2024'],
        deck:[['img/sca/24-deck-cover.webp','Cover'],['img/sca/24-deck-map.webp','Our footprint'],['img/sca/24-deck-about.webp','About the Summit'],['img/sca/24-deck-collage.webp','Highlights'],['img/sca/24-deck-structure.webp','Event structure'],['img/sca/24-deck-impact.webp','2023 impact'],['img/sca/24-deck-tweets.webp','In attendees’ words'],['img/sca/24-deck-numbers.webp','2024 targets']],
        gallery:[['img/sca/24-arch.webp',1600,1066,'“Follow our chapters across Africa”'],['img/sca/24-selfie.webp',800,534,'Made for sharing'],['img/sca/24-talk.webp',800,534,'Conversations between sessions']]}],
     voices:[['I’m streaming #SCASummit23 and I’m happy they provided streaming options. I’ve been so inspired from all the sessions so far.','Attendee on X, October 2023'],
             ['The event was so organised and you could easily tell the attendees really enjoyed it.','Attendee on X, October 2023']],
     kit:['Summit website','Visual identity','Theme lockups','Symbols and patterns','Social campaigns','Countdown series','Ticket graphics','Speaker cards','Sponsorship decks','Campaign resources','Stage screens','Welcome walls','Wayfinding and signage','Interactive installations','Photo walls','Wall of Fame','Badges and lanyards','Tees and hoodies','Totes and gift bags','Bottles, notebooks, socks','Watch party flyers','Live conversation graphics'],
     closing:['img/sca/23-sculpture.webp',1600,1066]
   }},
  {id:'writetech', title:'WriteTech Website Redesign', label:'WriteTech', client:'WriteTech Hub', tags:['Experience design','UX design','UI design'], year:'2022–24', bg:'var(--spring)', fg:'#1E2214', glyph:'quill',
   thumb:'img/wt/thumb.webp', role:'Designer, led the website redesign', when:'2022 – 2024', team:'The founder and the WriteTech Hub team', tools:'Figma',
   sum:'Zaycodes became WriteTech Hub, and its website had to grow up with it: from a single page about technical writing to a place that sells services and builds a community.',
   ov:'After the rebrand from Zaycodes to WriteTech Hub, I redesigned the website around the jobs the new brand had to do: win clients, grow the community and introduce the team. I focused on clear navigation and a calmer, modern look, and tracked how it performed through analytics and user feedback.',
   lead:{title:'How I led the redesign.', toc:'How I led',
     intro:['The rebrand gave WriteTech Hub new goals, so I started with the founder: who the site now had to serve, and what each of them needed to do.',
            'From there I mapped clients, writers, sponsors and facilitators to the pages they needed, explored directions, and refined the design with the founder before handing it over and tracking how it performed.'],
     team:['The founder','The WriteTech Hub team','Community members','Developers'],
     steps:[['Understand the new brand','What changed after Zaycodes, and what the site now had to do.'],
            ['Map the audiences','Clients, writers, sponsors and facilitators, each with a clear path.'],
            ['Explore directions','Wireframes and visual directions, tested against the new brand.'],
            ['Refine together','Review rounds with the founder until the pages, copy and flows held up.'],
            ['Hand over and measure','Handed over for build, then tracked analytics and feedback.']]},
   rebuild:{
     url:'writetechhub.org',
     overview:['WriteTech Hub writes technical content and documentation for products, and runs a community and training programmes for technical writers. It started life as Zaycodes, a brand that wrote technical documents and guides on contributing to open source.',
               'The rebrand changed more than the name. A personal brand with one page became a hub with paying clients, a growing community, programmes and a team. The old website couldn’t carry any of that, so we redesigned it.'],
     goal:'Give each kind of visitor an obvious next step: hire WriteTech Hub, join the community, sign up for a programme, or support one. And make the new brand feel calm, credible and easy to read.',
     issues:[
       ['var(--nunzia)','No way to hire','Services sat on the page as three topics with “Read more” links. Nothing told a product team what they could buy, or how to start.'],
       ['var(--lemon)','No home for the community','Community was part of the mission, but the page had no way to join. The only action was a newsletter box with a button that said “Contact Us”.'],
       ['var(--breeze)','No room to grow','There was nowhere for bootcamps, sponsors or facilitators to live, so every new programme would have needed a new site.']],
     ba:{before:'img/wt/v1-hero.webp', after:'img/wt/live-hero.webp', w:800, h:500,
         cap:'The first screen, before and after. The old site led with a stock photo and one “Learn More” button. The new one says what WriteTech Hub does, then offers two clear paths: work with us, or join the community.'},
     screens:[['img/wt/live-home.webp','Home','Two clear paths from the first screen: hire or join',false,3579],
              ['img/wt/live-accel.webp','Accelerator Programme','A paid cohort with its own story, timeline and ways to sponsor or facilitate',true,4003],
              ['img/wt/live-comm.webp','Our Community','Why to join, and exactly how, in five steps',true,2114]],
     impact:[
       ['Easier for clients to reach out','“Work with us” is in the header, the first screen and the end of every page.'],
       ['Clearer services','Each service has its own page, so clients can see what WriteTech Hub offers before they get in touch.'],
       ['An easy way to join the community','Writers can apply, join Slack and get updates without having to message anyone first.'],
       ['Space for the bootcamps','The free Bootcamp, the Accelerator and the DocReview Series each have a page of their own.'],
       ['More ways to get involved','Sponsors and facilitators have their own pages and sign-up links.'],
       ['Room to keep growing','New programmes and events can be added without redesigning the site.']]
   }},
  {id:'dalo', title:'DalO Design System Revamp', label:'DalO Systems', client:'DalO Systems', tags:['UX design','UI design','Design systems'], year:'2022', bg:'var(--breeze)', fg:'#1E2214', glyph:'grid',
   thumb:'img/dalo/thumb.webp', role:'Product Designer', when:'Mar – Oct 2022', team:'Product, engineering and the DalO operations team', tools:'Figma',
   sum:'A new design system for a waste-collection platform, and a calmer, clearer product built on top of it.',
   ov:'DalO helps waste-collection businesses manage customers, pickups, payments and expenses. Its design system was hard to navigate and out of date, so every new screen drifted further from the last. I rebuilt the system from the ground up, then redesigned the web platform on top of it.',
   lead:{title:'How we built it.', toc:'How we built it',
     intro:['A design system only works if the people using it trust it, so I built it with the team rather than for them.',
            'I audited what existed, agreed the foundations, built components with every state the developers needed, and then proved the system by redesigning the busiest flows on top of it.'],
     team:['Product','Developers','The operations team who use DalO every day'],
     steps:[['Audit','Collected every colour, style and component in use, and where they clashed.'],
            ['Agree the foundations','Colour roles, type and spacing, reviewed with product and developers.'],
            ['Build the components','Buttons, inputs and navigation with every state, ready to hand over.'],
            ['Redesign the flows','Payments, customers and pickups rebuilt on the new system.'],
            ['Hand over and document','Clear specs and naming, so design and code stay in step.']]},
   stats:[[80,'%','faster design workflow'],[33,'%','increase in conversion'],[70,'%','increase in user satisfaction']], real:true,
   system:{
     url:'DalO web platform',
     overview:['DalO is used by the people who keep neighbourhoods clean: operators logging pickups, staff taking payments in cash, cheque or mobile money, and managers tracking what is owed across every area they serve.',
               'The product worked, but it had grown screen by screen. The old style guide was hard to find things in, so each new page made its own choices about colour, type, spacing and buttons. The result felt busy, and it slowed both the team designing it and the people using it.'],
     goal:'Build one source of truth for how DalO looks and behaves, then use it to make the platform calmer, clearer and faster to work in, for users and for the team.',
     issues:[
       ['var(--lemon)','A style guide nobody could use','Colours, type and components were scattered and out of date, so designers rebuilt the same pieces again and again.'],
       ['var(--nunzia)','Every screen did it differently','Buttons, filters, tables and stats looked and behaved differently from page to page, which made the product harder to learn.'],
       ['var(--spring)','Too much on screen at once','The sidebar showed every link at all times, numbers sat in small boxes, and the important figures were hard to spot.']],
     colors:[['#0F983B','Primary','CTAs, focused and active states'],['#4D9DE0','Secondary','Links and less important elements'],['#16BB4B','Success','Valid fields, success messages'],['#F9573B','Error','Error messages'],['#0E0E2C','Headings','Headings, overlays, shadows'],['#2A2A3A','Body text','Body copy'],['#8C8CA1','Subtle text','Helper and de-emphasised text'],['#F5F5F5','Background','Fields and subtle backgrounds'],['#C4C4C4','Border','Subtle borders']],
     parts:[
       {img:'img/dalo/ds-type.webp', w:692, h:790, t:'Type scale', d:'One typeface in regular, medium and bold, with separate desktop and mobile scales from 8 to 64px.'},
       {img:'img/dalo/ds-buttons.webp', w:692, h:500, t:'Buttons', d:'Three sizes, five states (initial, hover, active, focus, disabled) and three types, each with or without an icon.'},
       {img:'img/dalo/ds-icons.webp', w:470, h:590, t:'Icons', d:'One consistent icon set, so every action and menu item speaks the same visual language.'}],
     systemNote:'Colour roles, a type scale for desktop and mobile, and components with every state the developers needed. Click a snippet to see it full size.',
     extras:['Colour roles for every use','Desktop and mobile type scales','Buttons and inputs in every state','One icon set','A collapsible sidebar','French and English'],
     pairs:[
       {old:'img/dalo/ba-summary-old.webp', nu:'img/dalo/ba-summary-new.webp', t:'Payment summary', d:'The key totals now read as big, clear numbers. Filters have labels, and the table loses the boxes around every figure.'},
       {old:'img/dalo/ba-list-old.webp', nu:'img/dalo/ba-list-new.webp', t:'Payments', d:'Summary, payments and pending payments now sit as tabs on one page, instead of separate screens. The sidebar only opens the section you are in.'},
       {old:'img/dalo/ba-add-old.webp', nu:'img/dalo/ba-add-new.webp', t:'Add payment', d:'Labels sit above fields, the photo upload becomes a simple drop zone, and one clear primary button finishes the task.'}],
     screens:[['img/dalo/new-payments.webp','Manage payments','Summary, payments and pending in one place',944],
              ['img/dalo/new-list.webp','Payments','Status at a glance, one set of actions',944],
              ['img/dalo/new-add.webp','Add payment','A calmer form with one clear next step',994],
              ['img/dalo/new-customers.webp','Manage customers','Status labels and a single Action menu',887]],
     wins:[['grid','One source of truth','Designers and developers build from the same colours, type and components.'],
           ['eye','Clearer screens','Less on screen at once, and the numbers that matter stand out.'],
           ['path','Easier to learn','The same patterns repeat across customers, payments, pickups and expenses.']]
   }},
  {id:'hackathon', title:'DevCareer Hackathons', label:'DevCareer', client:'DevCareer × TBD · DevCareer × Nomba', tags:['Design direction','Campaign materials'], year:'2023 & 2026', bg:'var(--verdant)', fg:'#FFFFFF', glyph:'star',
   thumb:'img/dc/thumb.webp', role:'Design lead: campaign identity and resources', when:'Nov – Dec 2023 · Jun – Jul 2026', team:'The DevCareer programme team', tools:'Figma',
   sum:'Two virtual hackathons for African developers, each with its own identity and a campaign that carried it from the first teaser to the winners.',
   ov:'I designed the identity and campaign resources for two DevCareer hackathons: the Web5 Hac/<athon with TBD in 2023 and the DevCareer × Nomba Hackathon in 2026.',
   lead:{title:'How I ran the design.', toc:'How I ran it',
     intro:['A hackathon campaign runs for weeks and changes every few days, so the design had to keep pace with the programme, not hold it up.',
            'I agreed the milestones with the programme team, built each identity, then turned it into templates so announcements could go out fast and still look like one campaign.'],
     team:['DevCareer programme team','TBD and Nomba partner teams','Community partners','Facilitators'],
     steps:[['Agree the plan','Milestones and key moments with the programme team.'],
            ['Build the identity','A look and voice for each hackathon, signed off with partners.'],
            ['Plan the campaign','Content mapped to each phase, from teaser to finalists.'],
            ['Template the work','Reusable layouts so updates went out the same day.'],
            ['Review with partners','Partner and sponsor posts checked before every announcement.']]},
   mock:{
     brief:['DevCareer runs hackathons for developers across Africa. Both of these were fully virtual, which meant there was no venue, no stage and no lanyard. For four or five weeks, the feed was the event.',
            'So every hackathon needed its own visual world, and enough campaign resources to carry people from “something is coming” through registration, training, building and judging, to the announcement of the finalists.'],
     stats:[['2','virtual hackathons, two identities'],['4 & 5','weeks each campaign had to stay alive'],['₦1M','prize pool in 2023, then $6,500 for Nomba in 2026'],['9','community partners spotlighted in 2023']],
     chapters:[
      {id:'w5', key:'Web5 Hac/<athon', sub:'DevCareer × TBD · 20 Nov – 15 Dec 2023 · Virtual', theme:'w5',
       story:'An 8-bit world for a Web5 hackathon. The bracket in “Hac/<athon” turned the name into code, and pixel blocks, hearts and a black-and-yellow palette gave every post the feel of a retro terminal. The voice was playful on purpose, from “HACK, baby!” to “BYTE ME.”, because the brief was to make Web5 feel approachable to developers across Africa.',
       chips:['Teams of 4, at least one woman','Open to all African countries','₦1,000,000 prize pool','Live sessions on Twitch'],
       scenes:[
        {t:'fan', cap:'Launch, the live webinar and the prize reveal', items:['img/dc/w5-prize.webp','img/dc/w5-hero.webp','img/dc/w5-webinar.webp']},
        {t:'duo', cap:'Answering questions before they were asked: an FAQ carousel, the apply post and the four-week schedule', left:{carousel:['img/dc/w5-faq.webp','img/dc/w5-apply.webp','img/dc/w5-qa.webp']}, right:{img:'img/dc/w5-schedule.webp'}},
        {t:'sheet', cap:'A sticker set in the hackathon’s voice', img:'img/dc/w5-stickers.webp'},
        {t:'stack', cap:'A partner spotlight for each community, a thank-you to all of them, and a board naming every team that cleared phase one', cards:['img/dc/w5-partner.webp','img/dc/w5-thanks.webp'], phone:'img/dc/w5-phase1.webp'}]},
      {id:'nb', key:'DevCareer × Nomba Hackathon 2026', sub:'8 June – 18 July 2026 · Virtual · Nigeria', theme:'nb',
       story:'Three years later, a different brief: a five-week hackathon for Nigerian developers building real payment integrations on Nomba’s API. The identity moved from playful pixels to a dark grid horizon, circuit traces and a hand-cut display face in yellow and green. It opened with a teaser that named nothing, “Africa is building. Are you ready?”, then revealed the hackathon, the prize pool and the partner behind it.',
       chips:['Build on Nomba’s API','$6,500 prize pool','Five phases in five weeks','Top 10 finalists'],
       scenes:[
        {t:'wall', cap:'Teaser, reveal and registration, designed as one sequence', items:['img/dc/nb-teaser.webp','img/dc/nb-announce.webp','img/dc/nb-register.webp']},
        {t:'desk', cap:'The partnership announcement on a mesh background, and the banner set for every platform', screen:'img/dc/nb-banner.webp', phone:'img/dc/nb-powered.webp'},
        {t:'fan', cap:'Keeping five weeks moving: the timeline, onboarding and training', items:['img/dc/nb-onboard.webp','img/dc/nb-timeline.webp','img/dc/nb-training.webp']},
        {t:'desk', cap:'The live AMA with the Nomba team, and the top 10 finalists', screen:'img/dc/nb-ama.webp', phone:'img/dc/nb-finalists.webp'}]}],
     kit:['Hackathon identities','Logo lockups','Teaser campaigns','Launch posts','FAQ carousels','Schedules and timelines','Webinar and AMA promos','Speaker cards','Prize reveals','Partner announcements','Community partner series','Phase updates','Finalist boards','Banners for every platform','Sticker sets']
   }},
  {id:'muse-bloom', title:'Muse & Bloom', label:'Muse & Bloom', client:'Muse & Bloom, a platform I founded', tags:['Experience design','UX design','UI design','Design direction'], year:'2026', bg:'var(--calla)', fg:'#1E2214', glyph:'sun',
   thumb:'img/mb/thumb.webp', role:'Founder, designer and podcast co-host', when:'2026 · live at museandbloom.ng', team:'My co-host Fatima, our guests, and the readers and listeners we design for', tools:'Figma',
   sum:'A home on the internet for Muslim women blooming in career and life: a podcast, open letters and an archive of women doing remarkable things.',
   ov:'Muse & Bloom shares the stories of Muslim women across Africa building careers and lives on their own terms. I shaped the brand, its voice and the website that brings the podcast, the letters and the archive together.',
   role_:{
     url:'museandbloom.ng',
     coverShot:'img/mb/hero.webp', coverCap:'The Muse & Bloom homepage', phone:'img/mb/mobile.webp',
     headline:'Pull up a chair, sis.',
     overview:['Muse & Bloom started with a simple observation: Muslim women building careers rarely see themselves in career advice, and rarely hear from women who have balanced the same faith, family and ambition.',
               'So we built a cozy corner of the internet for them: honest conversations on the podcast, open letters written like notes from an older sister, and an archive of African Muslim women doing remarkable things. I lead the experience end to end, from the voice to the website.'],
     goalLabel:'The goal',
     goal:'One place that feels like a conversation with an older sister: warm, honest, easy to come back to, and simple to grow as the content grows.',
     stats:[['3','ways to take part: listen, read, get inspired'],['9','podcast episodes so far'],['1','home for the podcast, letters and archive']],
     lead:{title:'How I built it.', toc:'How I built it',
       intro:['I treated Muse & Bloom like any product I would lead: start with who it is for, decide what she needs to find, then design the system before the pages.',
              'The voice came first. Every heading, button and empty state talks the way a big sister would, so the site feels like the podcast sounds.'],
       team:['Co-host Fatima','Podcast guests','Readers and listeners','Spotify and Substack, where the content lives'],
       steps:[['Know who it’s for','Muslim women in career and life who want growth without setting faith aside.'],
              ['Find the voice','“Pull up a chair, sis.” Warm, direct and a little playful, in copy and in visuals.'],
              ['Map the content','Podcast, letters, archive and weekly reads, behind four clear links.'],
              ['Design the system','Cream, deep green and pink, with hand-drawn stickers and stamps that repeat on every page.'],
              ['Launch and keep growing','Mobile first, then a steady rhythm of new episodes, letters and stories.']]},
     streamsTitle:'Key decisions.', streamsToc:'Key decisions',
     streams:[['Three ways in','Listen, read or get inspired. The homepage offers all three upfront, so every visitor has an obvious next step.','Homepage'],
              ['An archive you can search','Women are grouped by field, from leadership to sport, with search and filters. Every story links to its source.','Archive'],
              ['Content lives where people already are','Episodes play on Spotify and letters arrive through Substack. The site ties them together instead of competing with them.','Platforms'],
              ['A voice in every detail','“Notes from your big sisters”, “to: you, with love”. Small lines of copy carry the brand as much as the colours do.','UX copy']],
     galleryTitle:'The site.', galleryToc:'The site',
     gallery:[['img/mb/ways.webp',790,300,'Three ways in: listen, read, get inspired'],['img/mb/archive-hero.webp',790,500,'The archive: “She did it. So can you.”'],['img/mb/archive.webp',790,500,'Search and filter by field'],['img/mb/podcast.webp',790,500,'The podcast page']],
     screens:[['img/mb/home.webp','Home','The podcast, letters, archive and weekly reads in one scroll',3507]],
     resultsTitle:'Where it is now.', resultsToc:'Where it is now',
     wins:[['chat','A growing podcast','New episodes with women from science, tech, engineering and quality assurance.'],
           ['people','A community in the inbox','Open letters on Substack for the moments that matter, from a first job to a salary talk.'],
           ['eye','An archive of role models','African Muslim women leaders, founders, scholars and athletes, all in one place.']],
     link:{href:'https://museandbloom.ng/', label:'Visit museandbloom.ng'}
   }},
];
const G = {
  quill:'<path d="M80 10C50 20 30 50 22 88l8 2c8-30 26-54 50-64" fill="currentColor" opacity=".25"/><path d="M80 10C55 30 40 60 30 90" stroke="currentColor" stroke-width="3" fill="none"/>',
  brackets:'<text x="50" y="68" text-anchor="middle" font-family="DM Mono,monospace" font-size="54" fill="currentColor" opacity=".3">&lt;/&gt;</text>',
  sun:'<circle cx="50" cy="50" r="22" fill="currentColor" opacity=".25"/><g stroke="currentColor" stroke-width="3" opacity=".35">'+Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return `<line x1="${(50+Math.cos(a)*30).toFixed(1)}" y1="${(50+Math.sin(a)*30).toFixed(1)}" x2="${(50+Math.cos(a)*44).toFixed(1)}" y2="${(50+Math.sin(a)*44).toFixed(1)}"/>`}).join('')+'</g>',
  phone:'<rect x="30" y="10" width="40" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="3" opacity=".35"/><rect x="36" y="22" width="28" height="18" rx="3" fill="currentColor" opacity=".2"/><rect x="36" y="46" width="28" height="6" rx="3" fill="currentColor" opacity=".2"/>',
  star:'<path d="M50 6 58 38 92 24 70 50 92 76 58 62 50 94 42 62 8 76 30 50 8 24 42 38Z" fill="currentColor" opacity=".25"/>',
  grid:'<g fill="currentColor" opacity=".22"><rect x="12" y="14" width="76" height="16" rx="3"/><rect x="12" y="36" width="36" height="48" rx="3"/><rect x="52" y="36" width="36" height="22" rx="3"/><rect x="52" y="62" width="36" height="22" rx="3"/></g>',
  pencil:'<path d="M20 80 70 30l10 10-50 50H20Z" fill="currentColor" opacity=".25"/><path d="M15 90c20-6 40 4 70-8" stroke="currentColor" stroke-width="3" fill="none" opacity=".35"/>'
};
/* logo files go in logos/<file>; until a file exists, a wordmark shows instead */
const ORGS = [
  ['Ashoka Changemakers','ashoka'],['She Code Africa','she-code-africa'],['WriteTech Hub','writetech-hub'],['Outreachy','outreachy'],
  ['Accessibility Nigeria','accessibility-nigeria'],['DevCareer','devcareer'],['Outsource Global','outsource-global'],['Aiti','aiti']];
const NOW = 2026 + 9.3/12;
const XP = [
  ['Ashoka Changemakers','Experience Design Manager','Nov 2024 – now',2024+10/12,NOW,'var(--verdant)',true,'Experience strategy for social change programmes, research and impact evaluation, documentation and SOPs, and accessible experiences for underserved communities.'],
  ['Tech communities','Designer, volunteer','2019 – now',2019,NOW,'var(--lemon)',true,'Ambassador for Women Techmakers Lokoja, design lead for GDG Lokoja and Accessibility Nigeria, and a design mentor for 3MTT.'],
  ['She Code Africa','Design Lead','Nov 2020 – 2025',2020+10/12,2025.5,'var(--nunzia)',false,'Creative direction and every design resource: the annual Summit, the website, campaigns, sponsorship and pitch decks, and presentation templates.'],
  ['WriteTech Hub','Graphic Designer','Mar 2022 – 2024',2022+2/12,2024.5,'var(--spring)',false,'Led the website redesign after the rebrand from Zaycodes, plus design resources for its community and programmes.'],
];
const COMM = [['Women Techmakers Lokoja','Ambassador · 2022–'],['GDG Lokoja','Design Lead · 2022–'],['Accessibility Nigeria','Design Lead · 2022–'],['3MTT','Design Mentor'],['Outreachy',''],['She Code Africa Minna','2020–'],['Friends of Figma Minna',''],['GDG Minna','2021'],['AngelHack','2020–21'],['Ignition for Good Minna','2020–21'],['Women4Tech Minna','2019–20'],['Developer Student Club Minna','2018–20'],['Enactus Minna','2018–23']];

/* talks: replace the placeholder rows as you send them */
const M='https://medium.com/@fauziyamohd9/';
const TALKS = [
  {when:'2022–', sub:'ongoing', title:'Women Techmakers Lokoja', where:'Women Techmakers Ambassador · talks and events, in person and online', role:'Ambassador, host', c:'var(--lemon)'},
  {when:'2022–', sub:'ongoing', title:'GDG Lokoja', where:'Design talks, community events and DevFest Lokoja · in person and online', role:'Speaker, host', c:'var(--breeze)'},
  {when:'2020–25', sub:'bi-weekly', title:'Design Talk with She Code Africa', where:'She Code Africa · online', role:'Co-creator, co-host', c:'var(--nunzia)'},
  {when:'2024', sub:'Q4', title:'DevFest Lokoja, second edition', where:'GDG Lokoja · Lokoja', role:'Organiser', c:'var(--spring)', href:M+'q3-q4-review-i-adulted-more-than-i-have-ever-done-in-my-life-d9f151b7623c'},
  {when:'2024', sub:'Sep', title:'Creating accessible and inclusive designs', where:'AITI webinar · online', role:'Facilitator', c:'var(--breeze)', href:M+'creating-accessible-and-inclusive-designs-insights-from-the-aiti-webinar-d8ae131eaa1f'},
  {when:'2024', sub:'Q2', title:'Why a good portfolio matters', where:'Config watch party · Friends of Figma Kano', role:'Speaker', c:'var(--lemon)', href:M+'the-quarter-i-lost-my-balance-dd0447e9e94c'},
  {when:'2024', sub:'Q2', title:'Design track, Girls in ICT boot camp', where:'Blue Sapphire × UBEC · three days', role:'Design lead', c:'var(--nunzia)', href:M+'the-quarter-i-lost-my-balance-dd0447e9e94c'},
  {when:'2024', sub:'Q1', title:'My design journey and process', where:'Design Talk at MAAUN, and six more design talks', role:'Speaker', c:'var(--spring)', href:M+'2024-q1-reflection-725c9b4da78c'},
  {when:'2024', sub:'ongoing', title:'3MTT design facilitator', where:'3MTT × Blue Sapphire Hub · Kano', role:'Facilitator', c:'var(--breeze)', href:M+'2024-q1-reflection-725c9b4da78c'},
  {when:'2023', sub:'Apr', title:'International Women’s Day Lokoja', where:'Women Techmakers Lokoja · the chapter’s first event', role:'Organiser, host', c:'var(--lemon)', href:M+'women-tech-and-community-towards-a-tech-ecosystem-where-women-can-thrive-8aa4a8cc7fd6'},
];
const WRITING = [
  ['UX psychology for community growth','May 2025','Ethical design for community spaces: inclusivity, accessibility, cultural sensitivity and well-being.',M+'ux-psychology-for-community-growth-f443c76553e9'],
  ['Four years and eight months at She Code Africa','Jul 2025','From volunteer designer to Design Lead, and what I built along the way.',M+'four-years-and-8-months-later-my-journey-at-she-code-africa-c782cb887d50'],
  ['Creating accessible and inclusive designs','Oct 2024','What I shared at the AITI webinar on designing for everyone.',M+'creating-accessible-and-inclusive-designs-insights-from-the-aiti-webinar-d8ae131eaa1f'],
  ['Crafting an exceptional summit experience','Oct 2023','How we branded She Code Africa Summit 2023, from moodboard to venue.',M+'crafting-an-exceptional-summit-experience-sca-summit-2023-d7972227efab'],
  ['Women, tech and community','May 2023','Starting Women Techmakers Lokoja, and the ecosystem I want to help build.',M+'women-tech-and-community-towards-a-tech-ecosystem-where-women-can-thrive-8aa4a8cc7fd6'],
  ['Are you still you, or just another algorithm?','Apr 2025','A reflection on how much of what we do is ours, and how much the internet shapes.',M+'are-you-still-you-or-just-another-algorithm-7ad962db4b18'],
];
const SW = [['calla','Calla Lily','#FDFBEA'],['breeze','Fresh Breeze','#DCE6F5'],['spring','Breath of Spring','#CBD5A6'],['nunzia','Anthurium Nunzia','#F4B28F'],['lemon','Lemon Drop','#F6D06F']];
const swc = ['var(--calla)','var(--breeze)','var(--verdant)','var(--spring)','var(--nunzia)','var(--lemon)'];
const NAMES = Object.fromEntries(SW.map(([k,n])=>[k,n])); NAMES.night = 'Night';

const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const cardHTML = (p, tag='a') => `<${tag} class="card" ${tag==='a'?`href="#case" data-case="${p.id}" data-cursor="open"`:''}>
  <div class="tag">${esc(p.label)}</div>
  <div class="f fabric pinked" style="background-color:${p.bg};color:${p.fg}">
    <div><span class="yr">${p.year}</span><h3>${esc(p.title)}</h3>${p.thumb?`<div class="meta" style="margin-top:12px">${p.tags.map(t=>`<i>${t}</i>`).join('')}</div>`:''}</div>
    ${p.thumb?`<div class="thumb"><img src="${p.thumb}" alt=""></div>`:`<div class="meta">${p.tags.map(t=>`<i>${t}</i>`).join('')}</div>
    <svg class="glyph" viewBox="0 0 100 100" aria-hidden="true">${G[p.glyph]}</svg>`}
    <span class="shine"></span>
    ${tag==='a'?'<span class="peek" aria-hidden="true">read the story</span>':''}
  </div></${tag}>`;

/* state used across features: declared up front so nothing runs before it exists */
let io = null, co = null, current = null, busy = false, soundOn = true, ac = null;

/* ---------- render ---------- */
$('#featured').innerHTML = ['ashoka-web','sca-summit','muse-bloom'].map(id=>cardHTML(P.find(p=>p.id===id))).join('');
const tabX = [4,22,40,58,12,30,48,66,8,36];
$('#index').innerHTML = P.map((p,i)=>`<a class="folder" href="#case" data-case="${p.id}" data-tags="${p.tags.join('|')}" style="--c:${p.bg};--fg:${p.fg};--x:${tabX[i%tabX.length]}%;z-index:${i+1}">
  <span class="tabl">${esc(p.client)}${p.year?` · ${p.year}`:''}${p.isNew?' <span class="new">New</span>':''}</span>
  <div class="body fabric"><h3>${esc(p.title)}</h3><span class="t">${p.tags.map(t=>`<i>${t}</i>`).join('')}</span>
  <div class="more"><div><p>${esc(p.sum)}</p><span>Open the case study →</span></div></div></div></a>`).join('');

const orgHTML = ORGS.map(([n,f])=>`<span class="lg" title="${esc(n)}"><img src="logos/${f}.png" alt="${esc(n)}"></span>`).join('');
$('#track').innerHTML = orgHTML + orgHTML;
const S0 = 2019, S1 = 2027;
$('#tape').insertAdjacentHTML('beforeend', XP.map(([o,r,d,a,b,c,now,note])=>`<div class="xp"><div class="who"><b>${esc(o)}</b><span>${esc(r)} · ${esc(d)}</span></div>
  <div class="lane">${note?`<span class="xtip${(a-S0)/(S1-S0)>.45?' r':''}" style="--l:${((a-S0)/(S1-S0)*100).toFixed(2)}%">${esc(note)}</span>`:''}<span class="strip fabric${now?' now':''}" tabindex="0" style="--l:${((a-S0)/(S1-S0)*100).toFixed(2)}%;--w:${((b-a)/(S1-S0)*100).toFixed(2)}%;--c:${c};${c==='var(--verdant)'?'color:#FFFFFF':''}">${esc(d)}</span></div></div>`).join(''));
const talkHTML = t=>{const tg=t.href?'a':'div';return `<${tg} class="talk${t.todo?' todo':''}" style="--c:${t.c}"${t.href?` href="${t.href}" target="_blank" rel="noopener"`:''}><div class="when"><b>${esc(t.when)}</b><small>${esc(t.sub)}</small></div><div class="what"><b>${esc(t.title)}</b><span>${esc(t.where)}</span></div><span class="role">${esc(t.role)}${t.href?' ↗':''}</span></${tg}>`;};
const TPER = 5, TPAGES = Math.ceil(TALKS.length/TPER);
function showTalks(n){
  $('#talks').innerHTML = TALKS.slice(n*TPER, n*TPER+TPER).map(talkHTML).join('');
  $('#talksPager').innerHTML = TPAGES<2 ? '' : `<button class="pg-btn" data-tp="${n-1}" ${n===0?'disabled':''} aria-label="Previous">←</button>${Array.from({length:TPAGES},(_,k)=>`<button class="pg-dot${k===n?' on':''}" data-tp="${k}" aria-label="Page ${k+1}" aria-current="${k===n}">${k+1}</button>`).join('')}<button class="pg-btn" data-tp="${n+1}" ${n===TPAGES-1?'disabled':''} aria-label="Next">→</button><span class="pg-count mono">${n*TPER+1}–${Math.min(TALKS.length,n*TPER+TPER)} of ${TALKS.length}</span>`;
}
showTalks(0);
document.addEventListener('click', e => { const b = e.target.closest('#talksPager button'); if (!b || b.disabled) return; showTalks(+b.dataset.tp); });
$('#writing').innerHTML = WRITING.map(([t,d,x,u],i)=>`<a class="post" href="${u}" target="_blank" rel="noopener" style="--c:${swc[[1,3,4,5][i%4]]}"><span class="mono">${esc(d)} · Medium</span><b>${esc(t)}</b><p>${esc(x)}</p><span class="go">Read ↗</span></a>`).join('');
$('#comm').innerHTML = COMM.map(([n,s],i)=>`<span style="--c:${swc[[1,3,4,5][i%4]]};--r:${i%2?2:-2}deg">${esc(n)}${s?` <small>${esc(s)}</small>`:''}</span>`).join('');

const pal = ['#6B7B48','#F4B28F','#F6D06F','#8FA5C9','#A9B97A'];
let li = 0;
$$('[data-split]').forEach(w => { w.innerHTML = [...w.textContent].map(ch => { li++; return `<span class="l" style="--i:${li};--c:${pal[li%pal.length]};--r:${(li%2?-1:1)*(4+li%5*2)}deg">${ch}</span>`; }).join(''); });

/* ---------- clock (Abuja) ---------- */
const tick = () => { const t = new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'Africa/Lagos'}).format(new Date()); $$('.clock').forEach(c=>c.textContent=t); };
tick(); setInterval(tick, 20000);

/* ---------- toast ---------- */
let tt; const toast = m => { const t=$('#toast'); t.textContent=m; t.classList.add('on'); clearTimeout(tt); tt=setTimeout(()=>t.classList.remove('on'),1700); };

/* ---------- theme sounds (made in the browser, no files) ---------- */
function audio(){ try { ac = ac || new (window.AudioContext||window.webkitAudioContext)(); if (ac.state==='suspended') ac.resume(); return ac; } catch(e){ return null; } }
function env(g, t, peak, a, d){ g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(peak,t+a); g.gain.exponentialRampToValueAtTime(0.0001,t+a+d); }
function tone(c, type, f0, f1, t, a, d, peak, dest){
  const o=c.createOscillator(), g=c.createGain(); o.type=type; o.frequency.setValueAtTime(f0,t); if (f1) o.frequency.exponentialRampToValueAtTime(f1,t+a+d*.5);
  env(g,t,peak,a,d); o.connect(g).connect(dest||c.destination); o.start(t); o.stop(t+a+d+.05);
}
const SOUNDS = {
  night(c,t){ [196,293.7,392].forEach((f,i)=>tone(c,'sine',f,0,t+i*.09,.03,1.6-i*.3,.1/(i+1))); },          // low night bell
  calla(c,t){ [1046.5,1568,2093].forEach((f,i)=>tone(c,'sine',f,0,t+i*.06,.01,1.4-i*.3,.09/(i+1))); },              // soft chime
  breeze(c,t){                                                                                                  // a gust of wind
    const len=1.4, buf=c.createBuffer(1,c.sampleRate*len,c.sampleRate), d=buf.getChannelData(0); for (let i=0;i<d.length;i++) d[i]=Math.random()*2-1;
    const n=c.createBufferSource(); n.buffer=buf; const bp=c.createBiquadFilter(); bp.type='bandpass'; bp.Q.value=1.2;
    bp.frequency.setValueAtTime(300,t); bp.frequency.exponentialRampToValueAtTime(1600,t+.6); bp.frequency.exponentialRampToValueAtTime(500,t+len);
    const g=c.createGain(); g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(.32,t+.45); g.gain.exponentialRampToValueAtTime(0.0001,t+len);
    n.connect(bp).connect(g).connect(c.destination); n.start(t); n.stop(t+len);
  },
  spring(c,t){ [[0,2600,4200],[.13,2900,4600],[.26,2400,3900],[.5,3200,5200],[.58,3200,5000]].forEach(([dt,a,b])=>tone(c,'sine',a,b,t+dt,.01,.09,.08)); },  // birdsong
  nunzia(c,t){ [392,493.9,587.3,784].forEach((f,i)=>tone(c,'triangle',f,0,t+i*.08,.005,.45,.13)); },               // warm pluck
  lemon(c,t){ tone(c,'sine',500,1500,t,.005,.14,.2); tone(c,'sine',700,1900,t+.17,.005,.1,.09); }                     // water drop
};
function playSound(k){ if (!soundOn || reduce) return; const c = audio(); if (!c || !SOUNDS[k]) return; try { SOUNDS[k](c, c.currentTime+.02); } catch(e){} }
try { soundOn = localStorage.getItem('ziya-sound') !== 'off'; } catch(e){}
$('#snd').setAttribute('aria-pressed', soundOn);
$('#snd').addEventListener('click', () => { soundOn = !soundOn; $('#snd').setAttribute('aria-pressed', soundOn); try{localStorage.setItem('ziya-sound', soundOn?'on':'off')}catch(e){} toast(soundOn?'Sounds on':'Sounds off'); });

/* ---------- theme: dark by default, each click moves to the next palette ---------- */
const ORDER = ['night', ...SW.map(([k])=>k)];
const curTheme = () => root.dataset.swatch || 'night';
function applySwatch(k, x, y){
  const set = () => { if (k==='night') delete root.dataset.swatch; else root.dataset.swatch = k; };
  try { localStorage.setItem('ziya-swatch',k); } catch(e){}
  playSound(k);
  const b = $('#swbtn'); b.classList.remove('spin'); void b.offsetWidth; b.classList.add('spin');
  b.setAttribute('aria-label', 'Switch colour theme (now '+NAMES[k]+')'); b.title = NAMES[k]+' · click for the next colour';
  toast(NAMES[k]);
  if (!document.startViewTransition || reduce){ set(); return; }
  try {
    const vt = document.startViewTransition(set);
    const r = Math.hypot(Math.max(x, innerWidth-x), Math.max(y, innerHeight-y));
    vt.ready.then(()=>root.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${r}px at ${x}px ${y}px)`]},{duration:800,easing:'cubic-bezier(.7,0,.2,1)',pseudoElement:'::view-transition-new(root)'})).catch(()=>{});
  } catch(e){ set(); }
}
try { const s = localStorage.getItem('ziya-swatch'); if (s && s!=='night' && NAMES[s]) root.dataset.swatch = s; } catch(e){}
$('#swbtn').addEventListener('click', e => {
  const next = ORDER[(ORDER.indexOf(curTheme())+1) % ORDER.length];
  const r = e.currentTarget.getBoundingClientRect();
  applySwatch(next, r.left+r.width/2, r.top+r.height/2);
});

/* ---------- copy email ---------- */
$('#copy').addEventListener('click', () => {
  const v = $('#email').textContent;
  const sel = () => { const r=document.createRange(); r.selectNodeContents($('#email')); const s=getSelection(); s.removeAllRanges(); s.addRange(r); toast('Selected, press copy'); };
  try { navigator.clipboard.writeText(v).then(()=>toast('Copied! talk soon'), sel); } catch(e){ sel(); }
});

/* ---------- reveals (visible at rest) ---------- */
function observeReveals(){
  const heads = $$('[data-page]:not([hidden]) .head');
  if (reduce || !('IntersectionObserver' in window)){ heads.forEach(h=>h.classList.add('seen')); return; }
  if (io) io.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.remove('pre'); e.target.classList.add('seen'); io.unobserve(e.target); } }), {rootMargin:'0px 0px -8% 0px'});
  $$('[data-page]:not([hidden]) .rv, [data-page]:not([hidden]) .strip').forEach(el => { const r = el.getBoundingClientRect(); if (r.top > innerHeight){ el.classList.add('pre'); io.observe(el); } });
  heads.forEach(h => { const r = h.getBoundingClientRect(); if (r.top <= innerHeight) setTimeout(()=>h.classList.add('seen'), 600); else io.observe(h); });
}
function observeCounters(){
  if (reduce || !('IntersectionObserver' in window)) return;
  if (co) co.disconnect();
  co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; co.unobserve(e.target);
    const el = e.target, to = +el.dataset.count, suf = el.dataset.suf || ''; let t0;
    const step = t => { t0 ??= t; const k = Math.min(1,(t-t0)/1200); el.textContent = Math.round(to*(1-Math.pow(1-k,3)))+suf; if (k<1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), {threshold:.6});
  $$('[data-count]').forEach(el=>co.observe(el));
}

/* ---------- router with a pinked label sheet ---------- */
const pages = $$('[data-page]');
const CAPS = {home:'back to the start', work:'six swatches', about:'a bit about me', case:'a closer look'};
const sheet = $('#sheet');
function swap(name){
  pages.forEach(p => { p.hidden = p.dataset.page !== name; p.classList.toggle('shown', p.dataset.page===name); });
  $$('.nav-links a').forEach(a => a.getAttribute('href')==='#'+name ? a.setAttribute('aria-current','page') : a.removeAttribute('aria-current'));
  $('#progress').hidden = name !== 'case';
  scrollTo(0,0); current = name;
  try { observeReveals(); } catch(e){}
}
function clearSheet(){ sheet.getAnimations().forEach(a=>a.cancel()); sheet.style.transform = ''; sheet.style.visibility = ''; busy = false; }
function sheetTo(name, label){
  $('#sheetName').innerHTML = [...label].map(c=>`<span>${c===' '?'&nbsp;':esc(c)}</span>`).join('');
  $('#sheetCap').textContent = CAPS[name] || '';
  busy = true; sheet.style.visibility = 'visible';
  const safety = setTimeout(()=>{ if (current!==name) swap(name); clearSheet(); }, 2500);   // never leave the cover up
  const inA = sheet.animate([{transform:'translateY(110%)'},{transform:'translateY(0)'}],{duration:480,easing:'cubic-bezier(.7,0,.2,1)',fill:'forwards'});
  $$('#sheetName span').forEach((s,i)=>s.animate([{transform:'translateY(.6em) rotate(6deg)',opacity:0},{transform:'none',opacity:1}],{duration:460,delay:160+i*30,easing:'cubic-bezier(.2,.9,.3,1.3)',fill:'both'}));
  inA.finished.then(()=>{
    try { swap(name); } catch(e){}
    setTimeout(()=>{
      const out = sheet.animate([{transform:'translateY(0)'},{transform:'translateY(-110%)'}],{duration:520,easing:'cubic-bezier(.7,0,.2,1)',fill:'forwards'});
      out.finished.then(()=>{ clearTimeout(safety); clearSheet(); }, ()=>{ clearTimeout(safety); clearSheet(); });
    }, 220);
  }, ()=>{ clearTimeout(safety); swap(name); clearSheet(); });
}
function go(name, opts={}){
  if (name === 'contact'){ $('#contact').scrollIntoView({behavior: reduce?'auto':'smooth'}); return; }
  if (!pages.some(p=>p.dataset.page===name)) name = 'home';
  if (busy) return;
  if (name === current && name !== 'case'){ scrollTo({top:0,behavior:reduce?'auto':'smooth'}); return; }
  if (opts.instant || reduce || current === null){ swap(name); return; }
  if (opts.morph && document.startViewTransition){
    try {
      opts.morph.style.viewTransitionName = 'cover';
      const vt = document.startViewTransition(()=>{ opts.morph.style.viewTransitionName=''; swap(name); $('#csCover').style.viewTransitionName='cover'; });
      vt.finished.finally(()=>{ $('#csCover').style.viewTransitionName=''; });
      return;
    } catch(e){ opts.morph.style.viewTransitionName=''; }
  }
  sheetTo(name, name==='case' ? 'Case study' : name.charAt(0).toUpperCase()+name.slice(1));
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  const id = a.getAttribute('href').slice(1);
  if (!['home','work','about','case','contact'].includes(id)) return;
  e.preventDefault();
  if (a.dataset.case) loadCase(a.dataset.case);
  if (id !== 'contact') { try { history.replaceState(null,'','#'+id); } catch(err){} }
  const f = a.classList.contains('card') ? $('.f', a) : null;
  go(id, {morph: f});
});

/* ---------- real case study renderer ---------- */
const ICON = {
  path:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="19" r="2"/><circle cx="19" cy="5" r="2"/><path d="M7 19h6a4 4 0 0 0 0-8h-2a4 4 0 0 1 0-8h6"/></svg>',
  eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/><path d="M8.5 11h7M8.5 14h4"/></svg>',
  people:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c2.8 0 5 2 5 5"/></svg>',
  grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M17.5 14v7M14 17.5h7"/></svg>'
};
const bar = url => `<div class="bbar"><i></i><i></i><i></i><span>${esc(url)}</span></div>`;
function renderStory(p){
  const st = p.story, el = $('#csStory');
  const sec = (id, title, inner) => `<section class="cs-sec" id="${id}"><h2>${title}</h2>${inner}</section>`;
  el.innerHTML = `
  <nav class="toc" aria-label="Case study sections">
    <a href="#ss-overview">My role</a>${leadToc(p.lead)}<a href="#ss-streams">What I look after</a><a href="#ss-web">Website redesign</a><a href="#ss-problem">The problem</a><a href="#ss-process">Process</a><a href="#ss-decisions">Key decisions</a><a href="#ss-change">Before &amp; after</a><a href="#ss-screens">The screens</a><a href="#ss-results">What changed</a><a href="#ss-reflect">Reflection</a>
  </nav>
  <div>
    ${sec('ss-overview',st.roleTitle,`
      <div class="copy">${st.roleOverview.map((t,i)=>`<p${i===0?' class="story-lede"':''}>${esc(t)}</p>`).join('')}</div>`)}
    ${leadHTML(p.lead)}
    ${sec('ss-streams','What I look after.',`
      <p>The website is the most visible part of the job. Most of the work happens around it.</p>
      <div class="streams">${st.streams.map(([t,d,tag])=>`<div class="stream">${tag?`<span class="mono">${esc(tag)}</span>`:''}<b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div>`)}
    ${sec('ss-web','Deep dive: the website redesign.',`
      <div class="copy">${st.overview.map((t,i)=>`<p${i===0?' class="story-lede"':''}>${esc(t)}</p>`).join('')}</div>
      <div class="goal"><b>The goal</b>${esc(st.goal)}</div>`)}
    ${sec('ss-problem','Easy to read about, hard to act on.',`
      <div class="issues">${st.issues.map(([c,t,d])=>`<div class="issue" style="--c:${c}"><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div>`)}
    ${sec('ss-process','How it came together.',`
      <p>From the first question to launch, the founder and stakeholders were part of every step. Hover a stage for the detail.</p>
      <div class="steps">${st.steps.map(([c,t,d],i)=>`<div class="step" style="--c:${c}${c==='var(--verdant)'?';--cfg:#FFFFFF':''}"><span class="mono">Stage ${i+1}</span><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div>`)}
    ${sec('ss-decisions','Four calls that shaped it.',`
      <p>Hover or tap a pin to read the thinking behind it.</p>
      ${st.decisions.map((d,di)=>{ const base = st.decisions.slice(0,di).reduce((n,x)=>n+x.pins.length,0); return `
      <div class="annot2">
        <div class="shot-wrap"><div class="bframe">${bar(d.url)}<img src="${d.img}" width="${d.w}" height="${d.h}" alt="Annotated screen from the new Changemakers website" loading="lazy"></div>
          ${d.pins.map(([x,y,t,n],i)=>`<button class="pin" style="left:${x}%;top:calc(30px + (100% - 30px) * ${y/100})" data-n="${base+i+1}">${base+i+1}<span class="tip"><b>${esc(t)}.</b> ${esc(n)}</span></button>`).join('')}</div>
        <ol class="notes-list">${d.pins.map(([x,y,t,n],i)=>`<li data-n="${base+i+1}"><i>${base+i+1}</i><div><b>${esc(t)}</b><span>${esc(n)}</span></div></li>`).join('')}</ol>
      </div>`}).join('')}`)}
    ${sec('ss-change','Drag to compare.',`
      <div class="bframe">${bar(st.ba.url)}
        <div class="ba real">
          <div class="layer before"><img src="${st.ba.before}" width="${st.ba.w}" height="${st.ba.h}" alt="The old About page" loading="lazy"><span class="lbl">Before</span></div>
          <div class="layer after"><img src="${st.ba.after}" width="${st.ba.w}" height="${st.ba.h}" alt="The redesigned About page" loading="lazy"><span class="lbl">After</span></div>
          <div class="handle"></div>
          <input type="range" min="0" max="100" value="50" aria-label="Compare the old and new About page">
        </div></div>
      <p class="ba-cap">${esc(st.ba.cap)}</p>`)}
    ${sec('ss-screens','The new site, page by page.',`
      <p class="scroll-hint">hover a page to scroll through it ↓</p>
      <div class="screens">${st.screens.map(([src,t,d,isNew,h])=>`<figure class="scrollshot" style="--dur:${Math.round(h/430)}s"><div class="bframe">${bar(st.url)}<div class="vp" tabindex="0" aria-label="${esc(t)} page, scrollable"><img src="${src}" width="760" height="${h}" alt="Full ${esc(t)} page of the new Changemakers website" loading="lazy"></div></div>
        <figcaption><div><b>${esc(t)}</b>${isNew?'<span class="newtag">New page</span>':''}</div><span>${esc(d)}</span></figcaption></figure>`).join('')}</div>`)}
    ${sec('ss-results','What changed.',`
      <p>${esc(st.winsNote)}</p>
      <div class="wins">${st.wins.map(([ic,t,d])=>`<div class="win">${ICON[ic]}<b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div>`)}
    ${sec('ss-reflect','What I’d do differently.',`<p class="reflect">${st.reflect}</p>`)}
  </div>`;
}
const coverTpl = $('#csCover').innerHTML;

/* ---------- showcase renderer (mockup-led case study) ---------- */
const gimg = (src,w,h,cap) => `<figure class="gimg" tabindex="0" data-cap="${esc(cap||'')}"><img src="${src}" width="${w}" height="${h}" alt="${esc(cap||'')}" loading="lazy">${cap?`<figcaption>${esc(cap)}</figcaption>`:''}</figure>`;
function renderShowcase(p){
  const sc = p.showcase, el = $('#csStory');
  const sec = (id, title, inner) => `<section class="cs-sec" id="${id}"><h2>${title}</h2>${inner}</section>`;
  const yr = Y => `<article class="yrc" id="ss-y${Y.y}" style="--c:${Y.c}">
      <div class="yr-head"><span class="yr-num" aria-hidden="true">${Y.y}</span><div><h3>${esc(Y.theme)}</h3><span class="mono">${esc(Y.meta)}</span></div></div>
      <p class="yr-story">${esc(Y.story)}</p>
      <div class="chips">${Y.chips.map(c=>`<span>${esc(c)}</span>`).join('')}</div>
      ${gimg(...Y.feature)}
      ${Y.groups ? Y.groups.map(([t,items])=>`<div class="grp"><h4>${esc(t)}</h4><div class="masonry">${items.map(i=>gimg(...i)).join('')}</div></div>`).join('') : ''}
      ${Y.deck ? `<div class="grp"><h4>The Summit deck</h4><div class="deckrow">${Y.deck.map(([src,t])=>`<figure class="page">${gimg(src,464,600,t)}<span>${esc(t)}</span></figure>`).join('')}</div></div>` : ''}
      ${Y.gallery ? `<div class="masonry">${Y.gallery.map(i=>gimg(...i)).join('')}</div>` : ''}
    </article>`;
  el.innerHTML = `
  <nav class="toc" aria-label="Case study sections">
    <a href="#ss-brief">The brief</a>${leadToc(p.lead)}<a href="#ss-approach">The approach</a><a href="#ss-years">Three summits</a><a href="#ss-voices">In their words</a><a href="#ss-kit">Everything we made</a>
  </nav>
  <div>
    ${sec('ss-brief','One summit. One room. A whole continent watching.',`
      <div class="copy">${sc.brief.map((t,i)=>`<p${i===0?' class="story-lede"':''}>${esc(t)}</p>`).join('')}</div>
      <div class="sc-stats">${sc.stats.map(([n,l])=>`<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join('')}</div>`)}
    ${leadHTML(p.lead)}
    ${sec('ss-approach','Designing three experiences at once.',`
      <p>Every Summit had to work before the day, in the room and far beyond it. Each layer had its own job.</p>
      <div class="layers">${sc.layers.map(([c,k,t,d])=>`<div class="layer" style="--c:${c}"><span class="mono">${esc(k)}</span><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div>`)}
    <section class="cs-sec" id="ss-years"><h2>Three summits, one growing system.</h2>
      <nav class="yrnav" aria-label="Jump to year">${sc.years.map(Y=>`<a href="#ss-y${Y.y}">${Y.y}</a>`).join('')}</nav>
      ${sc.years.map(yr).join('')}
    </section>
    ${sec('ss-voices','In their words.',`
      <div class="voices">${sc.voices.map(([q,w])=>`<blockquote class="voice"><p>${esc(q)}</p><cite>${esc(w)}</cite></blockquote>`).join('')}</div>`)}
    ${sec('ss-kit','Everything we made.',`
      <p>Across three years, the team and I designed and delivered all of this for one community.</p>
      <div class="kit2">${sc.kit.map((k,i)=>`<span style="--c:${swc[[1,3,4,5][i%4]]};--r:${i%2?2:-2}deg">${esc(k)}</span>`).join('')}</div>
      <figure class="closing"><img src="${sc.closing[0]}" width="${sc.closing[1]}" height="${sc.closing[2]}" alt="Attendees queueing past the giant She Code Africa logo sculpture" loading="lazy"><p>Built for the women in the room, and every woman who wasn’t.</p></figure>`)}
  </div>`;
  if ('IntersectionObserver' in window){
    const yo = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('seen'); $$('#csStory .yrnav a').forEach(a=>a.classList.toggle('on', a.getAttribute('href')==='#'+e.target.id)); } }),{rootMargin:'-30% 0px -60% 0px'});
    $$('#csStory .yrc').forEach(y=>yo.observe(y));
  }
}
/* lightbox for gallery images */
function openLB(fig){
  const img = $('img', fig); if (!img) return;
  const lb = document.createElement('div'); lb.className='lb'; lb.setAttribute('role','dialog'); lb.setAttribute('aria-label','Image preview');
  lb.innerHTML = `<div><img src="${img.currentSrc||img.src}" alt="${esc(img.alt)}">${fig.dataset.cap?`<p>${esc(fig.dataset.cap)}</p>`:''}</div><button aria-label="Close preview">×</button>`;
  document.body.appendChild(lb); requestAnimationFrame(()=>lb.classList.add('on'));
  const close = () => { lb.classList.remove('on'); setTimeout(()=>lb.remove(),250); document.removeEventListener('keydown',kd); fig.focus(); };
  const kd = e => { if (e.key==='Escape') close(); };
  lb.addEventListener('click', close); document.addEventListener('keydown', kd); $('button',lb).focus();
}
document.addEventListener('click', e => { const f = e.target.closest('#csStory .gimg, #csStory .zoomable, #csCover .zoomable'); if (!f) return; if (f.matches('.bframe')) { const w=document.createElement('figure'); w.dataset.cap=f.dataset.cap; w.appendChild($('img',f).cloneNode()); openLB(w); return; } if (f.matches('.cards')) { const im=e.target.closest('img'); if (im) { const w=document.createElement('figure'); w.dataset.cap=f.dataset.cap; w.appendChild(im.cloneNode()); openLB(w); } return; } if (f.matches('.carousel .ig-img')) { const imgs=$$('img',f); const vis=imgs.find(i=>i.style.transform==='translateX(0%)')||imgs[0]; const w=document.createElement('figure'); w.dataset.cap=f.dataset.cap; w.appendChild(vis.cloneNode()); openLB(w); return; } openLB(f); });
document.addEventListener('keydown', e => { if ((e.key==='Enter'||e.key===' ') && e.target.matches && e.target.matches('#csStory .gimg')) { e.preventDefault(); openLB(e.target); } });


/* ---------- rebuild renderer (V1 → V2 website) ---------- */
const rebuildCoverHTML = p => { const r=p.rebuild; return `<div class="rb-cover">
  <div class="rb-name" aria-label="Zaycodes became WriteTech Hub"><s>Zaycodes</s><svg viewBox="0 0 120 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M4 26 C 34 6, 74 6, 112 20"/><path d="M98 9 L113 20 L96 27"/></svg><b>WriteTech Hub</b></div>
  <div class="rb-stage">
    ${laptopHTML(r.ba.after, 'The WriteTech Hub homepage')}
    <figure class="rb-card svc zoomable" data-cap="Success stories from programme participants and facilitators"><img src="img/wt/c-story.webp" width="333" height="326" alt="A success story card from a WriteTech Hub facilitator"><figcaption>in their words</figcaption></figure>
    <figure class="rb-card who zoomable" data-cap="The WriteTech Accelerator Programme page"><img src="img/wt/c-accel.webp" width="790" height="450" alt="The WriteTech Accelerator Programme page"><figcaption>a home for programmes</figcaption></figure>
  </div>
</div>`; };
function renderRebuild(p){
  const r = p.rebuild, el = $('#csStory');
  const sec = (id, title, inner) => `<section class="cs-sec" id="${id}"><h2>${title}</h2>${inner}</section>`;
  const shot = ([src,t,d,isNew,h], url) => `<figure class="scrollshot" style="--dur:${Math.round(h/330)}s"><div class="bframe">${bar(url)}<div class="vp" tabindex="0" aria-label="${esc(t)}, scrollable"><img src="${src}" width="790" height="${h}" alt="${esc(t)} page on writetechhub.org" loading="lazy"></div></div>
        <figcaption><div><b>${esc(t)}</b>${isNew?'<span class="newtag">New page</span>':''}</div><span>${esc(d)}</span></figcaption></figure>`;
  el.innerHTML = `
  <nav class="toc" aria-label="Case study sections">
    <a href="#ss-overview">Overview</a>${leadToc(p.lead)}<a href="#ss-problem">The problem</a><a href="#ss-change">First screen</a><a href="#ss-screens">The new site</a><a href="#ss-impact">What it opened up</a>
  </nav>
  <div>
    ${sec('ss-overview','New name, bigger job.',`
      <div class="copy">${r.overview.map((t,i)=>`<p${i===0?' class="story-lede"':''}>${esc(t)}</p>`).join('')}</div>
      <div class="goal"><b>The goal</b>${esc(r.goal)}</div>`)}
    ${leadHTML(p.lead)}
    ${sec('ss-problem','A good page about the work, with no way in.',`
      <div class="issues">${r.issues.map(([c,t,d])=>`<div class="issue" style="--c:${c}"><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div>`)}
    ${sec('ss-change','Drag to compare the first screen.',`
      <div class="bframe">${bar(r.url)}
        <div class="ba real">
          <div class="layer before"><img src="${r.ba.before}" width="${r.ba.w}" height="${r.ba.h}" alt="The old first screen, Zaycodes" loading="lazy"><span class="lbl">Before</span></div>
          <div class="layer after"><img src="${r.ba.after}" width="${r.ba.w}" height="${r.ba.h}" alt="The new first screen, WriteTech Hub" loading="lazy"><span class="lbl">After</span></div>
          <div class="handle"></div>
          <input type="range" min="0" max="100" value="50" aria-label="Compare the old and new first screen">
        </div></div>
      <p class="ba-cap">${esc(r.ba.cap)}</p>`)}
    ${sec('ss-screens','The new site, page by page.',`
      <p class="scroll-hint">hover a page to scroll through it ↓</p>
      <div class="screens rb-screens">${r.screens.map(s=>shot(s, r.url)).join('')}</div>`)}
    ${sec('ss-impact','What the new site opened up.',`
      <p>The redesign made it easier for clients, writers, sponsors and facilitators to find their way in.</p>
      <div class="adds">${r.impact.map(([t,d])=>`<div class="add"><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div>`)}
  </div>`;
}

/* ---------- design-system renderer (DalO) ---------- */
const systemCoverHTML = p => { const y=p.system; return `<div class="ds-cover">
  <div class="ds-stage">
    <figure class="bframe old">${bar(y.url)}<div class="rbwin"><img src="img/dalo/old-payments.webp" width="692" height="939" alt="The old DalO payment summary"></div><figcaption>before</figcaption></figure>
    <figure class="bframe new">${bar(y.url)}<div class="rbwin"><img src="img/dalo/new-payments.webp" width="692" height="944" alt="The redesigned DalO payment summary"></div><figcaption>after</figcaption></figure>
  </div>
</div>`; };
function renderSystem(p){
  const y = p.system, el = $('#csStory');
  const sec = (id, title, inner) => `<section class="cs-sec" id="${id}"><h2>${title}</h2>${inner}</section>`;
  const shot = ([src,t,d,h]) => `<figure class="scrollshot" style="--dur:${Math.round(h/330)}s"><div class="bframe">${bar(y.url)}<div class="vp" tabindex="0" aria-label="${esc(t)}, scrollable"><img src="${src}" width="692" height="${h}" alt="${esc(t)}, redesigned" loading="lazy"></div></div>
        <figcaption><div><b>${esc(t)}</b></div><span>${esc(d)}</span></figcaption></figure>`;
  el.innerHTML = `
  <nav class="toc" aria-label="Case study sections">
    <a href="#ss-overview">Overview</a>${leadToc(p.lead)}<a href="#ss-problem">The problem</a><a href="#ss-system">The system</a><a href="#ss-change">Before &amp; after</a><a href="#ss-screens">The new screens</a><a href="#ss-results">Results</a>
  </nav>
  <div>
    ${sec('ss-overview','Fix the system, then the screens.',`
      <div class="copy">${y.overview.map((t,i)=>`<p${i===0?' class="story-lede"':''}>${esc(t)}</p>`).join('')}</div>
      <div class="goal"><b>The goal</b>${esc(y.goal)}</div>`)}
    ${leadHTML(p.lead)}
    ${sec('ss-problem','A product that had grown one screen at a time.',`
      <div class="issues">${y.issues.map(([c,t,d])=>`<div class="issue" style="--c:${c}"><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div>`)}
    ${sec('ss-system','The system, in short.',`
      <p>${esc(y.systemNote)}</p>
      <div class="ds-snips">${y.parts.map(x=>`<figure class="ds-snip zoomable" data-cap="${esc(x.t)}: ${esc(x.d)}"><img src="${x.img}" width="${x.w}" height="${x.h}" alt="${esc(x.t)} from the DalO design system" loading="lazy"><figcaption>${esc(x.t)}</figcaption></figure>`).join('')}</div>
      <ul class="ds-extras">${y.extras.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`)}
    ${sec('ss-change','Old and new, side by side.',`
      <p>Drag across each screen to compare.</p>
      ${y.pairs.map(x=>`<figure class="ds-pair">
        <div class="bframe">${bar(y.url)}
          <div class="ba real">
            <div class="layer before"><img src="${x.old}" width="692" height="620" alt="Old ${esc(x.t)} screen" loading="lazy"><span class="lbl">Before</span></div>
            <div class="layer after"><img src="${x.nu}" width="692" height="620" alt="New ${esc(x.t)} screen" loading="lazy"><span class="lbl">After</span></div>
            <div class="handle"></div>
            <input type="range" min="0" max="100" value="50" aria-label="Compare the old and new ${esc(x.t)} screen">
          </div></div>
        <figcaption><b>${esc(x.t)}</b>${esc(x.d)}</figcaption></figure>`).join('')}`)}
    ${sec('ss-screens','The new screens.',`
      <p class="scroll-hint">hover a page to scroll through it ↓</p>
      <div class="screens rb-screens">${y.screens.map(shot).join('')}</div>`)}
    ${sec('ss-results','What changed.',`
      <div class="sc-stats">${p.stats.map(([v,s,l])=>`<div><b>${v}${s}</b><span>${esc(l)}</span></div>`).join('')}</div>
      <div class="wins">${y.wins.map(([ic,t,d])=>`<div class="win">${ICON[ic]}<b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div>`)}
  </div>`;
}

/* ---------- shared: how I led it ---------- */
const STEPC = ['var(--breeze)','var(--spring)','var(--lemon)','var(--nunzia)','var(--verdant)'];
const leadHTML = (L, id='ss-lead') => !L ? '' : `<section class="cs-sec" id="${id}"><h2>${L.title||'How I led it.'}</h2>
  <div class="lead-intro">${(Array.isArray(L.intro)?L.intro:[L.intro]).map(t=>`<p>${esc(t)}</p>`).join('')}</div>
  ${L.team?`<div class="lead-team"><b>Who I worked with</b><ul>${L.team.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div>`:''}
  ${L.steps?`<div class="steps">${L.steps.map(([t,d],i)=>`<div class="step" style="--c:${STEPC[i%5]}${STEPC[i%5]==='var(--verdant)'?';--cfg:#FFFFFF':''}"><span class="mono">Step ${i+1}</span><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div>`:''}
</section>`;
const leadToc = L => L ? `<a href="#ss-lead">${L.toc||'How I led it'}</a>` : '';

/* ---------- role renderer (She Code Africa, Muse & Bloom) ---------- */
const roleCoverHTML = p => { const r=p.role_;
  if (r.coverPhoto) return `<img src="${r.coverPhoto[0]}" width="${r.coverPhoto[1]}" height="${r.coverPhoto[2]}" alt="${esc(r.coverPhoto[3])}"><figcaption>${esc(r.coverPhoto[3])}</figcaption>`;
  return `<div class="mb-cover"><div class="mb-stage">
    <figure class="bframe zoomable" data-cap="${esc(r.coverCap||'')}">${bar(r.url)}<img src="${r.coverShot}" width="790" height="500" alt="${esc(r.coverCap||'')}"></figure>
    ${r.phone?`<div class="mb-phone zoomable" data-cap="On a phone"><img src="${r.phone}" width="390" height="844" alt="The site on a phone"></div>`:''}
  </div></div>`; };
function renderRole(p){
  const r = p.role_, el = $('#csStory');
  const sec = (id, title, inner) => `<section class="cs-sec" id="${id}"><h2>${title}</h2>${inner}</section>`;
  const shot = ([src,t,d,h]) => `<figure class="scrollshot" style="--dur:${Math.round(h/330)}s"><div class="bframe">${bar(r.url)}<div class="vp" tabindex="0" aria-label="${esc(t)}, scrollable"><img src="${src}" width="790" height="${h}" alt="${esc(t)}" loading="lazy"></div></div>
        <figcaption><div><b>${esc(t)}</b></div><span>${esc(d)}</span></figcaption></figure>`;
  const link = r.link ? (r.link.case ? `<a class="btn" href="#case" data-case="${r.link.case}">${esc(r.link.label)} <span class="arr">→</span></a>` : `<a class="btn" href="${r.link.href}" target="_blank" rel="noopener">${esc(r.link.label)} <span class="arr">↗</span></a>`) : '';
  el.innerHTML = `
  <nav class="toc" aria-label="Case study sections">
    <a href="#ss-overview">Overview</a>${leadToc(r.lead)}<a href="#ss-streams">${esc(r.streamsToc||'What I did')}</a>${r.gallery?`<a href="#ss-gallery">${esc(r.galleryToc||'The work')}</a>`:''}<a href="#ss-results">${esc(r.resultsToc||'What it led to')}</a>
  </nav>
  <div>
    ${sec('ss-overview', r.headline, `
      <div class="copy">${r.overview.map((t,i)=>`<p${i===0?' class="story-lede"':''}>${esc(t)}</p>`).join('')}</div>
      ${r.goal?`<div class="goal"><b>${esc(r.goalLabel||'The goal')}</b>${esc(r.goal)}</div>`:''}
      ${r.stats?`<div class="sc-stats">${r.stats.map(([n,l])=>`<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join('')}</div>`:''}`)}
    ${leadHTML(r.lead)}
    ${sec('ss-streams', r.streamsTitle||'What I did.', `
      ${r.streamsIntro?`<p>${esc(r.streamsIntro)}</p>`:''}
      <div class="streams">${r.streams.map(([t,d,tag])=>`<div class="stream">${tag?`<span class="mono">${esc(tag)}</span>`:''}<b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div>`)}
    ${r.gallery?sec('ss-gallery', r.galleryTitle||'The work.', `
      ${r.galleryIntro?`<p>${esc(r.galleryIntro)}</p>`:''}
      <div class="masonry">${r.gallery.map(i=>gimg(...i)).join('')}</div>
      ${r.screens?`<p class="scroll-hint">hover a page to scroll through it ↓</p><div class="screens rb-screens">${r.screens.map(shot).join('')}</div>`:''}`):''}
    ${sec('ss-results', r.resultsTitle||'What it led to.', `
      <div class="wins">${r.wins.map(([ic,t,d])=>`<div class="win">${ICON[ic]}<b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div>
      ${link?`<div class="role-link">${link}</div>`:''}`)}
  </div>`;
}
/* ---------- mockup renderer ---------- */
const IGACT = '<div class="ig-act"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.4-9.3-9A5 5 0 0 1 12 6a5 5 0 0 1 9.3 6C19 16.6 12 21 12 21Z"/></svg><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/></svg><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 3-9.5 9.5M22 3l-6.5 18-3-8.5L4 9.5 22 3Z"/></svg></div>';
const IGNEXT = '<div class="ig-next"><div class="ig-top"><i></i><span>devcareer</span><b>···</b></div><div class="ig-ghost"></div></div>';
const phoneHTML = (src, cap, handle='devcareer') => `<div class="phone"><div class="scr"><div class="ig-top"><i></i><span>${handle}</span><b>···</b></div><div class="ig-img zoomable" data-cap="${esc(cap||'')}"><img src="${src}" alt="${esc(cap||'Campaign post')}" loading="lazy"></div>${IGACT}<div class="ig-cap"><i></i><i></i><i></i></div>${IGNEXT}</div></div>`;
const carouselHTML = (srcs, cap) => `<div class="phone carousel" data-n="${srcs.length}"><div class="scr"><div class="ig-top"><i></i><span>devcareer</span><b>···</b></div><div class="ig-img zoomable" data-cap="${esc(cap||'')}">${srcs.map((s,i)=>`<img src="${s}" alt="${esc(cap||'')} ${i+1}" loading="lazy" style="transform:translateX(${i*100}%)">`).join('')}</div><div class="dots">${srcs.map((_,i)=>`<b class="${i?'':'on'}"></b>`).join('')}</div>${IGACT}<div class="ig-cap"><i></i><i></i><i></i></div>${IGNEXT}</div></div>`;
const laptopHTML = (src, cap) => `<div class="laptop"><div class="lid"><div class="disp zoomable" data-cap="${esc(cap||'')}"><img src="${src}" alt="${esc(cap||'')}" loading="lazy"></div></div><div class="base"></div></div>`;
function sceneHTML(sc, theme){
  let inner='';
  if (sc.t==='fan') inner = sc.items.map(s=>phoneHTML(s, sc.cap)).join('');
  if (sc.t==='duo') inner = carouselHTML(sc.left.carousel, sc.cap) + phoneHTML(sc.right.img, sc.cap);
  if (sc.t==='sheet') inner = `<div class="sheet-wrap zoomable" data-cap="${esc(sc.cap)}"><img src="${sc.img}" alt="${esc(sc.cap)}" loading="lazy"></div>`;
  if (sc.t==='stack') inner = `<div class="cards zoomable" data-cap="${esc(sc.cap)}">${sc.cards.map(c=>`<img src="${c}" alt="" loading="lazy">`).join('')}</div>` + phoneHTML(sc.phone, sc.cap);
  if (sc.t==='wall') inner = sc.items.map((s,i)=>`${i?'<span class="arrow" aria-hidden="true">→</span>':''}<figure class="poster zoomable" data-cap="${esc(sc.cap)}" style="margin:0"><img src="${s}" alt="${esc(sc.cap)}" loading="lazy"></figure>`).join('');
  if (sc.t==='desk') inner = laptopHTML(sc.screen, sc.cap) + phoneHTML(sc.phone, sc.cap);
  return `<div><div class="mk-scene ${theme} ${sc.t==='sheet'?'stickers':sc.t}">${inner}</div><p class="mk-cap">${esc(sc.cap)}</p></div>`;
}
let carTimer = null;
function renderMock(p){
  const m = p.mock, el = $('#csStory');
  const sec = (id, title, inner) => `<section class="cs-sec" id="${id}"><h2>${title}</h2>${inner}</section>`;
  el.innerHTML = `
  <nav class="toc" aria-label="Case study sections">
    <a href="#ss-brief">The brief</a>${leadToc(p.lead)}${m.chapters.map(c=>`<a href="#ss-${c.id}">${esc(c.key.split(' ').slice(0,2).join(' '))}</a>`).join('')}<a href="#ss-kit">Everything we made</a>
  </nav>
  <div>
    ${sec('ss-brief','When the feed is the venue.',`
      <div class="copy">${m.brief.map((t,i)=>`<p${i===0?' class="story-lede"':''}>${esc(t)}</p>`).join('')}</div>
      <div class="sc-stats">${m.stats.map(([n,l])=>`<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join('')}</div>`)}
    ${leadHTML(p.lead)}
    <section class="cs-sec" id="ss-chapters"><h2>Two hackathons, two worlds.</h2>
    ${m.chapters.map(c=>`<article class="mk-chap" id="ss-${c.id}" data-theme="${c.theme}">
        <div><h3>${esc(c.key)}</h3><span class="mono">${esc(c.sub)}</span></div>
        <p class="yr-story">${esc(c.story)}</p>
        <div class="chips">${c.chips.map(x=>`<span>${esc(x)}</span>`).join('')}</div>
        ${c.scenes.map(sc=>sceneHTML(sc, c.theme)).join('')}
      </article>`).join('')}
    </section>
    ${sec('ss-kit','Everything we made.',`
      <p>Across both hackathons, I designed and delivered all of this for DevCareer and its partners.</p>
      <div class="kit2">${m.kit.map((k,i)=>`<span style="--c:${swc[[1,3,4,5][i%4]]};--r:${i%2?2:-2}deg">${esc(k)}</span>`).join('')}</div>`)}
  </div>`;
  clearInterval(carTimer);
  if (!reduce){
    let k = 0;
    carTimer = setInterval(()=>{ if (current!=='case') return; k++;
      $$('#csStory .carousel').forEach(c=>{ const n=+c.dataset.n, i=k%n; $$('.ig-img img',c).forEach((im,j)=>im.style.transform=`translateX(${(j-i)*100}%)`); $$('.dots b',c).forEach((d,j)=>d.classList.toggle('on',j===i)); });
    }, 2400);
  }
}
function mockCoverHTML(){
  return `<div class="mk-cover"><span class="pix" aria-hidden="true"></span><div class="row">${phoneHTML('img/dc/w5-hero.webp','Web5 Hac/<athon launch post')}${laptopHTML('img/dc/nb-banner.webp','DevCareer × Nomba Hackathon 2026 banner')}</div></div>`;
}

/* ---------- case template ---------- */
function loadCase(id){
  const i = Math.max(0, P.findIndex(p=>p.id===id)), p = P[i], n = P[(i+1)%P.length];
  $('#csTitle').textContent = p.title;
  $('#csSum').textContent = p.sum; $('#csOverview').textContent = p.ov;
  $('#csClient').textContent = p.client; $('#csRole').textContent = p.role; $('#csWhen').textContent = p.when;
  $('#csTeam').textContent = p.team || 'Who you worked with'; $('#csTeam').className = p.team ? '' : 'ph-txt';
  $('#csTools').textContent = p.tools || 'Figma, Illustrator…'; $('#csTools').className = p.tools ? '' : 'ph-txt';
  $('#csCover').style.backgroundColor = p.bg;
  const hasStory = !!(p.story || p.showcase || p.mock || p.rebuild || p.system || p.role_);
  $('#csTmpl').hidden = hasStory; $('#csTplBody').hidden = hasStory; $('#csStory').hidden = !hasStory;
  const cv = $('#csCover'); cv.classList.toggle('photo', !!(p.showcase || (p.role_ && p.role_.coverPhoto))); cv.classList.toggle('mk', !!p.mock); cv.classList.toggle('rb', !!(p.rebuild || p.system || (p.role_ && !p.role_.coverPhoto)));
  if (p.mock) { cv.style.backgroundColor = ''; cv.innerHTML = mockCoverHTML(); }
  else if (p.rebuild) { cv.style.backgroundColor = ''; cv.innerHTML = rebuildCoverHTML(p); }
  else if (p.system) { cv.style.backgroundColor = ''; cv.innerHTML = systemCoverHTML(p); }
  else if (p.role_) { cv.style.backgroundColor = ''; cv.innerHTML = roleCoverHTML(p); }
  else if (p.showcase) { cv.style.backgroundColor = ''; cv.innerHTML = `<img src="${p.showcase.cover}" width="${p.showcase.coverW}" height="${p.showcase.coverH}" alt="${esc(p.showcase.coverCap)}"><figcaption>${esc(p.showcase.coverCap)}</figcaption>`; }
  else cv.innerHTML = p.story ? `<div class="mock real">${bar(p.story.url)}<img src="${p.story.cover}" width="1400" height="875" alt="${esc(p.title)}, new design"></div>` : coverTpl;
  if (p.story) renderStory(p); else if (p.showcase) renderShowcase(p); else if (p.mock) renderMock(p); else if (p.rebuild) renderRebuild(p); else if (p.system) renderSystem(p); else if (p.role_) renderRole(p); else $('#csStory').innerHTML = '';
  const st = p.stats || [[48,'%','more sign-ups (example)'],[3,'×','faster to find a programme (example)'],[16,'k','members reached (example)']];
  $('#csStats').innerHTML = st.map(([v,s,l])=>`<div class="stat"><b data-count="${v}" data-suf="${s}">${v}${s}</b><span>${esc(l)}</span></div>`).join('');
  $('#csResNote').textContent = p.real ? 'Numbers from my time at DalO. Add the story behind each one.' : 'Example figures. Replace them with real numbers, or with qualitative wins if there are no metrics.';
  $('#nextTitle').textContent = n.title; $('#nextCase').dataset.case = n.id;
  const pv = P[(i-1+P.length)%P.length]; $('#prevTitle').textContent = pv.title; $('#prevCase').dataset.case = pv.id;
  observeCounters();
}
loadCase(P[0].id);
const startHash = (location.hash||'#home').slice(1);
go(['home','work','about','case'].includes(startHash)?startHash:'home', {instant:true});

/* ---------- scroll: case progress, toc, spool ---------- */
const spool = $('#spool');
addEventListener('scroll', () => {
  spool.classList.toggle('on', scrollY > 500);
  spool.style.setProperty('--rot', (scrollY*0.6)+'deg');
  const bd = $('.badge'); if (bd) bd.style.setProperty('--br', (scrollY*0.35)+'deg');
  if (current !== 'case') return;
  const h = root.scrollHeight - innerHeight;
  $('#progress').style.setProperty('--p', h>0 ? scrollY/h : 0);
  let on = null; $$('.cs-body:not([hidden]) .cs-sec').forEach(s => { if (s.getBoundingClientRect().top < innerHeight*.4) on = s.id; });
  $$('.cs-body:not([hidden]) .toc a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#'+on));
}, {passive:true});
spool.addEventListener('click', () => scrollTo({top:0,behavior:reduce?'auto':'smooth'}));
document.addEventListener('click', e => { const a = e.target.closest('.toc a'); if (!a) return; e.preventDefault(); e.stopPropagation(); const t = $(a.getAttribute('href')); if (t) t.scrollIntoView({behavior:reduce?'auto':'smooth'}); }, true);
const hl = n => $$('#csStory .notes-list li').forEach(li => li.classList.toggle('on', li.dataset.n === n));
document.addEventListener('pointerover', e => { const p = e.target.closest('#csStory .pin, #csStory .notes-list li'); hl(p ? p.dataset.n : null); });
document.addEventListener('focusin', e => { const p = e.target.closest('#csStory .pin'); if (p) hl(p.dataset.n); });

/* ---------- hero: highlight the key words once the headline lands ---------- */
$$('.h-title em').forEach((em,i)=>setTimeout(()=>em.classList.add('lit'), reduce?0:1300+i*450));

/* ---------- before/after ---------- */
document.addEventListener('input', e => { if (e.target.matches('.ba input[type=range]')) e.target.closest('.ba').style.setProperty('--x', e.target.value+'%'); });

/* ---------- filters ---------- */
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  $$('#filters button').forEach(x => x.setAttribute('aria-pressed', x===b));
  let n = 0;
  $$('#index .folder').forEach(r => { const ok = b.dataset.f==='all' || r.dataset.tags.split('|').includes(b.dataset.f); r.classList.toggle('hide', !ok); if (ok) n++; });
  // project count removed
});

/* ---------- draggable stickers ---------- */
$$('.sticker').forEach(s => {
  let sx=0, sy=0, ox=0, oy=0, down=false;
  s.addEventListener('pointerdown', e => { down = true; try { s.setPointerCapture(e.pointerId); } catch(err){} s.classList.add('dragging'); sx = e.clientX - ox; sy = e.clientY - oy; e.preventDefault(); });
  s.addEventListener('pointermove', e => { if (!down) return; ox = e.clientX - sx; oy = e.clientY - sy; s.style.translate = `${ox}px ${oy}px`; });
  const up = () => { down = false; s.classList.remove('dragging'); };
  s.addEventListener('pointerup', up); s.addEventListener('pointercancel', up); s.addEventListener('lostpointercapture', up);
});

/* ---------- fine-pointer niceties ---------- */
if (fine && !reduce){
  root.classList.add('cursor-on');
  const cur = $('#cur'), ring = $('.ring', cur), dot = $('.dot', cur), lab = $('em', cur);
  let mx = -100, my = -100, rx = mx, ry = my;
  addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; dot.style.translate = `${mx}px ${my}px`; }, {passive:true});
  (function loop(){ rx += (mx-rx)*.18; ry += (my-ry)*.18; ring.style.translate = `${rx}px ${ry}px`; requestAnimationFrame(loop); })();
  document.addEventListener('pointerover', e => {
    const c = e.target.closest('[data-cursor]'), l = e.target.closest('a,button,summary,input,.strip');
    cur.classList.toggle('big', !!c); cur.classList.toggle('hov', !c && !!l); lab.textContent = c ? c.dataset.cursor : '';
  });
  /* hero depth: name, disc and portrait drift apart as the pointer moves */
  const hero = $('.shot'), bgImg = $('#heroBg img'); let tx=0, ty=0, cx=0, cy=0;
  hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); tx = (e.clientX-r.left)/r.width-.5; ty = (e.clientY-r.top)/r.height-.5; });
  hero.addEventListener('pointerleave', () => { tx = ty = 0; });
  (function par(){ cx += (tx-cx)*.07; cy += (ty-cy)*.07; bgImg.style.translate = `${(-cx*22).toFixed(2)}px ${(-cy*16).toFixed(2)}px`; requestAnimationFrame(par); })();
  $$('.magnet').forEach(m => {
    m.addEventListener('pointermove', e => { const r = m.getBoundingClientRect(); m.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`; });
    m.addEventListener('pointerleave', () => { m.style.transition='transform .5s cubic-bezier(.3,1.6,.5,1)'; m.style.transform=''; setTimeout(()=>m.style.transition='',500); });
  });
  document.addEventListener('pointermove', e => {
    const c = e.target.closest('.cards .card');
    $$('.cards .card').forEach(x => { if (x !== c) x.style.transform = ''; });
    if (!c) return;
    const r = c.getBoundingClientRect(), px = (e.clientX-r.left)/r.width, py = (e.clientY-r.top)/r.height;
    c.style.transform = `rotateY(${(px-.5)*12}deg) rotateX(${(.5-py)*12}deg) translateY(-6px)`;
    const f = $('.f', c); f.style.setProperty('--mx', px*100+'%'); f.style.setProperty('--my', py*100+'%');
  }, {passive:true});
}
})();
