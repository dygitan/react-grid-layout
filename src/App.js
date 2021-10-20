import Grid from "./Grid";
import Section from "./Section";

import "./styles.scss";

const paragraphs = [
  "Enean mus quamve nuncnunc erdiet egestas sodale class. Lum lum congue liberoa habitant leocras dolornu estmorbi dum. Nostra itur sse faucib egetal arcucura imperd. Tate leocur faucibu auctorpr ger risque uam estmae litora. Lorem turpisn urient feugiatm varius antenull auctorpr. Metiam faucibu imperd augueph nulla volutpat hendrer que sociosqu. Quamut fringi uamnam semnunc metusdo aesent ent. Afusce ligulain abitur anteduis netus ligulam maurisd hendrer ctetur. Nibhnull fringi sem massased nullam oin mattiss. Sodalesm rsed lacini cursus auris fusce rissed.",
  "Tiam magnaa sagittis ultricie liquam temporin sce auris viverr ecenas. Esent sellus lacusp viverra tcras cras laut. Modnam ulum tate purus facili semmaec roin. Rsed msed justov enas molest nislnam luctus ad orcivest. Fusce volutpat rfusce orper quam maurisin facili euismo. Tur nec uscras tesque abitur snam.",
  "Sque lus sceler asin oin adipisci viverra. Metusves volutp elit odioin mauris velit cras. Orbi nec venenat odio llam lorem orem ultrices portamor quat. Lacinia sapienna uisque modnam massased leoetiam nullam ad. Teger netus nuncsed potenti auris justop eleifend quis dictum luctus. Oin ger erat turpiset aliquam vamus. Aliquama quamnull magna leo malesu taciti velitsed ulum purusp lus. Erdum unc molesti lus ger quamut cras ut. Entum illa iaculis erdum lus et suspendi. Fringi auris onec arcused ultricie rutruma quisque.",
  "Dictumdu molestie disse sapienv ris idnulla. Bulum viverr habitant accumsan loremnul leopelle sisut purusp. Uis metusqui enimsus feugiat ecenas volutp. Ullam lus faucibu commodo mussed mauris. Insuspen bibend libero nisi urient dictumst. Vitae mollis est rissed nibhphas uscras sapien rhoncus ut. Consequa urient ligulain nequenu enimdon metusd porttit duis tortor. Teger tdonec entum convalli laoreetc ndisse.",
  "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Aliquam erat volutpat. Nam luctus.",
  "Sed nisi libero, bibendum et molestie ut, lobortis at eros. Fusce facilisis tincidunt urna, et auctor dui sollicitudin non.",
  "Aenean sit amet sapien euismod, maximus neque sit amet, sagittis tellus",
  "In hac habitasse platea dictumst. Integer pretium odio eu nunc lacinia, vitae tincidunt velit ullamcorper.",
  "Fusce vel sagittis nunc, et vulputate leo. Mauris rhoncus magna ut elit aliquam, vitae placerat ante pretium.",
  "Sed consectetur efficitur est, eu ultricies libero lacinia at. Suspendisse id imperdiet mauris. Phasellus malesuada auctor malesuada. Vestibulum vel nisl et urna varius elementum non in urna. Integer eu metus justo.",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In tincidunt, leo non fermentum ornare, ligula nisl elementum mauris, blandit iaculis purus tellus non ante. Nunc laoreet at nibh sit amet accumsan."
];

export default function App() {
  return (
    <div>
      <Grid>
        {Array.from({ length: 12 }).map((s, index) => (
          <Grid.Col lg={2} md={4} key={index}>
            <span
              style={{
                border: "solid 1px pink",
                backgroundColor: "#eddbdb",
                padding: 3 * index,
                display: "block"
              }}
            >
              {index + 1}
            </span>
          </Grid.Col>
        ))}
      </Grid>

      <Section title="1-column layout">
        <Grid>
          {paragraphs.map((text) => (
            <Grid.Col>{text}</Grid.Col>
          ))}
        </Grid>
      </Section>

      <Section title="4-column layout">
        <Grid>
          {paragraphs.map((text) => (
            <Grid.Col lg={4}>{text}</Grid.Col>
          ))}
        </Grid>
      </Section>

      <Section title="Custom">
        <Grid>
          <Grid.Col lg={7}>{paragraphs[0]}</Grid.Col>
          <Grid.Col lg={5}>{paragraphs[1]}</Grid.Col>
          <Grid.Col lg={8}>{paragraphs[2]}</Grid.Col>
          <Grid.Col lg={4}>{paragraphs[3]}</Grid.Col>
          <Grid.Col lg={3}>{paragraphs[4]}</Grid.Col>
          <Grid.Col lg={4}>{paragraphs[5]}</Grid.Col>
          <Grid.Col lg={3}>{paragraphs[6]}</Grid.Col>
          <Grid.Col lg={2}>{paragraphs[7]}</Grid.Col>
        </Grid>
      </Section>
    </div>
  );
}
