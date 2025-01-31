module.exports = function (eleventyConfig) {

    // This will stop the default behaviour of foo.html being turned into foo/index.html
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
  
    return {
      dir: {
        input: "content",
        output: "public",
      },
    };
  };