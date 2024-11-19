## Deploy
[Link](https://test-funnel-five.vercel.app)

## Running locally

1. Clone the repository:
   `git clone https://github.com/YegorKorenkov/test-funnel.git`
2. Go to project folder
3. Install dependencies:
   `npm install / yarn install`
4. Start local development server:
   `npm run dev / yarn dev`
5. Start local production server:
   `npm build && npm start / yarn build && yarn start`

## High-Level File Structure

Pages / Routing:

    ├── app                       
    │   │
    │   ├── [...slug]                 # Questionnaire screens pages
    │   ├── store                     # zustand state management for tracking user favourites
    │   └── studio                    # Sanity (Page loading - schemas and queries found in /packages/shared)   
    ├── public                        # Public assets
    └──── config.json                 # Configuration file
    
-----
Frontend Components:
 
    │   
    ├── components                
    │   ├── elements              # Components outside of blocks (e.g. Buttons, Text Field)
    │   ├── icons                 # Icon components
    │   ├── inputs                # Screen Input Blocks
    │   ├── screens               # Screens Without Inputs
    │   ├── Screen.tsx            # General component to display a screen depending on its type
    │   └── StateInitializer.tsx  # Initializing Redux state from LS
  
---
Other:

    |── middleware                # Intercept request & responses
    |── next.config.mjs           # Configure Next (e.g. redirects)
    └── tailwind.config.ts        # Configure Tailwind (e.g. colours)

## Config properties

This section contains descriptions of the config properties. <b>! Important note: the screen which is the first and the last, please place the first and the last in the array of the screens field accordingly</b>

|Field|Mandatory|Type|Description|
|---|---|---|---|
|id|*|string|Questionnaire ID, must be specified|
|title||string|Questionnaire Title, optional|
|screens|*|object|Screen configuration array, more details properties description below|

### Screen configuration
|Field|Mandatory|Type|Description|
|---|---|---|---|
|id|*|string|Screen ID, must be specified|
|screenType|*|string|Screen type, the value can be selected: `singleSelect, textInput, multiSelect, numberInput, infoScreen, thankYou`|
|nextScreenId||`string, null, { [key: string]: string }`|Field that points to the next screen, optional. if you need to switch to different screens depending on the answer, you can show an object as the value, in which the key will be the answer to the question, and the value will correspond to the next example: { "Single": "screen_4", "In a relationship": "screen_11" }|
|previousScreenId||`string, null`|Field that points to the previous screen, optional|
|question|*|string||
|subQuestion||string|If need to add an additional question or make a clarification|
|title||string|Adds main text for the `infoScreen` and `thankYou` screen type
|subText||string|Adds additional text for the `infoScreen` screen type
|additionalParams||object|For now, only the boolean type `darkMode` field is available to change the background on the corresponding page.
|paramsToGenerateScreenId||object|Generate next screen id based on previous answer. Example: { "screenToGet": "screen_6", "nextScreenId": { "Yes": "screen_8", "No": "screen_9" }}|
|inputProperties|*|`TextInputType, SelectInputType, MultiSelectInputType|Properties for inputs, each type is described below|

### TextInputType & MultiSelectInputType
|Field|Mandatory|Type|Description|
|---|---|---|---|
|options|*|`{ value: string; label: string; dynamicValue?: string }`|Options for select component. Important note, for the "Other" option an input is displayed where you can enter a custom value.|

### TextInputType
|Field|Mandatory|Type|Description|
|---|---|---|---|
|placeholder||string|Set placeholder for text/number input|