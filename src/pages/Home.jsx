import React,{useState} from 'react';
import axios from 'axios';
import HomeNav from '../components/HomeNav';
import { Button, Input, Spin,Select,message  } from "antd";
import { RiSparklingFill } from "react-icons/ri";
import Footer from '../components/Footer';
import Steps from '../components/Steps';
import Faq from "../components/Faq";
import Features from "../components/Features";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [businessNames, setBusinessNames] = useState([]);
  const [description, setDescription] = useState(null);
  const [selectedTone, setSelectedTone] = useState(null);
  const [selectedAudience, setSelectedAudience] = useState(null);
  const [selectedNameStructure, setSelectedNameStructure] = useState(null);
  const { TextArea } = Input;
  const [messageApi, contextHolder] = message.useMessage();
  const textAreaStyle = {
    height: 130,
    resize: 'none',
    maxWidth: '450px',
    width: '100%',
    fontSize: '1rem',
  };

  const tone = [
    { value: 'Random', label: 'Random' },
    { value: 'Bold & Adventurous', label: 'Bold & Adventurous' },
    { value: 'Fun & Playful', label: 'Fun & Playful' },
    { value: 'Professional & Sophisticated', label: 'Professional & Sophisticated' },
    { value: 'Quirky & Offbeat', label: 'Quirky & Offbeat'},
    { value: 'Innovative & Modern', label: 'Innovative & Modern'},
    { value: 'Traditional & Timeless', label: 'Traditional & Timeless'},
    { value: 'Elegant & Luxurious', label: 'Elegant & Luxurious'},
    { value: 'Minimalistic & Clean', label: 'Minimalistic & Clean'},
    { value: 'Friendly & Approachable', label: 'Friendly & Approachable'},
    { value: 'Rugged & Outdoorsy', label: 'Rugged & Outdoorsy'},
    { value: 'Tech-Savvy & Futuristic', label: 'Tech-Savvy & Futuristic'},
    { value: 'Creative & Artistic', label: 'Creative & Artistic'},
    { value: 'Dynamic & Energetic', label: 'Dynamic & Energetic'},
    { value: 'Casual & Informal', label: 'Casual & Informal'},
    { value: 'Inspirational & Motivational', label: 'Inspirational & Motivational'},
    { value: 'Trustworthy & Dependable', label: 'Trustworthy & Dependable'},
  ]
  const nameStructure  = [
    { value: 'Random', label: 'Random' },
    { value: 'Invented Names', label: 'Invented Names' },
    { value: 'Compound Names', label: 'Compound Names' },
    { value: 'Multi-Word Names', label: 'Multi-Word Names' },
    { value: 'Acronyms/Abbreviations', label: 'Acronyms/Abbreviations' },
    { value: 'Alliterative Names', label: 'Alliterative Names' },
    { value: 'Rhyming Names', label: 'Rhyming Names' },
    { value: 'Portmanteau Names', label: 'Portmanteau Names' },
    { value: 'Descriptive Names', label: 'Descriptive Names' },
    { value: 'Suggestive Names', label: 'Suggestive Names' },
    { value: 'Abstract Names', label: 'Abstract Names' },
  ]
   const audience =[
    {value: 'Global', label: 'Global'},
    {value: 'afghanistan', label: 'Afghanistan'},
    {value: 'albania', label: 'Albania'},
    {value: 'algeria', label: 'Algeria'},
    {value: 'andorra', label: 'Andorra'},
    {value: 'angola', label: 'Angola'},
    {value: 'antigua and barbuda', label: 'Antigua and Barbuda'},
    {value: 'argentina', label: 'Argentina'},
    {value: 'armenia', label: 'Armenia'},
    {value: 'australia', label: 'Australia'},
    {value: 'austria', label: 'Austria'},
    {value: 'azerbaijan', label: 'Azerbaijan'},
    {value: 'bahamas', label: 'Bahamas'},
    {value: 'bahrain', label: 'Bahrain'},
    {value: 'bangladesh', label: 'Bangladesh'},
    {value: 'barbados', label: 'Barbados'},
    {value: 'belarus', label: 'Belarus'},
    {value: 'belgium', label: 'Belgium'},
    {value: 'belize', label: 'Belize'},
    {value: 'benin', label: 'Benin'},
    {value: 'bhutan', label: 'Bhutan'},
    {value: 'bolivia', label: 'Bolivia'},
    {value: 'bosnia and herzegovina', label: 'Bosnia and Herzegovina'},
    {value: 'botswana', label: 'Botswana'},
    {value: 'brazil', label: 'Brazil'},
    {value: 'brunei', label: 'Brunei'},
    {value: 'bulgaria', label: 'Bulgaria'},
    {value: 'burkina faso', label: 'Burkina Faso'},
    {value: 'burundi', label: 'Burundi'},
    {value: 'cabo verde', label: 'Cabo Verde'},
    {value: 'cambodia', label: 'Cambodia'},
    {value: 'cameroon', label: 'Cameroon'},
    {value: 'canada', label: 'Canada'},
    {value: 'central african republic', label: 'Central African Republic'},
    {value: 'chad', label: 'Chad'},
    {value: 'chile', label: 'Chile'},
    {value: 'china', label: 'China'},
    {value: 'colombia', label: 'Colombia'},
    {value: 'comoros', label: 'Comoros'},
    {value: 'congo', label: 'Congo'},
    {value: 'costa rica', label: 'Costa Rica'},
    {value: 'croatia', label: 'Croatia'},
    {value: 'cuba', label: 'Cuba'},
    {value: 'cyprus', label: 'Cyprus'},
    {value: 'czech republic', label: 'Czech Republic'},
    {value: 'democratic republic of the congo', label: 'Democratic Republic of the Congo'},
    {value: 'denmark', label: 'Denmark'},
    {value: 'djibouti', label: 'Djibouti'},
    {value: 'dominica', label: 'Dominica'},
    {value: 'dominican republic', label: 'Dominican Republic'},
    {value: 'ecuador', label: 'Ecuador'},
    {value: 'egypt', label: 'Egypt'},
    {value: 'el salvador', label: 'El Salvador'},
    {value: 'equatorial guinea', label: 'Equatorial Guinea'},
    {value: 'eritrea', label: 'Eritrea'},
    {value: 'estonia', label: 'Estonia'},
    {value: 'eswatini', label: 'Eswatini'},
    {value: 'ethiopia', label: 'Ethiopia'},
    {value: 'fiji', label: 'Fiji'},
    {value: 'finland', label: 'Finland'},
    {value: 'france', label: 'France'},
    {value: 'gabon', label: 'Gabon'},
    {value: 'gambia', label: 'Gambia'},
    {value: 'georgia', label: 'Georgia'},
    {value: 'germany', label: 'Germany'},
    {value: 'ghana', label: 'Ghana'},
    {value: 'greece', label: 'Greece'},
    {value: 'grenada', label: 'Grenada'},
    {value: 'guatemala', label: 'Guatemala'},
    {value: 'guinea', label: 'Guinea'},
    {value: 'guinea-bissau', label: 'Guinea-Bissau'},
    {value: 'guyana', label: 'Guyana'},
    {value: 'haiti', label: 'Haiti'},
    {value: 'holy see', label: 'Holy See'},
    {value: 'honduras', label: 'Honduras'},
    {value: 'hungary', label: 'Hungary'},
    {value: 'iceland', label: 'Iceland'},
    {value: 'india', label: 'India'},
    {value: 'indonesia', label: 'Indonesia'},
    {value: 'iran', label: 'Iran'},
    {value: 'iraq', label: 'Iraq'},
    {value: 'ireland', label: 'Ireland'},
    {value: 'italy', label: 'Italy'},
    {value: 'jamaica', label: 'Jamaica'},
    {value: 'japan', label: 'Japan'},
    {value: 'jordan', label: 'Jordan'},
    {value: 'kazakhstan', label: 'Kazakhstan'},
    {value: 'kenya', label: 'Kenya'},
    {value: 'kiribati', label: 'Kiribati'},
    {value: 'kuwait', label: 'Kuwait'},
    {value: 'kyrgyzstan', label: 'Kyrgyzstan'},
    {value: 'laos', label: 'Laos'},
    {value: 'latvia', label: 'Latvia'},
    {value: 'lebanon', label: 'Lebanon'},
    {value: 'lesotho', label: 'Lesotho'},
    {value: 'liberia', label: 'Liberia'},
    {value: 'libya', label: 'Libya'},
    {value: 'liechtenstein', label: 'Liechtenstein'},
    {value: 'lithuania', label: 'Lithuania'},
    {value: 'luxembourg', label: 'Luxembourg'},
    {value: 'madagascar', label: 'Madagascar'},
    {value: 'malawi', label: 'Malawi'},
    {value: 'malaysia', label: 'Malaysia'},
    {value: 'maldives', label: 'Maldives'},
    {value: 'mali', label: 'Mali'},
    {value: 'malta', label: 'Malta'},
    {value: 'marshall islands', label: 'Marshall Islands'},
    {value: 'mauritania', label: 'Mauritania'},
    {value: 'mauritius', label: 'Mauritius'},
    {value: 'mexico', label: 'Mexico'},
    {value: 'micronesia', label: 'Micronesia'},
    {value: 'moldova', label: 'Moldova'},
    {value: 'monaco', label: 'Monaco'},
    {value: 'mongolia', label: 'Mongolia'},
    {value: 'montenegro', label: 'Montenegro'},
    {value: 'morocco', label: 'Morocco'},
    {value: 'mozambique', label: 'Mozambique'},
    {value: 'myanmar', label: 'Myanmar'},
    {value: 'namibia', label: 'Namibia'},
    {value: 'nauru', label: 'Nauru'},
    {value: 'nepal', label: 'Nepal'},
    {value: 'netherlands', label: 'Netherlands'},
    {value: 'new zealand', label: 'New Zealand'},
    {value: 'nicaragua', label: 'Nicaragua'},
    {value: 'niger', label: 'Niger'},
    {value: 'nigeria', label: 'Nigeria'},
    {value: 'north korea', label: 'North Korea'},
    {value: 'north macedonia', label: 'North Macedonia'},
    {value: 'norway', label: 'Norway'},
    {value: 'oman', label: 'Oman'},
    {value: 'pakistan', label: 'Pakistan'},
    {value: 'palau', label: 'Palau'},
    {value: 'palestine', label: 'Palestine'},
    {value: 'panama', label: 'Panama'},
    {value: 'papua new guinea', label: 'Papua New Guinea'},
    {value: 'paraguay', label: 'Paraguay'},
    {value: 'peru', label: 'Peru'},
    {value: 'philippines', label: 'Philippines'},
    {value: 'poland', label: 'Poland'},
    {value: 'portugal', label: 'Portugal'},
    {value: 'qatar', label: 'Qatar'},
    {value: 'romania', label: 'Romania'},
    {value: 'russia', label: 'Russia'},
    {value: 'rwanda', label: 'Rwanda'},
    {value: 'saint kitts and nevis', label: 'Saint Kitts and Nevis'},
    {value: 'saint lucia', label: 'Saint Lucia'},
    {value: 'saint vincent and the grenadines', label: 'Saint Vincent and the Grenadines'},
    {value: 'samoa', label: 'Samoa'},
    {value: 'san marino', label: 'San Marino'},
    {value: 'sao tome and principe', label: 'Sao Tome and Principe'},
    {value: 'saudi arabia', label: 'Saudi Arabia'},
    {value: 'senegal', label: 'Senegal'},
    {value: 'serbia', label: 'Serbia'},
    {value: 'seychelles', label: 'Seychelles'},
    {value: 'sierra leone', label: 'Sierra Leone'},
    {value: 'singapore', label: 'Singapore'},
    {value: 'slovakia', label: 'Slovakia'},
    {value: 'slovenia', label: 'Slovenia'},
    {value: 'solomon islands', label: 'Solomon Islands'},
    {value: 'somalia', label: 'Somalia'},
    {value: 'south africa', label: 'South Africa'},
    {value: 'south korea', label: 'South Korea'},
    {value: 'south sudan', label: 'South Sudan'},
    {value: 'spain', label: 'Spain'},
    {value: 'sri lanka', label: 'Sri Lanka'},
    {value: 'sudan', label: 'Sudan'},
    {value: 'suriname', label: 'Suriname'},
    {value: 'sweden', label: 'Sweden'},
    {value: 'switzerland', label: 'Switzerland'},
    {value: 'syria', label: 'Syria'},
    {value: 'tajikistan', label: 'Tajikistan'},
    {value: 'tanzania', label: 'Tanzania'},
    {value: 'thailand', label: 'Thailand'},
    {value: 'timor-leste', label: 'Timor-Leste'},
    {value: 'togo', label: 'Togo'},
    {value: 'tonga', label: 'Tonga'},
    {value: 'trinidad and tobago', label: 'Trinidad and Tobago'},
    {value: 'tunisia', label: 'Tunisia'},
    {value: 'turkey', label: 'Turkey'},
    {value: 'turkmenistan', label: 'Turkmenistan'},
    {value: 'tuvalu', label: 'Tuvalu'},
    {value: 'uganda', label: 'Uganda'},
    {value: 'ukraine', label: 'Ukraine'},
    {value: 'united arab emirates', label: 'United Arab Emirates'},
    {value: 'united kingdom', label: 'United Kingdom'},
    {value: 'united states', label: 'United States'},
    {value: 'uruguay', label: 'Uruguay'},
    {value: 'uzbekistan', label: 'Uzbekistan'},
    {value: 'vanuatu', label: 'Vanuatu'},
    {value: 'venezuela', label: 'Venezuela'},
    {value: 'vietnam', label: 'Vietnam'},
    {value: 'yemen', label: 'Yemen'},
    {value: 'zambia', label: 'Zambia'},
    {value: 'zimbabwe', label: 'Zimbabwe'}
  ]
async function generateName(){
setLoading(true);
setProgress(0);
if(description === null){
  setLoading(false);
  messageApi.open({
    type: 'error',
    content: 'business description required',
  });
  return;
}
if(selectedAudience === null){
  setSelectedAudience("global")
}
if(selectedNameStructure === null){
  setSelectedAudience("random")
}
if(selectedTone === null){
  setSelectedTone("random")
}
const progressInterval = setInterval(() => {
  setProgress(prev => {
    if (prev < 90) {  // Simulate progress until 90%
      return prev + 5;
    }
    return prev;
  });
}, 1000);
try {
  const response = await axios.post("http://localhost:3001/api/generate-names", { description, selectedTone, selectedAudience, selectedNameStructure});
  clearInterval(progressInterval);
  setProgress(100); // Set progress to 100% when the request is done
  setBusinessNames(response.data);
  setLoading(false);
} catch (error) {
  clearInterval(progressInterval);
  setProgress(0); // Reset progress on error
  setLoading(false);  
  console.log(error);
}
};
  return (
    <div className='home'>
       {contextHolder}
      <HomeNav />
      <main className="home__main">
        <h1>Let's give your business a name.</h1>
        <form className='home__form' onSubmit={(e) => e.preventDefault()} method="post">
          <div className="select-container">
            <Select
              placeholder="Select Tone"
              style={{ width: "fit-content" }}
              dropdownStyle={{ textTransform: "capitalize", width: 250 }}
              options={tone}
              onChange={(value) => setSelectedTone(value)}
            />
            <Select
              placeholder="Select Audience"
              style={{ width: "fit-content" }}
              dropdownStyle={{ textTransform: "capitalize", width: 180 }}
              showSearch
              options={audience}
              onChange={(value) => setSelectedAudience(value)}
             
            />
            <Select
              placeholder="Select Name Structure"
              style={{ width: "fit-content" }}
              dropdownStyle={{ textTransform: "capitalize", width: 200 }}
              options={nameStructure}
              onChange={(value) => setSelectedNameStructure(value)}
            />
          </div>
          <TextArea
            showCount
            maxLength={300}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Describe your business in a few words"
            style={textAreaStyle}
          />
          <Button
            type="primary"
            size="large"
            onClick={generateName}
            icon={<RiSparklingFill />}
          >
            Generate Names
          </Button>
        </form>
      </main>
      {loading && (
        <div className="home__loading" style={{ textAlign: "center", marginTop: "20px" }}>
          <Spin 
          tip={`Loading... ${progress}%`}>
            <br />
          </Spin>
        </div>
      )}
      {loading === false && businessNames.length > 0 && (
        <section className="home__results">
          <ul className="home__results-list">
            {businessNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </section>
      )}
      <Steps />
      <Features/>
      <Faq/>
      <Footer />
    </div>
  )
}
