module.exports = {
    extends: [
        './rules/next'
    ].map( require.resolve )
    , rules: {}
};
