const optimizedImages = require('next-optimized-images');
const withOptimizedImages = require('next-optimized-images');


module.exports = withOptimizedImages({
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg;
    },

});