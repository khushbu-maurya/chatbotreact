import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import AvatarIcon from "../assets/images/avtar.png";


const options = [
  'newOptions',
  'initialOptions',
  'feelsLikeOptions',
  'looksLikeOptions',
  'notWorkingOptions',
  'smellsLikeOptions',
  'soundsLikeOptions',
  'abnormalBrakingOptions',

  // Feels Like Option

  'MybrakepedaltravelsmuchfartherOptions',
  'MybrakepedaltravelsmuchfartherOptionsYes',
  'MybrakepedaltravelsmuchfartherOptionsNo',
  'MybrakepedaltravelsmuchfartherOptionsNoOption',
  'abnormalBrakingOptions2',
  'abnormalBrakingOptions21',
  'abnormalBrakingOptions3',
  'abnormalBrakingOptions4',
  'abnormalBrakingOptions5',
  'abnormalBrakingOptions6',
  'abnormalBrakingOptions61',
  'abnormalBrakingOptions611',
  'abnormalBrakingOptions6111',
  'abnormalBrakingOptions6112',
  'abnormalBrakingOptions61121',
  'abnormalBrakingOptions611211',
  'abnormalBrakingOptions7',
  'abnormalBrakingOptions71',
  'abnormalBrakingOptions711',
  'abnormalBrakingOptions712',
  'abnormalBrakingOptions8',
  'abnormalBrakingOptions81',
  'abnormalBrakingOptions811',
  'abnormalBrakingOptions812',

  'abnormalSteering1',
  'abnormalSteering11',
  'abnormalSteering111',
  'abnormalSteering12',
  'abnormalSteering121',
  'abnormalSteering4',
  'abnormalSteering5',
  'abnormalSteering6',

  'awkwardShifting1',
  'awkwardShifting12',
  'awkwardShifting122',
  'awkwardShifting13',
  'awkwardShifting132',
  'awkwardShifting14',
  'awkwardShifting142',
  'awkwardShifting15',
  'awkwardShifting152',

  'shaking1',
  'shaking12',
  'shaking122',
  'shaking13',
  'shaking131',
  'shaking1312',
  'shaking14',

  'ridesUncomfortably1',
  'ridesUncomfortably11',
  'ridesUncomfortably111',

  'vehicleSluggish1',
  'vehicleSluggish11',
  'vehicleSluggish112',
  'vehicleSluggish12',
  'vehicleSluggish13',
  'vehicleSluggish132',

  // Looks Like Option

  'tireWearingOut1',
  'tireWearingOut13',

  'highEngineTemperature1',
  'highEngineTemperature11',
  'highEngineTemperature12',
  'highEngineTemperature13',
  'highEngineTemperature111',
  'highEngineTemperature112',

  'poorGasMileage1',
  'poorGasMileage11',
  'poorGasMileage12',

  'smoke1',
  'smoke11',
  'smoke111',
  'smoke12',
  'smoke13',
  'smoke131',

  'steam1',

  'warningLightOn1',
  'warningLightOn12',
  'warningLightOn13',
  'warningLightOn15',

  // Not Working Option

  'engineFeelsWeak1',
  'engineFeelsWeak11',

  'vehicleDoesNotMove1',

  'engineKeepsRunning1',
  'engineKeepsRunning11',
  'engineKeepsRunning111',
  'engineKeepsRunning12',

  'lackOfAir1',
  'lackOfAir11',
  'lackOfAir12',
  'lackOfAir121',
  'lackOfAir122',
  'lackOfAir13',
  'lackOfAir132',

  'carWillNotStart1',
  'carWillNotStart11',
  'carWillNotStart112',
  'carWillNotStart12',
  'carWillNotStart121',
  'carWillNotStart1211',
  'carWillNotStart13',
  'carWillNotStart133',
  'carWillNotStart1331',

  'poorGasMileageNotWorking1',
  'poorGasMileageNotWorking11',
  'poorGasMileageNotWorking12',

  'engineStalls1',
  'engineStalls11',
  'engineStalls12',
  'engineStalls121',
  'engineStalls13',
  'engineStalls131',

  // Smells Like Options

  'rottenEggSmell1',

  // Sounds Like Options

  'clickingSound1',
  'clickingSound11',

  'brakesMakeNoise1',

  'clunkingSound1',
  'clunkingSound11',
  'clunkingSound12',
  'clunkingSound13',
  'clunkingSound15',

  'pinging1',
  'pinging13',

  'sputterAndCough1',
  'sputterAndCough12',

  'squealingNoise1',
  'squealingNoise11',
  'squealingNoise12',

  'engineBackfires1',
  'engineBackfires11',
  'engineBackfires12',

  'engineRunningRoughly1',

  'tickingAndTapping1',
  'tickingAndTapping11',

  // Options for restart chat

  'restartOption',

  'dynamicOptionRender'
]

const widgets = [];

let outputData = [];

export const fillData = (button) => {
  outputData = button
}

export const getData = () => {
  return outputData;
}


options.forEach(element => {
  widgets.push(
    {
      widgetName: element,
      widgetFunc: (props) => <Options {...props} />,
      props: {
        option: element,
        data : outputData
      }
    },
  )
});

const config = {
  botName: "Auto bot",
  initialMessages: [
    createChatBotMessage(`What type of symptom do you have?`, {
      widget: "initialOptions",
    }),
  ],
  customComponents: {
    header: () => (
      <div className="cus-header-top-wrap">
        <div>
          <img src={AvatarIcon} alt='avatar' />
        </div>
        <div>
          <h3>Auto bot</h3>
          <span>AI Assistant</span>
        </div>
      </div>
    ),
  },
  widgets: widgets
};

export default config;
