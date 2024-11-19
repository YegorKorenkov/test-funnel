'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { MultiSelectInputType, ScreenType, ScreenTypes, SelectInputType, TextInputType } from 'types/data'

import BackButton from './elements/BackButton'
import MultiSelect from './inputs/MultiSelect'
import SingleSelect from './inputs/SingleSelect'
import TextInput from './inputs/TextInput'
import HowItWorkScreen from './screens/HowItWorkScreen'
import ThankYouScreen from './screens/ThankYouScreen'

import { useAppDispatch, useAppSelector } from 'lib/hooks/redux'
import { addAnswer } from 'lib/store/answersSlice/slice'
import { replaceDynamicValues } from 'lib/utils/replaceDynamicValues'

export default function QuestionScreen({ data }: { data: ScreenType }) {
  const router = useRouter()

  const dispatch = useAppDispatch()
  const { answers } = useAppSelector(state => state.answers)

  const next = (answer: string) => {
    const screenId = data.id
    const nextScreen = data.nextScreenId

    dispatch(addAnswer({ screenId, answer }))

    if (nextScreen) {
      if (typeof nextScreen === 'object') {
        router.push(`/${nextScreen[answer]}`)
        return
      }

      router.push(`/${nextScreen}`)
    }
  }

  const nextWithoutDispatch = () => {
    const nextScreen = data.nextScreenId

    if (nextScreen) {
      router.push(`/${nextScreen}`)
      return
    }

    const paramsToGenerateScreenId = data.paramsToGenerateScreenId

    if (paramsToGenerateScreenId) {
      router.push(`/${paramsToGenerateScreenId.nextScreenId[answers[paramsToGenerateScreenId.screenToGet] as string]}`)
    }
  }

  const nextMultiSelect = (answer: string[]) => {
    const screenId = data.id
    const nextScreen = data.nextScreenId

    dispatch(addAnswer({ screenId, answer }))

    if (nextScreen) {
      router.push(`/${nextScreen}`)
    }
  }

  const getInputComponentByType = () => {
    switch (data.screenType) {
      case ScreenTypes.singleSelect: {
        const props = data.inputProperties as SelectInputType

        return <SingleSelect options={props.options} selectedValue={answers[data.id] as string} onSelect={next} />
      }

      case ScreenTypes.textInput: {
        const props = data.inputProperties as TextInputType
        return <TextInput value={answers[data.id] as string} onSubmit={next} type='text' inputProps={props} />
      }

      case ScreenTypes.numberInput: {
        const props = data.inputProperties as TextInputType
        return <TextInput value={answers[data.id] as string} onSubmit={next} type='number' inputProps={props} />
      }

      case ScreenTypes.infoScreen: {
        return (
          <HowItWorkScreen
            title={data.title}
            subText={data.subText}
            buttonTitle='Next'
            onSubmit={nextWithoutDispatch}
          />
        )
      }

      case ScreenTypes.multiSelect: {
        const props = data.inputProperties as MultiSelectInputType

        return (
          <MultiSelect
            options={props.options}
            selectedValue={answers[data.id] as string[]}
            onSubmit={nextMultiSelect}
          />
        )
      }

      case ScreenTypes.thankYou: {
        return <ThankYouScreen answers={answers} title={data.title || ''} />
      }

      default:
        return null
    }
  }

  useEffect(() => {
    const isDarkMode = data?.additionalParams?.darkMode

    if (isDarkMode) {
      document.documentElement.classList.add('dark')

      return () => document.documentElement.classList.remove('dark')
    }
  }, [data])

  return (
    <div className='container py-5'>
      <div className='max-w-[330px] w-full flex flex-col justify-center mx-auto'>
        {data.question && (
          <h3 className='text-2xl font-bold mb-6 dark:text-light-text'>
            {replaceDynamicValues(data.question, answers)}
          </h3>
        )}

        {data.subQuestion && <h3 className='text-lg font-bold mb-6 dark:text-light-text'>{data.subQuestion}</h3>}

        {getInputComponentByType()}

        {data.previousScreenId && <BackButton prevHref={`/${data.previousScreenId}`} />}
      </div>
    </div>
  )
}
