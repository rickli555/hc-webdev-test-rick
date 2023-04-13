/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASEPATH || '';

const nextConfig = {
	basePath,
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
};

module.exports = nextConfig;
