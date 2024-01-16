/**
 * This module exports an object containing ESLint rules for a frontend project.
 * @module eslint-config-veryable-frontend/rules/base
 */

module.exports = {
    extends: [
        'eslint:recommended'
        , 'plugin:@typescript-eslint/recommended'
    ]
    , plugins: [
        'import-newlines'
        , 'unused-imports'
        , 'no-autofix'
        , 'newline-destructuring'
        , 'import'
    ]
    , globals: {
        globalThis: false
        , JSX: 'readonly'
    }
    , overrides: [
        {
            'files': [ '**/*.ts' ]
            , 'rules': {
                'max-lines': [ 'off' ]
            }
        }
    ]
    , rules: {
        /**
         * Indent using 4 spaces and error on mixed tabs/spaces.
         * SwitchCase is indented 1 level from the switch statement.
         */
        'indent': [
            'error'
            , 4
            , {
                'SwitchCase': 1
            }
        ]
        /**
         * Enforce max line length of 80 characters.
         */
        , 'max-len': [
            'warn'
            , {
                'code': 80
                , 'ignorePattern': '\\s'
                , 'ignoreTemplateLiterals': true
            }
        ]
        /**
         * Enforce 1 space after commas and no space before.
         */
        , 'comma-spacing': [
            'error'
            , {
                'before': false
                , 'after': true
            }
        ]
        /**
       * Disallow trailing commas after the last element or property of an object or array.
       */
        , 'comma-dangle': [
            'error'
            , 'never'
        ]
        /**
       * Enforce single quotes.
       */
        , 'quotes': [
            'error'
            , 'single'
        ]
        /**
       * Enforce Unix linebreaks.
       */
        , 'linebreak-style': [
            'warn'
            , 'unix'
        ]
        /**
       * Enforce space before block statements.
       */
        , 'space-before-blocks': [
            'error'
            , 'always'
        ]
        /**
       * Enforce spacing around arrows.
       */
        , 'arrow-spacing': [
            'error'
            , {
                'before': true
                , 'after': true
            }
        ]
        /**
       * Enforce spacing after colon but not before in a key-value pair.
       */
        , 'key-spacing': [
            'error'
            , {
                'beforeColon': false
                , 'afterColon': true
                , 'mode': 'strict'
            }
        ]
        /**
       * Enforce parenthesis around arrow function parameters as needed.
       */
        , 'arrow-parens': [
            'error'
            , 'as-needed'
        ]
        /**
       * Enforce spacing inside parenthesis.
       */
        , 'space-in-parens': [
            'error'
            , 'always'
            , { 'exceptions': [ 'empty' ] }
        ]
        /**
       * Enforce spacing inside brackets.
       */
        , 'array-bracket-spacing': [
            'error'
            , 'always'
        ]
        /**
       * Enforce spacing around brackets of computed properties in objects.
       */
        , 'computed-property-spacing': [
            'error'
            , 'always'
        ]
        /**
       * Enforce spacing inside curly braces.
       */
        , 'object-curly-spacing': [
            'error'
            , 'always'
        ]
        /**
       * Enforce new lines for object properties if there are more than 2.
       */
        , 'object-curly-newline': [
            'error'
            , {
                'ObjectExpression': {
                    'multiline': true
                    , 'minProperties': 2
                    , 'consistent': true
                }
                , 'ObjectPattern': {
                    'multiline': true
                    , 'minProperties': 2
                    , 'consistent': true
                }
                , 'ImportDeclaration': {
                    'multiline': true
                    , 'minProperties': 2
                }
                , 'ExportDeclaration': {
                    'multiline': true
                    , 'minProperties': 2
                }
            }
        ]
        /**
       * Enforce newlines for destructured imports if there are more than 2.
       */
        , 'import-newlines/enforce': [
            'error'
            , {
                'items': 1
                , 'semi': false
            }
        ]
        /**
       * Enforce newlines between object properties.
       */
        , 'object-property-newline': 'error'
        /**
       * Prefer template literals over string concatenation.
       */
        , 'prefer-template': 'error'
        /**
       * Enforce spacing around template literal curly braces.
       */
        , 'template-curly-spacing': [
            'error'
            , 'always'
        ]
        /**
       * Enforce one true brace style.
       */
        , 'brace-style': [
            'warn'
            , '1tbs'
            , {
                'allowSingleLine': true
            }
        ]
        /**
       * Require 'use strict' pragma.
       */
        , 'strict': [
            'warn'
            , 'global'
        ]
        /**
       * Enforce space before function parentheses.
       */
        , 'space-before-function-paren': [
            'error'
            , 'always'
        ]
        /**
       * Require semicolons.
       */
        , 'semi': [
            'error'
            , 'always'
        ]
        /**
       * Enforce newline at end of file.
       */
        , 'eol-last': [
            'error'
            , 'always'
        ]
        /**
       * Enforce spacing after semicolons but not before.
       */
        , 'semi-spacing': [
            'error'
            , {
                'before': false
                , 'after': true
            }
        ]
        /**
       * Enforce semicolon at the end of a line.
       */
        , 'semi-style': [
            'error'
            , 'last'
        ]
        /**
       * Disallow unnecessary semicolons.
       */
        , 'no-extra-semi': 'error'
        /**
       * Enforce spacing after keywords.
       */
        , 'keyword-spacing': [
            'error'
            , {
                'after': true
            }
        ]
        /**
       * Enforce leading commas.
       */
        , 'comma-style': [
            'error'
            , 'first'
            , {
                'exceptions':
                  {
                      'ImportDeclaration': false
                      , 'ObjectPattern': false
                  }
            }
        ]
        /**
       * Enforce linebreaks before and after operators.
       */
        , 'operator-linebreak': [
            'error'
            , 'before'
            , {
                'overrides': {
                    '?': 'ignore'
                    , ':': 'ignore'
                }
            }
        ]
        /**
       * Enforce spacing around infix operators.
       */
        , 'space-infix-ops': 'error'
        /**
       * Disallow multiple spaces.
       */
        , 'no-multi-spaces': 'error'
        /**
       * Disallow trailing spaces.
       */
        , 'no-trailing-spaces': 'error'
        /**
       * Enforce spacing around block braces.
       */
        , 'block-spacing': [
            'error'
            , 'always'
        ]
        /**
       * Enforce a limit of 750 lines per file.
       * Ignore blank lines and comments.
       */
        , 'max-lines': [
            'error', {
                'max': 750
                , 'skipBlankLines': true
                , 'skipComments': true
            }
        ]
        /**
         * Enforce single quotes for JSX attributes.
         */
        , 'jsx-quotes': [
            'error'
            , 'prefer-single'
        ]
        /**
         * Disallow unnecessary ternary operators.
         */
        , 'no-unneeded-ternary': 'error'
        /**
         * Enforce multiline ternary operators.
         */
        , 'multiline-ternary': [ 'error', 'always-multiline' ]
        /**
         * Allow variable declaration inside a case block
         */
        , 'no-case-declarations': 'off'
        /**
         * Allow control flow statements in finally blocks
         */
        , 'no-unsafe-finally': 'off'
        /**
         * Warn on unreachable code
         */
        , 'no-unreachable': 'warn'
        /**
         * Warn on undefined variables
         */
        , 'no-undef': 'warn'
        /**
         * Warn on empty destructuring patterns
         */
        , 'no-empty-pattern': 'warn'
        /**
         * Disallow more than 1 empty line
         */
        , 'no-multiple-empty-lines': [ 'error', {
            'max': 1
            , 'maxBOF': 0
            , 'maxEOF': 0
        } ]
        /**
         * Enforce semi-colon usage
         */
        , '@typescript-eslint/semi': 'error'
        /**
         * Enforce semi-colon as the delimiter for interfaces and types
         */
        , '@typescript-eslint/member-delimiter-style': 'error'
        /**
         * Enforce spacing around type annotations
         */
        , '@typescript-eslint/type-annotation-spacing': 'error'
        /**
         * Warn on unused variables
         */
        , '@typescript-eslint/no-unused-vars': 'warn'
        /**
         * Warn on ts-ignore comments
         */
        , '@typescript-eslint/ban-ts-comment': 'warn'
        /**
         * Warn when using banned types
         */
        , '@typescript-eslint/ban-types': 'warn'
        /**
         * Warn when using an empty interface
         */
        , '@typescript-eslint/no-empty-interface': 'warn'
        /**
         * Warn when using an empty function
         */
        , '@typescript-eslint/no-empty-function': 'warn'
        /**
         * Error on unused imports
         */
        , 'no-autofix/unused-imports/no-unused-imports': 'error'
        /**
         * Enforce newlines for destructuring
         */
        , 'newline-destructuring/newline': [ 'error', { 'items': 1 } ]
        /**
         * Warn on default exports
         */
        , 'import/no-default-export': 'warn'
    }
};
