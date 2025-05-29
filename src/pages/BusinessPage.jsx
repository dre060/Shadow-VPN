import Layout from '../components/Layout';

export default function BusinessPage() {
  return (
    <Layout>
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">
            Business <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300">Enterprise VPN solutions coming soon...</p>
        </div>
      </div>
    </Layout>
  );
}