const text = {
  $1: 'Use the `printf()` function.',
  $2: '``There is a literal backtick (`) here.``',
  $3: 'A single backtick in a code span: `` ` ``',
  $4: 'A backtick-delimited string in a code span: `` `foo` ``',
  $5: 'Please don\'t use any `<blink>` tags.',
  $6: '`&#8212;` is the decimal-encoded equivalent of `&mdash;`.',
};

const html = {
  $1: '<p>Use the <code>printf()</code> function.</p>',
  $2: '<p><code>There is a literal backtick (`) here.</code></p>',
  $3: '<p>A single backtick in a code span: <code>`</code></p>',
  $4: '<p>A backtick-delimited string in a code span: <code>`foo`</code></p>',
  $5: '<p>Please don\'t use any <code>&lt;blink&gt;</code> tags.</p>',
  $6: '<p><code>&amp;#8212;</code> is the decimal-encoded equivalent of <code>&amp;mdash;</code>.</p>',
};

module.exports = {
  text,
  tokens: {
    $1: [
      {
        type: 'BOF',
      },
      {
        type: 'Chars',
        value: 'Use the ',
        start: 0,
        end: 8,
      },
      {
        type: 'Code',
        value: 'printf()',
        isClosed: true,
        start: 8,
        end: 18,
      },
      {
        type: 'Chars',
        value: ' function.',
        start: 18,
        end: 28,
      },
      {
        type: 'EOF',
      },
    ],
    $2: [
      {
        type: 'BOF',
      },
      {
        type: 'Code',
        value: 'There is a literal backtick (`) here.',
        isClosed: true,
        start: 0,
        end: 41,
      },
      {
        type: 'EOF',
      },
    ],
    $3: [
      {
        type: 'BOF',
      },
      {
        type: 'Chars',
        value: 'A single backtick in a code span: ',
        start: 0,
        end: 34,
      },
      {
        type: 'Code',
        value: '`',
        isClosed: true,
        start: 34,
        end: 41,
      },
      {
        type: 'EOF',
      },
    ],
    $4: [
      {
        type: 'BOF',
      },
      {
        type: 'Chars',
        value: 'A backtick-delimited string in a code span: ',
        start: 0,
        end: 44,
      },
      {
        type: 'Code',
        value: '`foo`',
        isClosed: true,
        start: 44,
        end: 55,
      },
      {
        type: 'EOF',
      },
    ],
    $5: [
      {
        type: 'BOF',
      },
      {
        type: 'Chars',
        value: 'Please don\'t use any ',
        start: 0,
        end: 21,
      },
      {
        type: 'Code',
        value: '&lt;blink&gt;',
        isClosed: true,
        start: 21,
        end: 30,
      },
      {
        type: 'Chars',
        value: ' tags.',
        start: 30,
        end: 36,
      },
      {
        type: 'EOF',
      },
    ],
    $6: [
      {
        type: 'BOF',
      },
      {
        type: 'Code',
        value: '&amp;#8212;',
        isClosed: true,
        start: 0,
        end: 9,
      },
      {
        type: 'Chars',
        value: ' is the decimal-encoded equivalent of ',
        start: 9,
        end: 47,
      },
      {
        type: 'Code',
        value: '&amp;mdash;',
        isClosed: true,
        start: 47,
        end: 56,
      },
      {
        type: 'Chars',
        value: '.',
        start: 56,
        end: 57,
      },
      {
        type: 'EOF',
      },
    ],
  },
  ast: {
    $1: {
      type: 'Program',
      body: [
        {
          type: 'BOF',
        },
        {
          type: 'Paragraph',
          body: [
            {
              type: 'Chars',
              value: 'Use the ',
            },
            {
              type: 'Code',
              body: [
                {
                  type: 'Chars',
                  value: 'printf()',
                },
              ],
              isClosed: true,
            },
            {
              type: 'Chars',
              value: ' function.',
            },
          ],
          isClosed: true,
        },
        {
          type: 'EOF',
        },
      ],
      parent: null,
    },
    $2: {
      type: 'Program',
      body: [
        {
          type: 'BOF',
        },
        {
          type: 'Paragraph',
          body: [
            {
              type: 'Code',
              body: [
                {
                  type: 'Chars',
                  value: 'There is a literal backtick (`) here.',
                },
              ],
              isClosed: true,
            },
          ],
          isClosed: true,
        },
        {
          type: 'EOF',
        },
      ],
      parent: null,
    },
    $3: {
      type: 'Program',
      body: [
        {
          type: 'BOF',
        },
        {
          type: 'Paragraph',
          body: [
            {
              type: 'Chars',
              value: 'A single backtick in a code span: ',
            },
            {
              type: 'Code',
              body: [
                {
                  type: 'Chars',
                  value: '`',
                },
              ],
              isClosed: true,
            },
          ],
          isClosed: true,
        },
        {
          type: 'EOF',
        },
      ],
      parent: null,
    },
    $4: {
      type: 'Program',
      body: [
        {
          type: 'BOF',
        },
        {
          type: 'Paragraph',
          body: [
            {
              type: 'Chars',
              value: 'A backtick-delimited string in a code span: ',
            },
            {
              type: 'Code',
              body: [
                {
                  type: 'Chars',
                  value: '`foo`',
                },
              ],
              isClosed: true,
            },
          ],
          isClosed: true,
        },
        {
          type: 'EOF',
        },
      ],
      parent: null,
    },
    $5: {
      type: 'Program',
      body: [
        {
          type: 'BOF',
        },
        {
          type: 'Paragraph',
          body: [
            {
              type: 'Chars',
              value: 'Please don\'t use any ',
            },
            {
              type: 'Code',
              body: [
                {
                  type: 'Chars',
                  value: '&lt;blink&gt;',
                },
              ],
              isClosed: true,
            },
            {
              type: 'Chars',
              value: ' tags.',
            },
          ],
          isClosed: true,
        },
        {
          type: 'EOF',
        },
      ],
      parent: null,
    },
    $6: {
      type: 'Program',
      body: [
        {
          type: 'BOF',
        },
        {
          type: 'Paragraph',
          body: [
            {
              type: 'Code',
              body: [
                {
                  type: 'Chars',
                  value: '&amp;#8212;',
                },
              ],
              isClosed: true,
            },
            {
              type: 'Chars',
              value: ' is the decimal-encoded equivalent of ',
            },
            {
              type: 'Code',
              body: [
                {
                  type: 'Chars',
                  value: '&amp;mdash;',
                },
              ],
              isClosed: true,
            },
            {
              type: 'Chars',
              value: '.',
            },
          ],
          isClosed: true,
        },
        {
          type: 'EOF',
        },
      ],
      parent: null,
    },
  },
  html,
};
