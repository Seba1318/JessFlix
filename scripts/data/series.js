export const series = [
  {
    id: 1,
    image: "images/series-posters/series1.webp",
    title: "Dexter",
    rating: 8.6,
    description: "Dexter Morgan is a brilliant police blood spatter analyst who leads a secret double life as a highly methodical serial killer. Adhering to a strict moral code, he only targets murderers who escape justice. The series masterfully blends dark comedy and psychological thrills as Dexter battles his 'Dark Passenger.'",
    trailer: "https://www.youtube.com/watch?v=YQeUmSD1c3g"
  },
  {
    id: 2,
    image: "images/series-posters/series2.webp",
    title: "13 Reasons Why",
    rating: 7.5,
    description: "After high school student Hannah Baker commits suicide, her classmate Clay discovers cassette tapes detailing the thirteen reasons she ended her life. As Clay listens, he uncovers a dark web of secrets and bullying, offering an unflinching look at the severe pressures and cruelties of modern adolescence.",
    trailer: "https://www.youtube.com/watch?v=0KVZFw-Vjfw"
  },
  {
    id: 3,
    image: "images/series-posters/series3.webp",
    title: "Shadowhunters",
    rating: 6.5,
    description: "Teenager Clary Fray discovers she descends from a long line of human-angel hybrids who hunt demons. Thrust into a magical New York City filled with warlocks and vampires, Clary joins forces with experienced Shadowhunters to harness her powers, navigate forbidden romance, and rescue her kidnapped mother.",
    trailer: "https://www.youtube.com/watch?v=hPcD-9JfmgE"
  },
  {
    id: 4,
    image: "images/series-posters/series4.webp",
    title: "Shameless",
    rating: 8.6,
    description: "In Chicago's gritty South Side, the fiercely loyal Gallagher family struggles to survive poverty and the neglect of their alcoholic father, Frank. Eldest daughter Fiona steps up to raise her five intelligent, chaotic siblings. The show is a wildly entertaining blend of dark comedy, addiction, and unbreakable family bonds.",
    trailer: "https://www.youtube.com/watch?v=RjFSkIVMFE0"
  },
  {
    id: 5,
    image: "images/series-posters/series5.webp",
    title: "Gossip Girl",
    rating: 7.5,
    description: "The scandalous lives of Manhattan's elite teenagers are ruthlessly chronicled by an anonymous blogger. As former friends Serena and Blair navigate exclusive schools, glamorous parties, and intense romances with Chuck and Dan, their darkest secrets are weaponized online in this addictive exploration of wealth, class, and toxic rumors.",
    trailer: "https://www.youtube.com/watch?v=6eCoR6vmNzQ"
  },
  {
    id: 6,
    image: "images/series-posters/series6.webp",
    title: "Sex & The City",
    rating: 7.3,
    description: "Set in New York City, this iconic series follows columnist Carrie Bradshaw and her three best friends—Miranda, Charlotte, and Samantha. Together, they navigate the complexities of modern dating, careers, and sexuality in their thirties, proving that through heartbreak and triumphs, true soulmates might just be your friends.",
    trailer: "https://www.youtube.com/watch?v=p1rulF1UqgM"
  },
  {
    id: 7,
    image: "images/series-posters/series7.webp",
    title: "American Horror Story",
    rating: 8.0,
    description: "A groundbreaking horror anthology that delivers a completely new, deeply unsettling narrative every season. Exploring themes from a cursed murder house to a corrupt 1960s asylum and a secretive witch coven, the show pushes television boundaries with its visually stunning imagery, psychological terror, and recurring, highly talented cast.",
    trailer: "https://www.youtube.com/watch?v=2cFhUp_2N00"
  },
  {
    id: 8,
    image: "images/series-posters/series8.webp",
    title: "Stranger Things",
    rating: 8.7,
    description: "In 1980s Indiana, a young boy's mysterious disappearance triggers terrifying supernatural events. His loyal friends team up with Eleven, a traumatized girl with telekinetic powers, to uncover a massive government conspiracy and a dark parallel dimension. The series is a thrilling homage to classic 80s sci-fi and horror.",
    trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU"
  },
  {
    id: 9,
    image: "images/series-posters/series9.webp",
    title: "Young Sheldon",
    rating: 7.6,
    description: "This heartwarming spin-off explores the childhood of the brilliant but socially inept physicist Sheldon Cooper in late 80s Texas. Skipping grades to attend high school, the nine-year-old genius constantly clashes with his simple, football-obsessed, and fiercely protective family in a clever, touching comedy about growing up different.",
    trailer: "https://www.youtube.com/watch?v=jffVm6tNBDg"
  },
  {
    id: 10,
    image: "images/series-posters/series10.webp",
    title: "Californication",
    rating: 8.3,
    description: "Hank Moody is a wildly talented but deeply troubled novelist whose move to Los Angeles sparks a destructive spiral of alcoholism and womanizing. Despite his self-sabotage and writer's block, he desperately tries to repair relationships with his ex-girlfriend and teenage daughter in this sharp, raunchy dark comedy.",
    trailer: "https://www.youtube.com/watch?v=OgZdWdBOPgM"
  }
];

export function getSerieById(serieId){
  let matchingSerie = null;

  series.forEach((serie) => {
    if(serie.id === serieId){
      matchingSerie = serie;
    }
  });

  return matchingSerie;
}