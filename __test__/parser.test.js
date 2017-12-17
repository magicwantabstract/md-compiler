/* eslint comma-dangle: 0 */

import test from 'ava';
import isMatched from '../__test__/helpers/is-match';

import {parser} from '../src/parser';
import {tokens, variables, ast } from './fixtures';

test(
  'emphasis: tokens should parse to abstract syntax tree',
  t => {
    isMatched(parser({tokens: tokens.emphasis}), [ast.emphasis], (a, b) => {
      t.is(a, b, `emphasis: ${a} isn't equal ${b}`);
    });
  }
);

test(
  'code: tokens should parse to abstract syntax tree',
  t => {
    isMatched(parser({tokens: tokens.code.$1}), [ast.code.$1], (a, b) => {
      t.is(a, b, `code($1): ${a} isn't equal ${b}`);
    });

    isMatched(parser({tokens: tokens.code.$2}), [ast.code.$2], (a, b) => {
      t.is(a, b, `code($2): ${a} isn't equal ${b}`);
    });

    isMatched(parser({tokens: tokens.code.$3}), [ast.code.$3], (a, b) => {
      t.is(a, b, `code($3): ${a} isn't equal ${b}`);
    });

    isMatched(parser({tokens: tokens.code.$4}), [ast.code.$4], (a, b) => {
      t.is(a, b, `code($4): ${a} isn't equal ${b}`);
    });

    isMatched(parser({tokens: tokens.code.$5}), [ast.code.$5], (a, b) => {
      t.is(a, b, `code($5): ${a} isn't equal ${b}`);
    });

    isMatched(parser({tokens: tokens.code.$6}), [ast.code.$6], (a, b) => {
      t.is(a, b, `code($6): ${a} isn't equal ${b}`);
    });
  }
);

test(
  'link inline: tokens should parse to abstract syntax tree',
  t => {
    t.deepEqual(
      parser({tokens: tokens.linkInline.withTitle}),
      ast.linkInline.withTitle,
      'with title'
    );
    t.deepEqual(
      parser({tokens: tokens.linkInline.withoutTitle}),
      ast.linkInline.withoutTitle,
      'without title'
    );
    t.deepEqual(
      parser({tokens: tokens.linkInline.relativePath}),
      ast.linkInline.relativePath,
      'relative path'
    );
    t.deepEqual(
      parser({tokens: tokens.linkInline.withEmphasis}),
      ast.linkInline.withEmphasis,
      'with emphasis'
    );
    t.deepEqual(
      parser({tokens: tokens.linkInline.invalid}),
      ast.linkInline.invalid,
      'invalid'
    );
  }
);

test.todo('link inline: link without text');

test(
  'link reference: tokens should parse to abstract syntax tree',
  t => {
    t.deepEqual(
      parser(
        {
          tokens: tokens.linkReference.linkDefinitions,
          variables: variables.linkReference.linkDefinitions,
        }
      ),
      ast.linkReference.linkDefinitions,
      'link definitions'
    );
    t.deepEqual(
      parser(
        {
          tokens: tokens.linkReference.titleOnNextLine,
          variables: variables.linkReference.titleOnNextLine,
        }
      ),
      ast.linkReference.titleOnNextLine,
      'title on the next line'
    );
    t.deepEqual(
      parser(
        {
          tokens: tokens.linkReference.notCaseSensitive,
          variables: variables.linkReference.notCaseSensitive,
        }
      ),
      ast.linkReference.notCaseSensitive,
      'not case sensitive'
    );
    t.deepEqual(
      parser(
        {
          tokens: tokens.linkReference.implicitLinkName,
          variables: variables.linkReference.implicitLinkName,
        }
      ),
      ast.linkReference.implicitLinkName,
      'implicit link name'
    );
    t.deepEqual(
      parser(
        {
          tokens: tokens.linkReference.idents,
          variables: variables.linkReference.idents,
        }
      ),
      ast.linkReference.idents,
      'idents'
    );
    t.deepEqual(
      parser(
        {
          tokens: tokens.linkReference.invalid,
          variables: variables.linkReference.invalid,
        }
      ),
      ast.linkReference.invalid,
      'invalid'
    );
  }
);

test.todo('link reference: link without text');

test(
  'image: tokens should parse to abstract syntax tree',
  t => {
    t.deepEqual(
      parser({tokens: tokens.image.inline}),
      ast.image.inline,
      'inline'
    );
    t.deepEqual(
      parser({tokens: tokens.image.optionalTitle}),
      ast.image.optionalTitle,
      'optional title'
    );
    t.deepEqual(
      parser({
        tokens: tokens.image.reference,
        variables: variables.image.reference,
      }),
      ast.image.reference,
      'reference'
    );
  }
);

test(
  'paragraph: tokens should parse to abstract syntax tree',
  t => {
    isMatched(parser({tokens: tokens.paragraph}), [ast.paragraph], (a, b) => {
      t.is(a, b, `paragraph: ${a} isn't equal ${b}`);
    });
  }
);

test(
  'unorder list: tokens should parse to abstract syntax tree',
  t =>{
    isMatched(
      parser(
        {tokens: tokens.unorderList}),
      [ast.unorderList],
      (a, b) => {
        t.is(a, b, `unorder list: ${a} isn't equal ${b}`);
      }
    );
  }
);

test(
  'order list: tokens should parse to abstract syntax tree',
  t => {
    isMatched(parser({tokens: tokens.orderList}), [ast.orderList], (a, b) => {
      t.is(a, b, `order list: ${a} isn't equal ${b}`);
    });
  }
);

test(
  'atx header: tokens should parse to abstract syntax tree',
  t => {
    isMatched(parser({tokens: tokens.atxHeader}), [ast.atxHeader], (a, b) => {
      t.is(a, b, `order list: ${a} isn't equal ${b}`);
    });
  }
);

test(
  'setext header: tokens should parse to abstract syntax tree',
  t => {
    isMatched(
      parser({tokens: tokens.setextHeader}),
      [ast.setextHeader],
      (a, b) => {
        t.is(a, b, `order list: ${a} isn't equal ${b}`);
      }
    );
  }
);

test(
  'horizontal rules: tokens should parse to abstract syntax tree',
  t => {
    isMatched(
      parser({tokens: tokens.horizontalRule}),
      [ast.horizontalRule],
      (a, b) => {
        t.is(a, b, `order list: ${a} isn't equal ${b}`);
      }
    );
  }
);

test(
  'code block: tokens should parse to abstract syntax tree',
  t => {
    isMatched(parser({tokens: tokens.codeBlock}), [ast.codeBlock], (a, b) => {
      t.is(a, b, `code block: ${a} isn't equal ${b}`);
    });
  }
);

test(
  'blockquote: tokens should parse to abstract syntax tree',
  t => {
    t.deepEqual(
      parser({tokens: tokens.blockquote.everyLine}),
      ast.blockquote.everyLine,
      'every line'
    );
    t.deepEqual(
      parser({tokens: tokens.blockquote.firstLine}),
      ast.blockquote.firstLine,
      'first line'
    );
    t.deepEqual(
      parser({tokens: tokens.blockquote.nestedBlockquote}),
      ast.blockquote.nestedBlockquote,
      'nested blockquote'
    );
    t.deepEqual(
      parser({tokens: tokens.blockquote.containedOtherElements}),
      ast.blockquote.containedOtherElements,
      'contained other elements'
    );
  }
);

test.todo('blockquote: should exit from blockquote');

test(
  'parser should throw exceptions',
  t => {
    t.throws(
      () => parser({tokens: [{type: 'function'}]}),
      Error,
      'token is not valide'
    );
    t.throws(() => parser({}), TypeError, 'tokens are not valide');
    t.throws(() => parser({tokens: {}}), TypeError, 'tokens are not array');
    t.throws(
      () => parser({tokens: [], variables: []}),
      TypeError,
      'variables are not object'
    );
  }
);

test(
  'parser shouldn\'t throw exceptions',
  t => {
    t.notThrows(() => parser({tokens: []}), 'tokens are empty');
    t.notThrows(
      () => parser({tokens: [], variables: {}}),
      'tokens and variables are empty'
    );
  }
);
