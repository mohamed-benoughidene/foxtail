const axios = require('axios'); // Import the axios library for making HTTP requests
require('dotenv').config(); // Load environment variables from a .env file
const API_KEY = "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"; // Retrieve the API key from environment variables
const url = 'https://openrouter.ai/api/v1/chat/completions'; // Define the API endpoint URL

// Define an asynchronous function to generate business names
const generateBusinessNames = async (req, res) => {
   
    try {
        const { description,selectedTone,selectedAudience,selectedNameStructure } = req.body; // Extract the "description" field from the request body
        if (!description) { // Check if the description is provided
            return res.status(400).json({ error: "Description is required" }); // Return a 400 status with an error message
        }
        const tone = selectedTone === null ? "" : `the names must be in a ${selectedTone} tone,`;
        const audience = selectedAudience === null || selectedAudience === "global" ? "" : `the audience are in ${selectedAudience} so the business names must contain Local Flavor,`;
        const nameStructure = selectedNameStructure === null ? "" : `the names Structure must be ${selectedNameStructure},`;
// Define the payload for the API request
const payload = {
    model: "deepseek/deepseek-r1:free", // Specify the model to use
    messages: [
        {
            role: 'user', // Define the role of the message sender
            content: `Generate a list of 35 business names for a business that focuses on: ${description},${tone}${audience}${nameStructure} use only latten letters, the output must be just the user requested data no additional text, Respond only with the answer in plain text format: business name - business name separate between names using - ` // Define the content of the message
        }
    ],
    temperature: 0.7,
};

        // Make a POST request to the API with the payload and headers
        const response = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
                'Authorization': `Bearer ${API_KEY}` // Include the API key in the authorization header
            }
        });
         
        const assistantMessage = response.data.choices[0].message.content; // Extract the assistant message from the API response
        if(assistantMessage.length === 0){
            return res.status(404).json({ error: "something went wrong" }); // Return a 404 status with an error message   
        }
        res.json(assistantMessage.split("-")); // Send the API response data back to the client
    } catch (error) {
        console.error("API Error:", error.response ? error.response.data : error.message); // Log the error message
        res.status(500).json({ error: "Failed to generate business names" }); // Return a 500 status with an error message
    }
};

module.exports = { generateBusinessNames }; // Export the generateBusinessNames function