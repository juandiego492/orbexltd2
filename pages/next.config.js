module.exports = {
  async rewrites() {
    return [
      {
        source: '/proxy',
        destination: 'https://orbexltd.samcart.com/products/deposit',
      },
    ];
  },
};
