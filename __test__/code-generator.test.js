import test from 'ava';

import codeGenerator from '../src/code-generator';
import {ast, html} from './fixtures'; // eslint-disable-line

test(
  'emphasis: code should generate to html',
  t => {
    t.is(codeGenerator(ast.emphasis), html.emphasis);
  }
);

test(
  'code: code should generate to html',
  t => {
    t.is(codeGenerator(ast.code.$1), html.code.$1, '$1');
    t.is(codeGenerator(ast.code.$2), html.code.$2, '$2');
    t.is(codeGenerator(ast.code.$3), html.code.$3, '$3');
    t.is(codeGenerator(ast.code.$4), html.code.$4, '$4');
    t.is(codeGenerator(ast.code.$5), html.code.$5, '$5');
    t.is(codeGenerator(ast.code.$6), html.code.$6, '$6');
  }
);

test(
  'paragraph: code should generate to html',
  t => {
    t.is(codeGenerator(ast.paragraph), html.paragraph);
  }
);

test(
  'unorder list: code should generate to html',
  t => {
    t.is(codeGenerator(ast.unorderList), html.unorderList);
  }
);

test(
  'order list: code should generate to html',
  t => {
    t.is(codeGenerator(ast.orderList), html.orderList);
  }
);

test(
  'atx header: code should generate to html',
  t => {
    t.is(codeGenerator(ast.atxHeader), html.atxHeader);
  }
);

test(
  'setext list: code should generate to html',
  t => {
    t.is(codeGenerator(ast.setextHeader), html.setextHeader);
  }
);

test(
  'code block: code should generate to html',
  t => {
    t.is(codeGenerator(ast.codeBlock), html.codeBlock);
  }
);

test.skip(
  'blockquote: code should generate to html',
  t => {
    t.is(codeGenerator(ast.blockquote), html.blockquote);
  }
);
