import React from 'react'
import { Collapse } from 'antd';

export default function Faq() {
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    const items = [
        {
          key: '1',
          label: 'What is the purpose of this website?',
          children: <p>Our website is designed to help entrepreneurs and business owners generate unique business names based on a brief description of their venture. By inputting a description along with selected options for tone, name structure, and target audience, you receive tailored name suggestions that reflect your brand’s personality.</p>,
        },
        {
          key: '2',
          label: 'How does the name generator work',
          children: <p>Our tool leverages advanced AI technology to analyze your business description and preferences. You simply enter a description of your business and choose options such as tone (e.g., Bold & Adventurous, Professional & Sophisticated), name structure (e.g., Invented Names, Compound Names), and your target audience. The AI then processes these inputs to generate creative and relevant name ideas tailored to your brand.</p>,
        },
        {
          key: '3',
          label: 'What information do I need to provide?',
          children: <p>To get started, you need to provide:
         <br />
        - Business Description: A brief overview of your venture.
        <br />
        optional you can select:
        <br />
        - Tone: Choose from options such as Random, Fun & Playful, or Tech-Savvy & Futuristic to set the mood of the name.
        <br />
        - Name Structure: Options include Invented Names, Compound Names, Multi-Word Names, and more.
        <br />
        - Audience: Specify your target market, whether it’s global or focused on a specific country.</p>,
        },
        {
            key: '4',
            label: 'How do I choose the right tone for my brand?',
            children: <p>The tone you choose should reflect the personality of your business. For instance:
<br />
            Bold & Adventurous: For brands that want to stand out with a daring personality.
            <br />
            Fun & Playful: Ideal for businesses looking to convey a light-hearted, friendly vibe.
            <br />
            Professional & Sophisticated: Suited for brands in corporate or luxury sectors.</p>,
          },
          {
            key: '5',
            label: 'What are name structure options and why do they matter?',
            children: <p>Name structure options determine the style of the generated names. For example:
<br />
            Invented Names: Create a unique identity with entirely new words.
            <br />
            Compound Names: Merge two or more words to form a new brand name.
            <br />
            Acronyms/Abbreviations: Use shortened forms for a modern twist.</p>,
          },
          {
            key: '6',
            label: 'How does selecting an audience influence the name suggestions?',
            children: <p>Choosing an audience—whether global or specific to a country—helps tailor the generated names to cultural nuances and market preferences. This ensures that your business name resonates with your intended customer base.</p>,
          },
          {
            key: '7',
            label: 'Can I customize the results further if I’m not satisfied with the suggestions?',
            children: <p>Absolutely. You can adjust your business description and experiment with different combinations of tone, name structure, and audience options until you find the perfect match for your brand.</p>,
          },
          {
            key: '8',
            label: 'Is there a cost to use the service?',
            children: <p>No, the service is completely free for all users. We believe that every entrepreneur should have access to creative tools without any financial barriers.</p>,
          },
        ];
return (
    <section className='faq'>
        <h1>Frequently Asked Questions</h1>
        <Collapse 
            items={items} 
            defaultActiveKey={['1']} 
            className="faq-collapse"
        />
      
    </section>
)
}
