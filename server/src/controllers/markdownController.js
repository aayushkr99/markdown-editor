const marked = require('marked');
const hljs = require('highlight.js');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

// Create a DOM window for DOMPurify to use
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

// Configure marked options for syntax highlighting
marked.setOptions({
  highlight: function(code, lang) {
    try {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    } catch (e) {
      console.error('Highlight error:', e);
      return code;
    }
  },
  breaks: true,
  gfm: true,
  headerIds: true,
  mangle: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  xhtml: false
});

// Process markdown and convert to HTML
const processMarkdown = async (markdown) => {
  
  try {
    const html = marked.parse(markdown);
    return sanitizeHtml(html);
  } catch (error) {
    console.error('Error parsing markdown:', error);
    throw new Error('Failed to parse markdown');
  }
};

// HTTP endpoint for markdown conversion
const convertMarkdown = async (req, res) => {
  try {
    const { markdown } = req.body;
    
    if (!markdown) {
      return res.status(400).json({ error: 'No markdown provided' });
    }
    
    const html = await processMarkdown(markdown);
    return res.json({ html });
  } catch (error) {
    console.error('Error converting markdown:', error);
    return res.status(500).json({ error: error.message });
  }
};

// Basic HTML sanitization (a more robust solution would use a library like DOMPurify)
const sanitizeHtml = (html) => {
  // This is a very basic sanitization
  // return html
  //   .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  //   .replace(/on\w+="[^"]*"/g, '');
  return DOMPurify.sanitize(html, {
    ADD_TAGS: ['iframe'], // Optional: allow specific tags if needed
    ADD_ATTR: ['allowfullscreen', 'frameborder', 'src'], // Optional: allow specific attributes
    FORBID_TAGS: ['style', 'form'], // Optional: specifically forbid certain tags
    FORBID_ATTR: ['style', 'onerror', 'onload'], // Optional: specifically forbid certain attributes
    ALLOW_DATA_ATTR: false // Disallow data attributes which can be used for XSS
  });
};

module.exports = {
  processMarkdown,
  convertMarkdown
};