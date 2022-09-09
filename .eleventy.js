const now = String(Date.now())

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/assets/css/index.css')

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })

  eleventyConfig.addShortcode('version', function () {
    return now
  })
}
