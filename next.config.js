/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function () {
    return {
      '/': {page: '/pages/login'},
      '/login': {page: '/pages/login'},
      '/register': {page: '/pages/register'},
      '/home': {page: '/pages/home'},
      '/browse': {page: '/pages/browse'},
      '/testimonial': {page: '/pages/testimonial'},
    }
  },
}

module.exports = nextConfig
