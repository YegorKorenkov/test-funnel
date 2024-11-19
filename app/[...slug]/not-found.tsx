export async function generateMetadata() {
  return {
    title: 'Page Not Found'
  }
}

export default function NotFound() {
  return <div className='w-screen h-screen flex items-center align-center justify-center'>404 not found</div>
}
