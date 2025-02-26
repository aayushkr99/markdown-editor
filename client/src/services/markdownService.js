import api from './api';
import { getSocket } from './socket';
import config from '../config';
import { marked } from 'marked';

export const convertMarkdownAPI = async (markdown) => {
  try {
    const response = await api.post(config.API_ENDPOINTS.MARKDOWN, { markdown });
    return response.data.html;
  } catch (error) {
    console.error('Error converting markdown:', error);
    throw error;
  }
};

export const convertMarkdownSocket = (markdown) => {
  return new Promise((resolve, reject) => {
    const socket = getSocket();
    socket.emit('convert-markdown', markdown);

    socket.once('markdown-converted', (data) => {
      if (data.error) {
        reject(new Error(data.error));
      } else {
        resolve(data.html);
      }
    });

    socket.once('connect_error', (err) => {
      reject(err);
    });
  });
};


export const convertMarkdownLocal = (markdown) => {
  try {
    return marked.parse(markdown);
  } catch (error) {
    console.error('Error parsing markdown locally:', error);
    return '<p>Error processing markdown</p>';
  }
};