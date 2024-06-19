import withExportImages from 'next-export-optimize-images';

const nextConfig = withExportImages({
  output: 'export',
  reactStrictMode: true,
});
   
export default nextConfig