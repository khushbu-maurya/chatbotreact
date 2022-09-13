import AxiosServices from "../AxiosServices";
import { fillData } from "./config";

const axiosServices = new AxiosServices;



class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };



  provideAnswer = (answer) => {
    const message = this.createChatBotMessage(
      answer?.text,
      {
        widget: 'dynamicOptionRender'
      },
    );
    this.addMessageToState(message);
  };
  

  postUserInput = async (question) => {
    const parameter = { message: question, sender: "0d3b3ed1-0456-4fba-9d6f-c04edc432674" }
  
    // const answerResponse = await axiosServices.post(process.env.REACT_APP_BACKEND_URL, parameter)
    const answerResponse = await axiosServices.post('http://localhost:5000/findAnswer', { question: question.title })
    let answer = answerResponse.data.data;
    this.provideAnswer(answer);
    fillData(answer.buttons)
  
    console.log(answer, 'response')
  };




  // --------------- Initial Options ---------------- //


  userMessage = (option, event) => {
    const clientMessage = this.createClientMessage(
      option.text,
    );
    event.target.parentElement.remove()
    this.addMessageToState(clientMessage);
  }

  reStartChart = (option, event) => {
    const message = this.createChatBotMessage(
      "Would like to continue and diagnose another issue?",
      {
        widget: "restartOption",
        withAvatar: true
      },
    );
    this.addMessageToState(message);
  }

  endChat = (option, event) => {
    const message = this.createChatBotMessage(
      "Thank You!",
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  }

  startChat = (option, event) => {
    const message = this.createChatBotMessage(
      "What type of symptom do you have?",
      {
        widget: "initialOptions",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  }

  feelsLikeOptions = (option, event) => {
    console.log(option, event, 'option test')
    const message = this.createChatBotMessage(
      "What do you feel?",
      {
        widget: "feelsLikeOptions",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  looksLikeOptions = (option, event) => {
    const message = this.createChatBotMessage(
      "What do you Looks Like?",
      {
        widget: "looksLikeOptions",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  notWorkingOptions = (option, event) => {
    const message = this.createChatBotMessage(
      "What isn't working properly?",
      {
        widget: "notWorkingOptions",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  smellsLikeOptions = (option, event) => {
    const message = this.createChatBotMessage(
      "What do you smell?",
      {
        widget: "smellsLikeOptions",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  soundsLikeOptions = (option, event) => {
    const message = this.createChatBotMessage(
      "What do you hear?",
      {
        widget: "soundsLikeOptions",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  // -------------- Feels Like Options --------------- //

  handleAbnormalBraking = (option, event) => {
    const message = this.createChatBotMessage(
      "What most closely describes your brake issue?",
      {
        widget: "abnormalBrakingOptions",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleAbnormalSteering = (option, event) => {
    const message = this.createChatBotMessage(
      "When does this change in steering feel occur?",
      {
        widget: "abnormalSteering1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleAwkwardShifting = (option, event) => {
    const message = this.createChatBotMessage(
      "What is wrong with the transmission's shifting?",
      {
        widget: "awkwardShifting1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleShaking = (option, event) => {
    const message = this.createChatBotMessage(
      "When do you feel this vibration or shaking?",
      {
        widget: "shaking1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleRidesUncomfortably = (option, event) => {
    const message = this.createChatBotMessage(
      "When does this happen?",
      {
        widget: "ridesUncomfortably1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleVehicleSluggish = (option, event) => {
    const message = this.createChatBotMessage(
      "When does this happen?",
      {
        widget: "vehicleSluggish1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  // --------------- Looks Like Options ----------------- //

  handleTireWearingOut = (option, event) => {
    const message = this.createChatBotMessage(
      "Where on the tire are you seeing wear?",
      {
        widget: "tireWearingOut1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleEngineTemperature = (option, event) => {
    const message = this.createChatBotMessage(
      "When does the gauge read hot?",
      {
        widget: "highEngineTemperature1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handlePoorGasMileageLooksLike = (option, event) => {
    const message = this.createChatBotMessage(
      "Are the tires on this vehicle low on air?",
      {
        widget: "poorGasMileage1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleSmoke = (option, event) => {
    const message = this.createChatBotMessage(
      "What color is the smoke?",
      {
        widget: "smoke1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleSteam = (option, event) => {
    const message = this.createChatBotMessage(
      "Where is the steam coming from?",
      {
        widget: "steam1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleWarningLightOn = (option, event) => {
    const message = this.createChatBotMessage(
      "Which warning light did you see?",
      {
        widget: "warningLightOn1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  // -------------- Not Working Options -------------- //

  handleEngineFeelsWeak = (option, event) => {
    const message = this.createChatBotMessage(
      "Is this vehicle's top speed significantly less than it once was?",
      {
        widget: "engineFeelsWeak1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleVehicleDoesNotMove = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the transmission fluid level. Is it low?",
      {
        widget: "vehicleDoesNotMove1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleEngineKeepsRunning = (option, event) => {
    const message = this.createChatBotMessage(
      "When does this occur?",
      {
        widget: "engineKeepsRunning1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleLackOfAir = (option, event) => {
    const message = this.createChatBotMessage(
      "What climate control system is giving you problems?",
      {
        widget: "lackOfAir1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleCarWillNotStart = (option, event) => {
    const message = this.createChatBotMessage(
      "Which of the following symptoms most closely describe the issue with your car?",
      {
        widget: "carWillNotStart1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handlePoorGasMileageNotWorking = (option, event) => {
    const message = this.createChatBotMessage(
      "Are the tires on this vehicle low on air?",
      {
        widget: "poorGasMileageNotWorking1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleEngineStalls = (option, event) => {
    const message = this.createChatBotMessage(
      "When does the engine stall?",
      {
        widget: "engineStalls1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handlevehicleVehicleWillNotPark = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a garage and have the mechanic check the gear selector linkage and parking lock pawl. Always use the emergency brake to keep the vehicle from rolling when it's parked",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // -------------- Smells Like Options -------------- //

  handleMuggySmell = (option, event) => {
    const message = this.createChatBotMessage(
      "The drain pan of the A/C evaporator unit isn't draining. It is best to have an A/C specialist look at this, as the clog may be further up in the system and difficult to access",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  handleRottenEggSmell = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the air filter. Is it dirty?",
      {
        widget: "rottenEggSmell1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  // -------------- Sounds Like Options -------------- //

  handleClickingSound = (option, event) => {
    const message = this.createChatBotMessage(
      "Are the dash lights out or extremely dim?",
      {
        widget: "clickingSound1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleBrakesMakeNoise = (option, event) => {
    const message = this.createChatBotMessage(
      "What kind of noise are your brakes making?",
      {
        widget: "brakesMakeNoise1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleClunkingSound = (option, event) => {
    const message = this.createChatBotMessage(
      "When do you hear this clunk?",
      {
        widget: "clunkingSound1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handlePinging = (option, event) => {
    const message = this.createChatBotMessage(
      "When does the engine ping?",
      {
        widget: "pinging1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleSputterAndCough = (option, event) => {
    const message = this.createChatBotMessage(
      "When does this happen?",
      {
        widget: "sputterAndCough1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleSquealingNoise = (option, event) => {
    const message = this.createChatBotMessage(
      "Where is the squealing noise coming from?",
      {
        widget: "squealingNoise1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleEngineBackfires = (option, event) => {
    const message = this.createChatBotMessage(
      "When does this occur?",
      {
        widget: "engineBackfires1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleEngineRunningRoughly = (option, event) => {
    const message = this.createChatBotMessage(
      "When do you experience this?",
      {
        widget: "engineRunningRoughly1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  handleTickingAndTapping = (option, event) => {
    const message = this.createChatBotMessage(
      "Does the oil light come on?",
      {
        widget: "tickingAndTapping1",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  // --------- Options in abnormal braking ---------- //

  Mybrakepedaltravelsmuchfarther = (option, event) => {
    const message = this.createChatBotMessage(
      "Did this problem seem to coincide with any work performed on the vehicle?",
      {
        widget: "MybrakepedaltravelsmuchfartherOptions",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  Mybrakepedaltravelsmuchfartheryes = (option, event) => {
    const message = this.createChatBotMessage(
      "It is likely the master cylinder push rod is not properly adjusted",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  Mybrakepedaltravelsmuchfartherno = (option, event) => {
    const message = this.createChatBotMessage(
      "Is the brake fluid level low?",
      {
        widget: "MybrakepedaltravelsmuchfartherOptionsNo",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  Mybrakepedaltravelsmuchfartheryesoption = (option, event) => {
    const message = this.createChatBotMessage(
      "You need to add brake fluid. Unscrew the top of the reservoir and carefully pour in the appropriate amount. Do not keep the cap off any longer than necessary",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalBrakingOptions2 = (option, event) => {
    const message = this.createChatBotMessage(
      "This is most likely a problem with the power brake unit. Have it replaced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalBrakingOptions3 = (option, event) => {
    const message = this.createChatBotMessage(
      "This is often caused by air bubbles forming in the brake lines. If the brakes were recently worked on, maybe the mechanic did not fully 'bleed' the brake system. Or worse, there could be a leak somewhere in the brake system which is consequently allowing air to enter. In either case, take the vehicle to a reputable shop and ask the mechanic to check for leaks and to bleed the system",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalBrakingOptions4 = (option, event) => {
    const message = this.createChatBotMessage(
      "It is likely there is an internal leak in the master cylinder. This vehicle will need either a new or rebuilt master cylinder",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalBrakingOptions5 = (option, event) => {
    const message = this.createChatBotMessage(
      "It is likely that the brake linings are contaminated. Take this vehicle to a garage and ask the mechanic to check the brake linings for contamination",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalBrakingOptions6 = (option, event) => {
    const message = this.createChatBotMessage(
      "Are the front tires unevenly inflated?",
      {
        widget: "abnormalBrakingOptions611",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  abnormalBrakingOptions61 = (option, event) => {
    const message = this.createChatBotMessage(
      "Add air to the tire with lower air pressure (find the recommended pressure in your owner's manual or tire sidewall). The imbalance in tire pressure is causing pull",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalBrakingOptions611 = (option, event) => {
    const message = this.createChatBotMessage(
      "To check for further problems, you will need to remove the front tires and examine the brake discs and pads. If you are not comfortable with this, take the car to a mechanic. Are the brake discs or pads on one side thicker than those of the other side?",
      {
        widget: "abnormalBrakingOptions61121",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  abnormalBrakingOptions611211 = (option, event) => {
    const message = this.createChatBotMessage(
      "Depending on what did not match up from side-to-side (either pads or rotors), the vehicle will need a new, matching set",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalBrakingOptions7 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is the brake pedal sticking when you step on it?",
      {
        widget: "abnormalBrakingOptions71",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  abnormalBrakingOptions711 = (option, event) => {
    const message = this.createChatBotMessage(
      "Incomplete retraction of the brake pedal is causing the brakes to drag. Correct whatever it is that is causing the brake pedal to bind (like bunched up floor carpet). If you can't fix it yourself, take this vehicle to a garage as soon as possible",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalBrakingOptions712 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have a mechanic inspect this vehicle's master cylinder. A few items you may want check for are: the master cylinder push rod, a swollen primary piston cup and a blocked bypass port",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalBrakingOptions8 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is this happening in the front of the car?",
      {
        widget: "abnormalBrakingOptions81",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };
  abnormalBrakingOptions811 = (option, event) => {
    const message = this.createChatBotMessage(
      "A front brake caliper or piston is seized. Take this vehicle to a reputable repair shop and ask the mechanic to inspect the front brake unit which doesn't seem to be fully releasing",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };
  abnormalBrakingOptions812 = (option, event) => {
    const message = this.createChatBotMessage(
      "A rear brake caliper or piston is seized. Take this vehicle to a reputable repair shop and ask the mechanic to inspect the rear brake unit which doesn't seem to be fully releasing",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ------------- Options in Abnormal Steering ---------- //

  abnormalSteering11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does your steering feel loose and sloppy, especially at higher speeds?",
      {
        widget: "abnormalSteering11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  abnormalSteering111 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does your steering feel loose and sloppy, especially at higher speeds?",
      {
        widget: "abnormalSteering111",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  abnormalSteering112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the power steering fluid level (please refer to the vehicle's owner's manual for instructions). If the level is low, add some fluid. There's probably a leak somewhere in the system, in which case you'll need have it fixed",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalSteering1122 = (option, event) => {
    const message = this.createChatBotMessage(
      "Loose or worn steering or front suspension components are the issue. Have a mechanic inspect this vehicle and make any necessary repairs",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalSteering12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is the steering wheel shaking at a certain speed?",
      {
        widget: "abnormalSteering121",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  abnormalSteering121 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have the front wheels balanced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalSteering122 = (option, event) => {
    const message = this.createChatBotMessage(
      "We're sorry, but based on the information provided we are unable to determine the exact cause of your issue. But don't give up hope; we have a panel of mechanics available to help you. Feel free to leverage their wealth of automotive knowledge - it's on us",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalSteering3 = (option, event) => {
    const message = this.createChatBotMessage(
      "If the steering stiffens up at random, you'll need to have the power steering pump replaced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalSteering4 = (option, event) => {
    const message = this.createChatBotMessage(
      "Do your front tires have uneven pressures?",
      {
        widget: "abnormalSteering4",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  abnormalSteering41 = (option, event) => {
    const message = this.createChatBotMessage(
      "Make sure both front tires are at the correct pressure - this should correct the slight 'pull' of the vehicle. Refer to this vehicle's owner's manual if you aren't sure of the correct tire pressure",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalSteering42 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have the alignment checked. If that isn't the issue, you may have a dragging front brake, though this is much more rare",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalSteering5 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does the steering wheel not want to easily return to its 'normal' position",
      {
        widget: "abnormalSteering5",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  abnormalSteering51 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have an alignment job done on this vehicle",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalSteering52 = (option, event) => {
    const message = this.createChatBotMessage(
      "We're sorry, but based on the information provided we are unable to determine the exact cause of your issue. But don't give up hope; we have a panel of mechanics available to help you. Feel free to leverage their wealth of automotive knowledge - it's on us",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  abnormalSteering6 = (option, event) => {
    const message = this.createChatBotMessage(
      "The control valve assembly will need to be replaced. However, note that most garages will only replace the entire steering rack and pinion unit",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ------------- Awkward shifting ---------- //

  awkwardShifting11 = (option, event) => {
    const message = this.createChatBotMessage(
      "You will have to get a mechanic to do a transmission tear down in order to determine the exact cause of the problem. It may be a faulty clutch or band",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  awkwardShifting12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the transmission fluid level. Is it low?",
      {
        widget: "awkwardShifting12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  awkwardShifting121 = (option, event) => {
    const message = this.createChatBotMessage(
      "A wrong fluid level is affecting the hydraulics of transmission. If the level is too high, you can simply drain some out (refer to the owner's manual for instructions). If the level is too low, add some fluid (again, refer to the owner's manual)",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  awkwardShifting122 = (option, event) => {
    const message = this.createChatBotMessage(
      "If the fluid level looks good, chances are there is something wrong with the fluid itself. Is the fluid milky or black? Does it have bubbles?",
      {
        widget: "awkwardShifting122",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  awkwardShifting1222 = (option, event) => {
    const message = this.createChatBotMessage(
      "Change the transmission fluid and filter, and have the transmission inspected if the problem persists",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  awkwardShifting13 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the transmission fluid level. Is it low?",
      {
        widget: "awkwardShifting13",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  awkwardShifting131 = (option, event) => {
    const message = this.createChatBotMessage(
      "An incorrect fluid level is affecting the hydraulics of transmission. If the level is too high, you can simply drain some out (refer to the owner's manual for instructions). If the level is too low, add some fluid (again, refer to the owner's manual)",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  awkwardShifting132 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is the transmission computer controlled?",
      {
        widget: "awkwardShifting132",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  awkwardShifting1321 = (option, event) => {
    const message = this.createChatBotMessage(
      "A faulty electronic sensor is likely. Take this vehicle to a transmission specialist and have them run some diagnostic tests",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  awkwardShifting1323 = (option, event) => {
    const message = this.createChatBotMessage(
      "A faulty electronic sensor is likely. Take this vehicle to a transmission specialist and have them run some diagnostic tests",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  awkwardShifting14 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the transmission fluid level. Is it low?",
      {
        widget: "awkwardShifting14",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  awkwardShifting141 = (option, event) => {
    const message = this.createChatBotMessage(
      "A wrong fluid level is affecting the hydraulics of transmission. If the level is too high, you can simply drain some out (refer to the owner's manual for instructions). If the level is too low, add some fluid (again, refer to the owner's manual)",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  awkwardShifting142 = (option, event) => {
    const message = this.createChatBotMessage(
      "Did you notice the fluid to be milky-like and/or have bubbles? Is it brown or blackish in color?",
      {
        widget: "awkwardShifting142",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  awkwardShifting1422 = (option, event) => {
    const message = this.createChatBotMessage(
      "Change the transmission filter and fluid. Contaminated fluid is affecting the hydraulics of transmission",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  awkwardShifting15 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the transmission fluid level. Is it low?",
      {
        widget: "awkwardShifting15",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  awkwardShifting151 = (option, event) => {
    const message = this.createChatBotMessage(
      "A wrong fluid level is affecting the hydraulics of transmission. If the level is too high, you can simply drain some out (refer to the owner's manual for instructions). If the level is too low, add some fluid (again, refer to the owner's manual)",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  awkwardShifting152 = (option, event) => {
    const message = this.createChatBotMessage(
      "Did you notice the fluid to be milky-like and/or have bubbles? Is it brown or blackish in color?",
      {
        widget: "awkwardShifting152",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  awkwardShifting1522 = (option, event) => {
    const message = this.createChatBotMessage(
      "Change the transmission filter and fluid. Contaminated fluid is affecting the hydraulics of transmission",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ------------- Shaking ---------- //

  shaking11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Chances are the engine is misfiring in one or more cylinders",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  shaking12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Did this start out as a relatively small issue that has gradually become worse?",
      {
        widget: "shaking12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  shaking121 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a garage and have the mechanic check the throttle position sensor",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  shaking122 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does this typically occur on cold, wet mornings when the engine is cold?",
      {
        widget: "shaking122",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  shaking123 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a garage and ask the mechanic to check for a vacuum leak",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  shaking1222 = (option, event) => {
    const message = this.createChatBotMessage(
      "Moisture in the distributor cap is likely causing a misfire",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  shaking13 = (option, event) => {
    const message = this.createChatBotMessage(
      "What is vibrating or shaking?",
      {
        widget: "shaking13",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  shaking131 = (option, event) => {
    const message = this.createChatBotMessage(
      "When braking, is there also vibration coming mainly from the front end?",
      {
        widget: "shaking131",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  shaking132 = (option, event) => {
    const message = this.createChatBotMessage(
      "There is an alignment issue with the front brake pads and discs. Take this vehicle to a reputable garage and ask the mechanic to check the front wheel bearings for wear or looseness and the front rotors for 'warp.'",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  shaking133 = (option, event) => {
    const message = this.createChatBotMessage(
      "There is an alignment issue with the front brake pads and discs. Take this vehicle to a reputable garage and ask the mechanic to check the front wheel bearings for wear or looseness and the front rotors for 'warp.'",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  shaking1311 = (option, event) => {
    const message = this.createChatBotMessage(
      "There is an alignment issue with the front brake pads and discs. Take this vehicle to a reputable garage and ask the mechanic to check the front wheel bearings for wear or looseness and the front rotors for 'warp.'",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  shaking1312 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does the brake pedal vibrate only during very heavy braking?",
      {
        widget: "shaking1312",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  shaking1313 = (option, event) => {
    const message = this.createChatBotMessage(
      "There is an alignment issue with the front brake pads and discs. Take this vehicle to a reputable garage and ask the mechanic to check the front wheel bearings for wear or looseness and the front rotors for 'warp.'",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  shaking13122 = (option, event) => {
    const message = this.createChatBotMessage(
      "There is nothing wrong. This is the anti-lock braking system pulsing the brakes. It is completely normal",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  shaking14 = (option, event) => {
    const message = this.createChatBotMessage(
      "Where is this vibration coming from?",
      {
        widget: "shaking14",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  shaking141 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have all four wheels balanced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  shaking142 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have the front wheels balanced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  shaking143 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have the rear wheels balanced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ----------- Vehicle 'rides' uncomfortably --------- //

  ridesUncomfortably11 = (option, event) => {
    const message = this.createChatBotMessage(
      "How would you best describe the vehicle ride?",
      {
        widget: "ridesUncomfortably11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  ridesUncomfortably12 = (option, event) => {
    const message = this.createChatBotMessage(
      "The front shocks or front strut cartridges are worn or faulty. Have them inspected and replaced if need be",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  ridesUncomfortably111 = (option, event) => {
    const message = this.createChatBotMessage(
      "Are your tires overinflated?",
      {
        widget: "ridesUncomfortably111",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  ridesUncomfortably112 = (option, event) => {
    const message = this.createChatBotMessage(
      "The front shocks or front strut cartridges are worn or faulty. Have them inspected and replaced if need be",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  ridesUncomfortably113 = (option, event) => {
    const message = this.createChatBotMessage(
      "The front shocks or front strut cartridges are worn or faulty. Have them inspected and replaced if need be",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  ridesUncomfortably1111 = (option, event) => {
    const message = this.createChatBotMessage(
      "You'll need to take this vehicle to a reputable shop and ask the mechanic to inspect the shocks/strut cartridges. More specifically, ask him to determine if one or more is indeed seized",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  ridesUncomfortably1112 = (option, event) => {
    const message = this.createChatBotMessage(
      "The tires are overinflated. Let some air out of the tires. Use a tire pressure gauge to make sure the tires are at the correct pressure (see the tire sidewall or the tire manufacturer's specification)",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ----------- Vehicle is sluggish --------- //

  vehicleSluggish11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the transmission fluid level. Is it low?",
      {
        widget: "vehicleSluggish11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  vehicleSluggish111 = (option, event) => {
    const message = this.createChatBotMessage(
      "A wrong fluid level is affecting the hydraulics of the transmission. If the level is too high, you can drain some out (refer to the owner's manual for instructions). If the level is too low, add some fluid (again, refer to the owner's manual)",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  vehicleSluggish112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Did you notice the fluid to be milky-like and/or have bubbles? Is it brown or blackish in color?",
      {
        widget: "vehicleSluggish112",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  vehicleSluggish1122 = (option, event) => {
    const message = this.createChatBotMessage(
      "Change the transmission filter and fluid. Contaminated fluid is affecting the hydraulics of transmission",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  vehicleSluggish12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is the transmission downshifting?",
      {
        widget: "vehicleSluggish12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  vehicleSluggish121 = (option, event) => {
    const message = this.createChatBotMessage(
      "We're sorry, but based on the information provided we are unable to determine the exact cause of your issue. But don't give up hope; we have a panel of mechanics available to help you. Feel free to leverage their wealth of automotive knowledge - it's on us",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  vehicleSluggish122 = (option, event) => {
    const message = this.createChatBotMessage(
      "There is a problem with full throttle indicator mechanism. Have it checked by a mechanic",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  vehicleSluggish13 = (option, event) => {
    const message = this.createChatBotMessage(
      "During this sluggish initial forward movement, does the engine rev up?",
      {
        widget: "vehicleSluggish13",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  vehicleSluggish131 = (option, event) => {
    const message = this.createChatBotMessage(
      "The clutch associated with first gear is likely slipping. Unfortunately, this situation usually means that a tear down of the transmission is necessary in order to fix or replace the slipping clutch",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  vehicleSluggish132 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the transmission fluid level under the hood (look in your owner's manual if you are unsure as to where this is). There are 'high' and 'low' indicators inside. Is it too high or too low?",
      {
        widget: "vehicleSluggish132",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  vehicleSluggish1322 = (option, event) => {
    const message = this.createChatBotMessage(
      "A wrong fluid level is affecting the hydraulics of the transmission. If the level is too high, you can drain some out (refer to the owner's manual for instructions). If the level is too low, add some fluid (again, refer to the owner's manual)",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // -------------- Looks Like Options --------------- //

  // -------------- A tire wearing out --------------- //

  tireWearingOut11 = (option, event) => {
    const message = this.createChatBotMessage(
      "One of your tires is overinflated. Let some air out of whichever tire is overinflated. Refer to this vehicle's owner's manual or tire sidewall for the correct air pressure",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  tireWearingOut12 = (option, event) => {
    const message = this.createChatBotMessage(
      "One of your tires is underinflated. Add the precise amount of air to bring the tire(s) in question to an appropriate pressure (see the tire sidewall). Refer to this vehicle's owner's manual for the correct air pressure",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  tireWearingOut13 = (option, event) => {
    const message = this.createChatBotMessage(
      "What side of the tire is wearing abnormally?",
      {
        widget: "tireWearingOut13",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  tireWearingOut14 = (option, event) => {
    const message = this.createChatBotMessage(
      "There is a tire balancing issue. Have a mechanic balance the wheel in question and replace any overly worn tires",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  tireWearingOut131 = (option, event) => {
    const message = this.createChatBotMessage(
      "You'll need to have an alignment job done on this vehicle",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  tireWearingOut132 = (option, event) => {
    const message = this.createChatBotMessage(
      "You'll need to have an alignment job done on this vehicle",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // -------------- High engine temperature --------------- //

  highEngineTemperature11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is the coolant level low?",
      {
        widget: "highEngineTemperature11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  highEngineTemperature12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is the coolant level low?",
      {
        widget: "highEngineTemperature12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  highEngineTemperature13 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is this vehicle equipped with an electric fan?",
      {
        widget: "highEngineTemperature13",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  highEngineTemperature111 = (option, event) => {
    const message = this.createChatBotMessage(
      "Did one of the coolant hoses collapse?",
      {
        widget: "highEngineTemperature111",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  highEngineTemperature112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Did one of the coolant hoses collapse?",
      {
        widget: "highEngineTemperature112",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  highEngineTemperature113 = (option, event) => {
    const message = this.createChatBotMessage(
      "Lack of coolant is causing the engine to overheat. Top off the radiator with coolant",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  highEngineTemperature121 = (option, event) => {
    const message = this.createChatBotMessage(
      "Your coolant level may be low. Refer to your owner's manual if you are unsure how to check this. Alternatively, take the car to a professional mechanic",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  highEngineTemperature122 = (option, event) => {
    const message = this.createChatBotMessage(
      "The cooling system may be clogged and will have to be backflushed",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  highEngineTemperature123 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check your coolant level, as lack of coolant will cause the engine to overheat. Top off the radiator with coolant if need be",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  highEngineTemperature131 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the owner's manual or ask an expert. Once you know, rerun this diagnostic or, alternatively, visit a mechanic",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  highEngineTemperature132 = (option, event) => {
    const message = this.createChatBotMessage(
      "The issue is a slipping alternator belt or faulty fan clutch. Have this checked out by a professional mechanic",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  highEngineTemperature133 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a reputable mechanic and have them inspect the electric fan unit",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  highEngineTemperature1111 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a reputable repair garage and ask the mechanic to determine if the problem lies with the water pump or the thermostat. Have the necessary parts replaced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  highEngineTemperature1113 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the hose which is collapsing. Any auto parts store will carry a new hose",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  highEngineTemperature1121 = (option, event) => {
    const message = this.createChatBotMessage(
      "Visit a mechanic for further diagnosis",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  highEngineTemperature1123 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the hose which is collapsing. Any auto parts store will carry a new hose",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ---------------------- Poor gas mileage ----------------------- //

  poorGasMileage11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is there a lot of dirt on the air filter?",
      {
        widget: "poorGasMileage11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  poorGasMileage12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is there a lot of dirt on the air filter?",
      {
        widget: "poorGasMileage12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  poorGasMileage13 = (option, event) => {
    const message = this.createChatBotMessage(
      "Add air to the tires. Make sure you don't exceed the pressure level as specified in the vehicle's owner's manual",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  poorGasMileage111 = (option, event) => {
    const message = this.createChatBotMessage(
      "A clogged PCV system or faulty oxygen system is likely causing poor gas mileage. Have a mechanic check these systems",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  poorGasMileage112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the air filter. If this doesn't solve the problem, please rerun this diagnostic for further analysis",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  poorGasMileage122 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the air filter. If this doesn't solve the problem, please rerun this diagnostic for further analysis",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ---------------------- Smoke ----------------------- //

  smoke11 = (option, event) => {
    const message = this.createChatBotMessage(
      "When and where do you see black smoke?",
      {
        widget: "smoke11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  smoke111 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is the air filter dirty?",
      {
        widget: "smoke111",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  smoke112 = (option, event) => {
    const message = this.createChatBotMessage(
      "The engine sensor could be bad",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  smoke1111 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the air filter",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  smoke1112 = (option, event) => {
    const message = this.createChatBotMessage(
      "If the air filter looks good, there might be an issue with a fuel injection sensor",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  smoke1113 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the air filter",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  smoke12 = (option, event) => {
    const message = this.createChatBotMessage(
      "What other symptoms are you noticing?",
      {
        widget: "smoke12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  smoke121 = (option, event) => {
    const message = this.createChatBotMessage(
      "The piston rings are probably bad",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  smoke122 = (option, event) => {
    const message = this.createChatBotMessage(
      "The valve stem seals may be bad",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  smoke13 = (option, event) => {
    const message = this.createChatBotMessage(
      "When and where do you see white smoke?",
      {
        widget: "smoke13",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  smoke131 = (option, event) => {
    const message = this.createChatBotMessage(
      "Do you notice white smoke even after the engine has warmed up?",
      {
        widget: "smoke131",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  smoke132 = (option, event) => {
    const message = this.createChatBotMessage(
      "The engine sensor could be bad",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  smoke133 = (option, event) => {
    const message = this.createChatBotMessage(
      "This is normal and just condensation steaming off",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  smoke1311 = (option, event) => {
    const message = this.createChatBotMessage(
      "This is normal and just condensation steaming off",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  smoke1312 = (option, event) => {
    const message = this.createChatBotMessage(
      "It is likely you have a blown head gasket. You'll need a new head gasket",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ---------------------- Steam ----------------------- //

  steam11 = (option, event) => {
    const message = this.createChatBotMessage(
      "This is normal and just condensation steaming off",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  steam12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the radiator cap when the engine is cold. If anything seems odd about the radiator cap, replace it and see if this corrects the boil over problem. Otherwise, have the entire cooling system backflushed in order to remove all of the old coolant. Refill with a 50/50 mixture of water and anti-freeze",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ---------------------- Warning light on ----------------------- //

  warningLightOn11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have a mechanic diagnose and fix the ABS system",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  warningLightOn12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Did the light stay on?",
      {
        widget: "warningLightOn12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  warningLightOn13 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the brake fluid level. Refer to your owner's manual if you are unsure how to do this. Is the level low? There should be a 'low' marking on the reservoir",
      {
        widget: "warningLightOn13",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  warningLightOn14 = (option, event) => {
    const message = this.createChatBotMessage(
      "This light generally indicates an engine or electrical problem has been detected. If the light has come on in your car it is best to take it to the dealer or a trusted independent mechanic shop and have the diagnostic trouble codes (DTCs) retrieved from the car's computer. These will indicate why the light has been activated.",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  warningLightOn15 = (option, event) => {
    const message = this.createChatBotMessage(
      "You will need to check the oil level (please refer to your owner's manual if you are unsure how to do this). Is the oil level low?",
      {
        widget: "warningLightOn15",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  warningLightOn121 = (option, event) => {
    const message = this.createChatBotMessage(
      "First off, have the battery tested to see if it's dying. If it tests out ok, take this vehicle to a mechanic and have the alternator and its belt inspected. Hopefully, all you'll need is to have the belt adjusted or replaced. If not, the alternator itself will have to be replaced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  warningLightOn122 = (option, event) => {
    const message = this.createChatBotMessage(
      "First off, have the battery tested to see if it's dying. If it tests out ok, you either need to replace the alternator belt or the alternator itself",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  warningLightOn131 = (option, event) => {
    const message = this.createChatBotMessage(
      "First off, make sure the parking brake is disengaged, as it may be triggering the light. If that doesn't work then you have a pressure imbalance in the system. In this situation you should have this vehicle towed to a reputable garage and serviced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  warningLightOn132 = (option, event) => {
    const message = this.createChatBotMessage(
      "You need to add brake fluid. Buy yourself a can of the brake fluid recommended by the manufacturer and carefully add just enough to top off the brake fluid reservoir. Check your owner's manual if you are unsure where this is located",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  warningLightOn151 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have the vehicle towed to the nearest reputable garage, and ask the mechanic to inspect both the oil pump and oil pressure sensor/wiring",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  warningLightOn152 = (option, event) => {
    const message = this.createChatBotMessage(
      "Add enough of the factory recommended oil type and viscosity so that your oil capacity is at -- not above, not below -- appropriate capacity",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ---------------------- Not Working Options ------------------------ //

  // ---------------------- Engine feels weak ----------------------- //

  engineFeelsWeak11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does the engine run roughly, especially when idling?",
      {
        widget: "engineFeelsWeak11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  engineFeelsWeak12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a garage and have the mechanic verify that the catalytic converter is indeed clogged",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineFeelsWeak112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the spark plugs and spark plug wires",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ---------------------- I can shift, but the vehicle doesn't move ----------------------- //

  vehicleDoesNotMove11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Since this vehicle isn't drivable, you'll need to have it towed to a garage. Ask the mechanic to check both the fluid pump and gear selector linkage. If he can't find the culprit, don't be surprised if he tells you the vehicle needs a new transmission. This isn't unreasonable since, after all, none of the gears work",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  vehicleDoesNotMove12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Add the appropriate level of transmission fluid",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ---------------------- I turn off the car, but the engine keeps running ----------------------- //

  engineKeepsRunning11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does this only happen when the engine is hot?",
      {
        widget: "engineKeepsRunning11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  engineKeepsRunning12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does the engine idle at high rpm?",
      {
        widget: "engineKeepsRunning12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  engineKeepsRunning111 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have you been filling your gas tank with low octane (i.e. regular) gas?",
      {
        widget: "engineKeepsRunning111",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  engineKeepsRunning1112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Extreme internal engine heat is causing run on",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineKeepsRunning112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Low quality fuel is causing engine run on",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineKeepsRunning121 = (option, event) => {
    const message = this.createChatBotMessage(
      "The fuel injectors may be leaking",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineKeepsRunning122 = (option, event) => {
    const message = this.createChatBotMessage(
      "The engine idle speed must be lowered. This is a very technical process and a professional mechanic is recommended",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ----------------------  Lack of hot/cold air ----------------------- //

  lackOfAir11 = (option, event) => {
    const message = this.createChatBotMessage(
      "What best describes your issue?",
      {
        widget: "lackOfAir11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  lackOfAir111 = (option, event) => {
    const message = this.createChatBotMessage(
      "There is a problem with the blower or a physical blockage of the ducts. Check the fresh air intake port for debris which may be blocking it. If this does not fix the problem, you'll need to take this vehicle to a mechanic who has some expertise in  A/C and heating systems",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  lackOfAir112 = (option, event) => {
    const message = this.createChatBotMessage(
      "The problem is likely a blown fuse or failed blower motor. Check the fuse and change it if need be. If this does not fix the problem, take the vehicle to a specialist",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  lackOfAir12 = (option, event) => {
    const message = this.createChatBotMessage(
      "When does your A/C performance decrease?",
      {
        widget: "lackOfAir12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  lackOfAir121 = (option, event) => {
    const message = this.createChatBotMessage(
      "How would you describe the change in performance?",
      {
        widget: "lackOfAir121",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  lackOfAir122 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does the A/C sometimes blow warm air, but only when the engine is hot?",
      {
        widget: "lackOfAir122",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  lackOfAir1211 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have the condenser checked for dirt and debris and cleaned if necessary. This may fix the problem. If not, you'll need to take this vehicle to a garage and ask the mechanic to 'charge' the A/C system (i.e. add refrigerant). Make sure to check for leaks",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  lackOfAir1212 = (option, event) => {
    const message = this.createChatBotMessage(
      "There is a major refrigerant leak or A/C electrical problem. You can open the hood and look for obvious leaks, but it is best to have an expert check the system",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  lackOfAir1221 = (option, event) => {
    const message = this.createChatBotMessage(
      "It is likely that either the A/C expansion valve is freezing up, that your have a failing A/C compressor or an intermittent electrical issue. Have an expert take a look at it",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  lackOfAir1222 = (option, event) => {
    const message = this.createChatBotMessage(
      "Actually, nothing is wrong. The compressor is automatically disengaging to keep the engine from overheating. This is normal behavior",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  lackOfAir13 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is your heater not blowing warm air even after the engine heats up?",
      {
        widget: "lackOfAir13",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  lackOfAir131 = (option, event) => {
    const message = this.createChatBotMessage(
      "We're sorry, but based on the information provided we are unable to determine the exact cause of your issue. But don't give up hope; we have a panel of mechanics available to help you. Feel free to leverage their wealth of automotive knowledge - it's on us",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  lackOfAir132 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does this vehicle have an automatic temperature control system?",
      {
        widget: "lackOfAir132",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  lackOfAir1321 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a shop specializing in heater repair and have the mechanic inspect both the heater control valve and the device that activates the valve, and have the necessary repairs done",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ----------------------  My car won't start ----------------------- //

  carWillNotStart11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Are the dash lights out or extremely dim?",
      {
        widget: "carWillNotStart11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  carWillNotStart111 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the starter and solenoid",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  carWillNotStart112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take a look at the battery terminals. Is there a noticeable amount of corrosion buildup on the terminals?",
      {
        widget: "carWillNotStart112",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  carWillNotStart1122 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have the battery tested. Chances are it is dead and will need to be replaced. This could also signify an issue with the starter",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  carWillNotStart12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is the vehicle out of gas?",
      {
        widget: "carWillNotStart12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  carWillNotStart121 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does this happen mostly in wet, damp conditions?",
      {
        widget: "carWillNotStart121",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  carWillNotStart122 = (option, event) => {
    const message = this.createChatBotMessage(
      "Fill the gas tank and try to start the car again",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  carWillNotStart1211 = (option, event) => {
    const message = this.createChatBotMessage(
      "Fill the gas tank and try to start the car ",
      {
        widget: "carWillNotStart1211",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  carWillNotStart1212 = (option, event) => {
    const message = this.createChatBotMessage(
      "It is likely moisture has worked its way into the distributor cap. You may want to replace it with a new factory item",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  carWillNotStart12111 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the dirty air filter with a new one",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  carWillNotStart13 = (option, event) => {
    const message = this.createChatBotMessage(
      "What kind of noise does it make?",
      {
        widget: "carWillNotStart13",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  carWillNotStart131 = (option, event) => {
    const message = this.createChatBotMessage(
      "It is likely you have a bad starter drive or a worn ring gear. Have it towed to a shop and replace the starter or ring gear as needed",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  carWillNotStart132 = (option, event) => {
    const message = this.createChatBotMessage(
      "There is a problem with your starter. Have the starter wiring checked and replace the starter if necessary",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  carWillNotStart133 = (option, event) => {
    const message = this.createChatBotMessage(
      "Are the dash lights out or extremely dim?",
      {
        widget: "carWillNotStart133",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  carWillNotStart1331 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take a look at the battery terminals. Is there a noticeable amount of corrosion buildup on the terminals?",
      {
        widget: "carWillNotStart1331",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  carWillNotStart1332 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the starter and solenoid",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  carWillNotStart13312 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have a mechanic clean the battery terminals. If this doesn't help the issue, have your battery tested. It may be dead",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ----------------------  Poor gas mileage ----------------------- //

  poorGasMileageNotWorking11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is there a lot of dirt on the air filter?",
      {
        widget: "poorGasMileageNotWorking11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  poorGasMileageNotWorking111 = (option, event) => {
    const message = this.createChatBotMessage(
      "A clogged PCV system or faulty oxygen system is likely causing poor gas mileage. Have a mechanic check these systems",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  poorGasMileageNotWorking112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the air filter. If this doesn't solve the problem, please rerun this diagnostic for further analysis",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  poorGasMileageNotWorking122 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the air filter. If this doesn't solve the problem, please rerun this diagnostic for further analysis",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  poorGasMileageNotWorking12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is there a lot of dirt on the air filter?",
      {
        widget: "poorGasMileageNotWorking12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  poorGasMileageNotWorking13 = (option, event) => {
    const message = this.createChatBotMessage(
      "Add air to the tires. Make sure you don't exceed the pressure level as specified in the vehicle's owner's manual",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ----------------------  The engine stalls ----------------------- //

  engineStalls11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does the engine stall only when it is abnormally hot?",
      {
        widget: "engineStalls11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  engineStalls111 = (option, event) => {
    const message = this.createChatBotMessage(
      "You'll need to have a mechanic verify that the fuel pressure regulator is faulty. If this is indeed the case, have it replaced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineStalls112 = (option, event) => {
    const message = this.createChatBotMessage(
      "When vapor lock strikes, the only thing you can do is wait for the engine to cool down. The real question is why the engine is getting so hot to begin with? Have a mechanic check your cooling system",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineStalls12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Over time, has this problem gradually become more frequent?",
      {
        widget: "engineStalls12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  engineStalls121 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does this typically occur on cold, wet mornings when the engine is cold?",
      {
        widget: "engineStalls121",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  engineStalls122 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a garage and ask the mechanic to check for a vacuum leak. In particular, have the mechanic check both the EGR and PCV valves since these are items that are often found to be the source of vacuum leaks",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineStalls1212 = (option, event) => {
    const message = this.createChatBotMessage(
      "Moisture in the distributor cap is causing a misfire",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineStalls13 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does the engine only stall when it is cold?",
      {
        widget: "engineStalls13",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  engineStalls131 = (option, event) => {
    const message = this.createChatBotMessage(
      "Will the engine stay running if you lightly step on the gas pedal?",
      {
        widget: "engineStalls131",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  engineStalls132 = (option, event) => {
    const message = this.createChatBotMessage(
      "You'll need to have a mechanic verify that the cold start valve is faulty. If this is indeed the case, have it replaced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineStalls1311 = (option, event) => {
    const message = this.createChatBotMessage(
      "You'll need to have a mechanic verify that the idle air bypass valve is faulty. If this is indeed the case, have it replaced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // ---------------------- Smells Like Options --------------------- //

  rottenEggSmell11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have the fuel injection sensor checked by a mechanic",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  rottenEggSmell12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace the air filter",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // -------------- Sounds Like Options -------------- //

  // -------------- A clicking sound -------------- //

  clickingSound11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take a look at the battery terminals. Is there a noticeable amount of corrosion buildup on the terminals?",
      {
        widget: "clickingSound11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  clickingSound12 = (option, event) => {
    const message = this.createChatBotMessage(
      "The solenoid needs to be replaced. We recommend having a professional mechanic do the work",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  clickingSound112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have a mechanic clean the battery terminals. If this doesn't help the issue, have your battery tested. It may be dead",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // -------------- Brakes make noise -------------- //

  brakesMakeNoise11 = (option, event) => {
    const message = this.createChatBotMessage(
      "This is likely due to loose anti-rattle springs or loose caliper bolts. Take this vehicle to a reputable garage and ask the mechanic to pull the tire where the rattling is coming from and check for any problems",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  brakesMakeNoise12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Your brake pads need to be replaced and your rotors may need replacement or resurfacing",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  brakesMakeNoise13 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a reputable repair shop and ask the mechanic to check the suspected brake unit. A loose or worn front suspension component may also be to blame",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // -------------- Clunking sound -------------- //

  clunkingSound11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the transmission fluid level. Is it low?",
      {
        widget: "clunkingSound11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  clunkingSound111 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a transmission specialist. It will be necessary for the mechanic to open up the transmission for this (there's just no way of knowing otherwise)",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  clunkingSound112 = (option, event) => {
    const message = this.createChatBotMessage(
      "A wrong fluid level is affecting the hydraulics of transmission. If the level is too high, you can simply drain some out (refer to the owner's manual for instructions). If the level is too low, add some fluid (again, refer to the owner's manual)",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  clunkingSound12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is this vehicle front-wheel drive?",
      {
        widget: "clunkingSound12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  clunkingSound121 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have a mechanic inspect the vehicle. If it is front-wheel drive, a faulty CV Joint is likely",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  clunkingSound122 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have a mechanic inspect the front end of this vehicle and make the necessary repairs. Take care of this problem soon since the clicking noise is a warning of something more serious to come",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  clunkingSound123 = (option, event) => {
    const message = this.createChatBotMessage(
      "A faulty CV Joint is likely causing the noise. Take this vehicle to a garage and ask the mechanic to find out exactly what is causing the clicking noise",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  clunkingSound13 = (option, event) => {
    const message = this.createChatBotMessage(
      "Is the sound coming from the front or rear of the car?",
      {
        widget: "clunkingSound13",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  clunkingSound131 = (option, event) => {
    const message = this.createChatBotMessage(
      "The front shocks or front strut cartridges are worn or faulty. Have them inspected and replaced if need be",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  clunkingSound132 = (option, event) => {
    const message = this.createChatBotMessage(
      "Either your front or rear shocks or strut cartridges are worn/faulty. Have them inspected and replaced if need be",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  clunkingSound133 = (option, event) => {
    const message = this.createChatBotMessage(
      "The rear shocks or rear strut cartridges are worn or faulty. Have them inspected and replaced if need be",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  clunkingSound14 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a garage and have the mechanic check the driveline joints (either CV-Joints or U-Joints, depending if this vehicle is front- or rear-wheel drive, respectively). Have this problem taken care of soon since the jarring effect will eventually take its toll on the transmission",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  clunkingSound15 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the transmission fluid level. Is it low?",
      {
        widget: "clunkingSound15",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  clunkingSound151 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a garage and have the mechanic check both the engine mounts and driveline joints. Have this problem taken care of soon since any jarring effect will eventually take its toll on the transmission",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  clunkingSound152 = (option, event) => {
    const message = this.createChatBotMessage(
      "A wrong fluid level is affecting the hydraulics of transmission. If the level is too high, you can simply drain some out (refer to the owner's manual for instructions). If the level is too low, add some fluid (again, refer to the owner's manual)",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // -------------- Pinging -------------- //

  pinging11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a garage and ask the mechanic to test the EGR valve. If the valve is indeed bad, have it replaced. Also, check the spark plugs for carbon deposits",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  pinging12 = (option, event) => {
    const message = this.createChatBotMessage(
      "In general, pre-ignition and thus power loss are just normal consequences of a very hot engine. Have a mechanic check your cooling system",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  pinging13 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have you been using regular grade gasoline?",
      {
        widget: "pinging13",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  pinging131 = (option, event) => {
    const message = this.createChatBotMessage(
      "There isn't too much you can do since this is just a normal consequence of driving at higher altitudes. However, you may want to try using a high octane fuel the next time you anticipate driving at high altitude",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  pinging132 = (option, event) => {
    const message = this.createChatBotMessage(
      "Use a higher octane gasoline from now on, or at least when you anticipate driving at altitude",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // -------------- Sputter and cough -------------- //

  sputterAndCough11 = (option, event) => {
    const message = this.createChatBotMessage(
      "It is likely something has gone wrong with the valves. You will need a valve job",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  sputterAndCough12 = (option, event) => {
    const message = this.createChatBotMessage(
      "You will need to either check your spark plugs or have a mechanic check them. Once removed, do the spark plugs look dirty?",
      {
        widget: "sputterAndCough12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  sputterAndCough121 = (option, event) => {
    const message = this.createChatBotMessage(
      "It is likely you have a problem with either the fuel injection system or a bad coil/spark plug wire. It is best to have this checked out by a mechanic",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  sputterAndCough122 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace all the spark plugs",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // -------------- Squealing noise -------------- //

  squealingNoise11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Check the tire pressure. Are the tire pressure readings unusually low or high?",
      {
        widget: "squealingNoise11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  squealingNoise12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does the pedal go close to the floor?",
      {
        widget: "squealingNoise12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  squealingNoise111 = (option, event) => {
    const message = this.createChatBotMessage(
      "Have an alignment job done on this vehicle",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  squealingNoise112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Add or release air from whichever tires aren't properly inflated. Hopefully this will eliminate the screeching",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  squealingNoise121 = (option, event) => {
    const message = this.createChatBotMessage(
      "The high frequency vibration of the brake pads is causing squeal. This is normal behavior for some cars",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  squealingNoise122 = (option, event) => {
    const message = this.createChatBotMessage(
      "This vehicle needs new brake pads. The noise you are hearing is the brake pad wear sensor. It is designed to let you know your pads are wearing thin",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  squealingNoise13 = (option, event) => {
    const message = this.createChatBotMessage(
      "This generally indicates either a worn drive belt or faulty alternator. Apply some silicone spray on the underside of the drive belt. This may provide you with some temporary relief of this squealing noise. Otherwise, you'll need to take this vehicle to a repair garage and have a mechanic make the necessary repairs",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // -------------- The engine backfires -------------- //

  engineBackfires11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does happen only while slowing down?",
      {
        widget: "engineBackfires11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  engineBackfires12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does this starting problem only happen in wet conditions?",
      {
        widget: "engineBackfires12",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  engineBackfires111 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a garage and have the mechanic check the valves and timing. The valves could be burned or simply out of adjustment. Timing problems are generally caused by a slipping timing belt or chain",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineBackfires112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Take this vehicle to a garage and ask the mechanic to check the air injection system, in particular its diverter valve",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineBackfires121 = (option, event) => {
    const message = this.createChatBotMessage(
      "It is likely there is a problem with the fuel injection system. Have a professional mechanic look at the car",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineBackfires122 = (option, event) => {
    const message = this.createChatBotMessage(
      "There is probably moisture in the distributor cap. If there is, have it replaced",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // -------------- The engine is running roughly -------------- //

  engineRunningRoughly11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Replace both the spark plugs and wires",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  engineRunningRoughly12 = (option, event) => {
    const message = this.createChatBotMessage(
      "Chances are the engine is misfiring in one or more cylinders",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  // -------------- Ticking / tapping -------------- //

  tickingAndTapping11 = (option, event) => {
    const message = this.createChatBotMessage(
      "Does this engine have a low oil level?",
      {
        widget: "tickingAndTapping11",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
  };

  tickingAndTapping12 = (option, event) => {
    const message = this.createChatBotMessage(
      "In order to boost engine lubrication, the oil pressure has to be increased, and the oil pressure is probably low due to either a clogged oil pan screen or a bad oil pump. Ask a mechanic to determine the exact cause of this engine's low oil pressure",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };

  tickingAndTapping112 = (option, event) => {
    const message = this.createChatBotMessage(
      "Add enough of the factory recommended oil type and viscosity so that your oil capacity is at -- not above, not below -- appropriate capacity",
      {
        widget: "",
      },
    );
    this.userMessage(option, event);
    this.addMessageToState(message);
    this.reStartChart();
  };


  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
