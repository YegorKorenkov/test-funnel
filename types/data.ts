export enum ScreenTypes {
  singleSelect = 'singleSelect',
  textInput = 'textInput',
  multiSelect = 'multiSelect',
  numberInput = 'numberInput',
  infoScreen = 'infoScreen',
  thankYou = 'thankYou'
}

export type TextInputType = {
  placeholder: string
}

export type SelectInputType = {
  options: { value: string; label: string; dynamicValue?: string }[]
}

export type MultiSelectInputType = {
  options: { value: string; label: string; dynamicValue?: string }[]
}

export type ScreenType = {
  id: string
  screenType: ScreenTypes
  question: string
  subQuestion?: string
  subText?: string
  inputProperties: TextInputType | SelectInputType | MultiSelectInputType
  nextScreenId?: string | null | { [key: string]: string }
  previousScreenId?: string | null
  searchParams?: string
  title?: string
  additionalParams?: {
    darkMode: boolean
  }
  paramsToGenerateScreenId?: {
    screenToGet: string
    nextScreenId: {
      [key: string]: string
    }
  }
}

export type QuestionnaireType = {
  id: 'questionnaire_1'
  title: 'Test'
  screens: ScreenType[]
}
