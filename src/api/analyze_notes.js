import axios from 'axios';

const api = axios.create({
    baseURL: 'http://<your-ec2-public-ip>:5000', // Replace with your EC2 instance's public IP
});

export const analyzeNotes = async (notes) => {
    const response = await api.post('/analyze', { notes });
    return response.data.analysis;
};

