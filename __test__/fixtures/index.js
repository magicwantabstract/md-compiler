const blockquote = require('./blockquote');
const emphasis = require('./emphasis');
const paragraph = require('./paragraph');
const unorderList = require('./unorder-list');
const orderList = require('./order-list');
const traverser = require('./traverser');
const setextHeader = require('./setext-header');
const atxHeader = require('./atx-header');
const HorizontalRule = require('./horizontal-rule');
const codeBlock = require('./code-blocks');
const code = require('./code');

module.exports = {
  text: {
    blockquote: blockquote.text,
    emphasis: emphasis.text,
    paragraph: paragraph.text,
    unorderList: unorderList.text,
    orderList: orderList.text,
    setextHeader: setextHeader.text,
    atxHeader: atxHeader.text,
    HorizontalRule: HorizontalRule.text,
    codeBlock: codeBlock.text,
    code: code.text,
  },
  tokens: {
    blockquote: blockquote.tokens,
    emphasis: emphasis.tokens,
    paragraph: paragraph.tokens,
    unorderList: unorderList.tokens,
    orderList: orderList.tokens,
    setextHeader: setextHeader.tokens,
    atxHeader: atxHeader.tokens,
    HorizontalRule: HorizontalRule.tokens,
    codeBlock: codeBlock.tokens,
    code: code.tokens,
  },
  ast: {
    blockquote: blockquote.ast,
    emphasis: emphasis.ast,
    paragraph: paragraph.ast,
    unorderList: unorderList.ast,
    orderList: orderList.ast,
    setextHeader: setextHeader.ast,
    atxHeader: atxHeader.ast,
    HorizontalRule: HorizontalRule.ast,
    codeBlock: codeBlock.ast,
    code: code.ast,
  },
  html: {
    blockquote: blockquote.html,
    emphasis: emphasis.html,
    paragraph: paragraph.html,
    unorderList: unorderList.html,
    orderList: orderList.html,
    setextHeader: setextHeader.html,
    atxHeader: atxHeader.html,
    HorizontalRule: HorizontalRule.html,
    codeBlock: codeBlock.html,
    code: code.html,
  },
  traverser,
};
