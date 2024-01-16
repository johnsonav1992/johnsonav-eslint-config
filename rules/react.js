module.exports = {
    extends: [
        'plugin:react/recommended'
        , 'plugin:react/jsx-runtime'
    ]
    , rules: {
        /*
         * Do no check for prop types
         */
        'react/prop-types': 0
        /*
         * Require all prop types to be used in the component
         */
        , 'react/no-unused-prop-types': 'error'
        /*
         * Disallow inconsistent spacing around jsx brackets
         * Disallow spaces around opening and closing brackets of a JSX tag
         * Enforce space before slash of a self-closing JSX tag
         */
        , 'react/jsx-tag-spacing': [ 'error', {
            'closingSlash': 'never'
            , 'beforeSelfClosing': 'always'
            , 'afterOpening': 'never'
            , 'beforeClosing': 'never'
        } ]
        /*
         * Enforce consistent spacing around jsx attributes
         */
        , 'react/jsx-curly-spacing': [ 'error', {
            'when': 'always'
            , 'children': true
        } ]
        /*
         * Enforce all props are on a new line
         */
        , 'react/jsx-max-props-per-line': [ 'error', {
            'maximum': 1
            , 'when': 'always'
        } ]
        /*
         * Enforce first prop on a new line if the component has multiple props
         */
        , 'react/jsx-first-prop-new-line': [ 'error', 'multiline' ]
        /*
         * Enforce self closing tags for React and HTML elements
         */
        , 'react/self-closing-comp': [ 'error', {
            'component': true
            , 'html': true
        } ]
        /*
         * Enforce parentheses around multilines JSX
         */
        , 'react/jsx-wrap-multilines': [ 'error', {
            'declaration': 'parens-new-line'
            , 'assignment': 'parens-new-line'
            , 'return': 'parens-new-line'
            , 'arrow': 'parens-new-line'
            , 'condition': 'parens-new-line'
            , 'logical': 'parens-new-line'
            , 'prop': 'parens-new-line'
        } ]
        /*
         * Enforce consistent alignment of closing brackets of JSX elements
         */
        , 'react/jsx-closing-bracket-location': [ 'error', 'tag-aligned' ]
        /*
         * Enforce boolean attributes to be explicit
         */
        , 'react/jsx-boolean-value': 'error'
        /*
         * Disallow curly brackets as props or children in JSX expressions
         */
        , 'react/jsx-curly-brace-presence': [ 'error', {
            'props': 'never'
            , 'children': 'never'
        } ]
        /*
         * Enforce no spacing around equal signs in JSX attributes
         */
        , 'react/jsx-equals-spacing': 'error'
    }
};
