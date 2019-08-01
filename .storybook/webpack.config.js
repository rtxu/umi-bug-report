module.exports = async ({ config }) => {

  config.module.rules.push({
    test: /\.less$/,
    use: [
      { 
        loader: 'style-loader', 
      }, 
      { 
        loader: 'css-loader', 
        options: {
          importLoaders: 1,
        }
      }, 
      { 
        loader: 'less-loader',
      },
    ],
  });
  config.resolve.extensions.push('.less');

  console.log(config);
  console.dir(config.module.rules, { depth: null }) || config;

  return config;
}