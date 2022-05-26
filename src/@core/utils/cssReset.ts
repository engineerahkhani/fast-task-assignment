const cssReset = {
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  ':focus': { outline: 0 },
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section':
    {
      display: 'block',
    },
  'ol,\nul': { listStyle: 'none' },
  'blockquote,\nq': { quotes: 'none' },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: ['""', 'none'],
  },
  table: { borderCollapse: 'collapse', borderSpacing: 0 },
  'input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-results-button, input[type="search"]::-webkit-search-results-decoration':
    {
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    },
  'input[type="search"]': {
    WebkitAppearance: 'textfield',
    MozAppearance: 'none',
    WebkitBoxSizing: 'content-box',
    MozBoxSizing: 'content-box',
    boxSizing: 'content-box',
  },
  textarea: { overflow: 'auto', verticalAlign: 'top', resize: 'vertical' },
  'audio, canvas, video': {
    display: ['inline-block', 'inline'],
    zoom: 1,
    maxWidth: '100%',
  },
  'audio:not([controls])': { display: 'none', height: 0 },
  '[hidden]': { display: 'none' },
  html: {
    fontSize: '100%',
    WebkitTextSizeAdjust: '100%',
    msTextSizeAdjust: '100%',
  },
  'a:focus': { outline: 0 },
  'a:active,\na:hover': { outline: 0 },
  img: {
    border: 0,
    msInterpolationMode: 'bicubic',
    verticalAlign: 'middle',
  },
  figure: { margin: 0 },
  form: { margin: 0 },
  fieldset: { border: 0, margin: 0, padding: 0 },
  legend: {
    border: 0,
    padding: 0,
    whiteSpace: 'normal',
    marginLeft: '-7px',
  },
  'button, input, select, textarea': {
    fontSize: '100%',
    margin: 0,
    border: 'none',
  },
  'button, select': { textTransform: [['none']] },
  'button, html input[type="button"], input[type="reset"], input[type="submit"]':
    {
      WebkitAppearance: 'button',
      cursor: 'pointer',
      overflow: 'visible',
    },
  'button[disabled], html input[disabled]': { cursor: 'default' },
  'input[type="checkbox"], input[type="radio"]': {
    boxSizing: 'border-box',
    padding: 0,
    height: '13px',
    width: '13px',
  },
  'input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration':
    {
      WebkitAppearance: 'none',
    },
  'button::-moz-focus-inner, input::-moz-focus-inner': {
    border: 0,
    padding: 0,
  },
  'html, button, input, select, textarea': { color: '#222' },
  '::-moz-selection': { background: '#b3d4fc', textShadow: 'none' },
  '::selection': { background: '#b3d4fc', textShadow: 'none' },
  '.chromeframe': {
    margin: [['0.2em', 0]],
    background: '#ccc',
    color: '#000',
    padding: [['0.2em', 0]],
  },
  a: {
    textDecoration: 'none',
  },
};

export default cssReset;
