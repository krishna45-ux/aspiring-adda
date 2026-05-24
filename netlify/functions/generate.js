const { GoogleGenAI } = require('@google/genai');

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        const { model, prompt, config } = JSON.parse(event.body || '{}');

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return { statusCode: 500, body: JSON.stringify({ error: 'Server API Key not configured' }) };
        }

        if (!prompt) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Prompt is required' }) };
        }

        const ai = new GoogleGenAI({ apiKey });

        const response = await ai.models.generateContent({
            model: model || 'gemini-2.0-flash',
            contents: prompt,
            config: config || {},
        });

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: response.text }),
        };
    } catch (error) {
        console.error('Gemini API Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to generate content', details: error.message }),
        };
    }
};
