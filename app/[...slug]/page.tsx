import { notFound } from 'next/navigation'

import QuestionScreen from 'components/Screen'

import { fetchScreenDataById } from 'lib/utils/fetchScreenDataById'
import { getSlugFromParams } from 'lib/utils/getSlugFromParams'

type PageProps = {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  const questionnaire = await import('../../public/config.json')

  const paths = questionnaire.screens.map((screen: { id: string }) => ({
    slug: [screen.id]
  }))

  return paths
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params

  const screenSlug = getSlugFromParams(slug)

  const data = fetchScreenDataById(screenSlug)

  if (!data) {
    return notFound()
  }

  return <QuestionScreen data={data} />
}

export default Page
