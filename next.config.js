export default {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'src/app/dashboard',
        permanent: true,
      },
    ]
  },
}