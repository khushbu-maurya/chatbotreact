import React from "react";
import "./Options.css";
import { getData } from "../../chatbot/config";

const Options = (props) => {
  console.log(props, 'props')
  const options = {
    // ---------------- Initial Options ---------------- //

    initialOptions: [
      {
        text: "Feels Like",
        handler: props.actionProvider.feelsLikeOptions,
        id: 1,
      },
      {
        text: "Looks Like",
        handler: props.actionProvider.looksLikeOptions,
        id: 2,
      },
      {
        text: "Not Working",
        handler: props.actionProvider.notWorkingOptions,
        id: 3,
      },
      {
        text: "Smells Like",
        handler: props.actionProvider.smellsLikeOptions,
        id: 4,
      },
      {
        text: "Sounds Like",
        handler: props.actionProvider.soundsLikeOptions,
        id: 5,
      },
    ],

    feelsLikeOptions: [
      {
        text: "Abnormal braking",
        handler: props.actionProvider.handleAbnormalBraking,
        id: 1,
      },
      {
        text: "Abnormal steering",
        handler: props.actionProvider.handleAbnormalSteering,
        id: 2,
      },
      {
        text: "Awkward shifting",
        handler: props.actionProvider.handleAwkwardShifting,
        id: 3,
      },
      {
        text: "Shaking",
        handler: props.actionProvider.handleShaking,
        id: 4,
      },
      {
        text: "Vehicle 'rides' uncomfortably",
        handler: props.actionProvider.handleRidesUncomfortably,
        id: 5,
      },
      {
        text: "Vehicle is sluggish",
        handler: props.actionProvider.handleVehicleSluggish,
        id: 6,
      },
    ],

    looksLikeOptions: [
      {
        text: "A tire wearing out",
        handler: props.actionProvider.handleTireWearingOut,
        id: '1',
      },
      {
        text: "High engine temperature",
        handler: props.actionProvider.handleEngineTemperature,
        id: 2,
      },
      {
        text: "Poor gas mileage",
        handler: props.actionProvider.handlePoorGasMileageLooksLike,
        id: 3,
      },
      {
        text: "Smoke",
        handler: props.actionProvider.handleSmoke,
        id: 4,
      },
      {
        text: "Steam",
        handler: props.actionProvider.handleSteam,
        id: 5,
      },
      {
        text: "Warning light on",
        handler: props.actionProvider.handleWarningLightOn,
        id: 6,
      },
    ],

    notWorkingOptions: [
      {
        text: "Engine feels weak",
        handler: props.actionProvider.handleEngineFeelsWeak,
        id: 1,
      },
      {
        text: "I can shift, but the vehicle doesn't move",
        handler: props.actionProvider.handleVehicleDoesNotMove,
        id: 2,
      },
      {
        text: "I turn off the car, but the engine keeps running",
        handler: props.actionProvider.handleEngineKeepsRunning,
        id: 3,
      },
      {
        text: "Lack of hot/cold air",
        handler: props.actionProvider.handleLackOfAir,
        id: 4,
      },
      {
        text: "My car won't start",
        handler: props.actionProvider.handleCarWillNotStart,
        id: 5,
      },
      {
        text: "Poor gas mileage",
        handler: props.actionProvider.handlePoorGasMileageNotWorking,
        id: 6,
      },
      {
        text: "The engine stalls",
        handler: props.actionProvider.handleEngineStalls,
        id: 7,
      },
      {
        text: "The vehicle won't shift into park",
        handler: props.actionProvider.handlevehicleVehicleWillNotPark,
        id: 8,
      },
    ],

    smellsLikeOptions: [
      {
        text: "Muggy smell from A/C vents, along with poor cooling",
        handler: props.actionProvider.handleMuggySmell,
        id: 1,
      },
      {
        text: "Rotten egg smell",
        handler: props.actionProvider.handleRottenEggSmell,
        id: 2,
      },
    ],
    soundsLikeOptions: [
      {
        text: "A clicking sound",
        handler: props.actionProvider.handleClickingSound,
        id: 1,
      },
      {
        text: "Brakes make noise",
        handler: props.actionProvider.handleBrakesMakeNoise,
        id: 2,
      },
      {
        text: "Clunking sound",
        handler: props.actionProvider.handleClunkingSound,
        id: 3,
      },
      {
        text: "Pinging",
        handler: props.actionProvider.handlePinging,
        id: 4,
      },
      {
        text: "Sputter and cough",
        handler: props.actionProvider.handleSputterAndCough,
        id: 5,
      },
      {
        text: "Squealing noise",
        handler: props.actionProvider.handleSquealingNoise,
        id: 6,
      },
      {
        text: "The engine backfires",
        handler: props.actionProvider.handleEngineBackfires,
        id: 7,
      },
      {
        text: "The engine is running roughly",
        handler: props.actionProvider.handleEngineRunningRoughly,
        id: 8,
      },
      {
        text: "Ticking / tapping",
        handler: props.actionProvider.handleTickingAndTapping,
        id: 9,
      },
    ],

    // ---------------------- Feels Like Options ------------------------ //

    // Abnormal Braking

    abnormalBrakingOptions: [
      {
        text: "My brake pedal travels much farther (closer to the floorboard) than it used to",
        handler: props.actionProvider.Mybrakepedaltravelsmuchfarther,
        id: 1,
      },
      {
        text: "My brakes will stop the car, but it takes a worrying amount of force to get that to happen",
        handler: props.actionProvider.abnormalBrakingOptions2,
        id: 2,
      },
      {
        text: "The brake pedal feels soft and mushy",
        handler: props.actionProvider.abnormalBrakingOptions3,
        id: 3,
      },
      {
        text: "When I apply light pressure to the brake pedal, the pedal travels straight to the floorboard",
        handler: props.actionProvider.abnormalBrakingOptions4,
        id: 4,
      },
      {
        text: "When I brake, one wheels locks up!",
        handler: props.actionProvider.abnormalBrakingOptions5,
        id: 5,
      },
      {
        text: "When I brake, the car pulls to one side",
        handler: props.actionProvider.abnormalBrakingOptions6,
        id: 6,
      },
      {
        text: "When I take my foot off the brake pedal, it feels like all four wheels are still trying to stop",
        handler: props.actionProvider.abnormalBrakingOptions7,
        id: 7,
      },
      {
        text: "When I take my foot off the brake pedal, it feels like one wheel is still braking",
        handler: props.actionProvider.abnormalBrakingOptions8,
        id: 8,
      },
    ],

    MybrakepedaltravelsmuchfartherOptions: [
      {
        text: "Yes",
        handler: props.actionProvider.Mybrakepedaltravelsmuchfartheryes,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.Mybrakepedaltravelsmuchfartherno,
        id: 2,
      },
    ],

    MybrakepedaltravelsmuchfartherOptionsYes: [
      {
        text: "It is likely the master cylinder push rod is not properly adjusted",
        handler: props.actionProvider.Mybrakepedaltravelsmuchfarther,
        id: 1,
      }
    ],

    MybrakepedaltravelsmuchfartherOptionsNo: [
      {
        text: "We're sorry, but based on the information provided we are unable to determine the exact cause of your issue. But don't give up hope; we have a panel of mechanics available to help you. Feel free to leverage their wealth of automotive knowledge - it's on us",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.Mybrakepedaltravelsmuchfartheryesoption,
        id: 2,
      }
    ],

    abnormalBrakingOptions2: [
      {
        text: "My brakes will stop the car, but it takes a worrying amount of force to get that to happen",
        handler: props.actionProvider.abnormalBrakingOptions2,
        id: 1,
      },
    ],

    abnormalBrakingOptions21: [
      {
        text: " This is most likely a problem with the power brake unit. Have it replaced",
        handler: props.actionProvider.abnormalBrakingOptions21,
        id: 1,
      },

    ],

    abnormalBrakingOptions3: [
      {
        text: "This is often caused by air bubbles forming in the brake lines. If the brakes were recently worked on, maybe the mechanic did not fully bleed the brake system. Or worse, there could be a leak somewhere in the brake system which is consequently allowing air to enter. In either case, take the vehicle to a reputable shop and ask the mechanic to check for leaks and to bleed the system",
        handler: props.actionProvider.abnormalBrakingOptions3,
        id: 1,
      },
    ],

    abnormalBrakingOptions4: [
      {
        text: "It is likely there is an internal leak in the master cylinder. This vehicle will need either a new or rebuilt master cylinder",
        handler: props.actionProvider.abnormalBrakingOptions4,
        id: 1,
      },
    ],

    abnormalBrakingOptions5: [
      {
        text: "It is likely that the brake linings are contaminated. Take this vehicle to a garage and ask the mechanic to check the brake linings for contamination",
        handler: props.actionProvider.abnormalBrakingOptions5,
        id: 1,
      },
    ],

    abnormalBrakingOptions6: [
      {
        text: "When I brake, the car pulls to one side",
        handler: props.actionProvider.abnormalBrakingOptions6,
        id: 1,
      },
    ],

    abnormalBrakingOptions61: [
      {
        text: "Are the front tires unevenly inflated?",
        handler: props.actionProvider.abnormalBrakingOptions61,
        id: 1,
      },
    ],

    abnormalBrakingOptions611: [
      {
        text: "yes",
        handler: props.actionProvider.abnormalBrakingOptions61,
        id: 1,
      },
      {
        text: "no",
        handler: props.actionProvider.abnormalBrakingOptions611,
        id: 1,
      },
    ],

    abnormalBrakingOptions6111: [
      {
        text: "Add air to the tire with lower air pressure (find the recommended pressure in your owner's manual or tire sidewall). The imbalance in tire pressure is causing pull",
        handler: props.actionProvider.abnormalBrakingOptions611,
        id: 1,
      }
    ],

    abnormalBrakingOptions6112: [
      {
        text: "To check for further problems, you will need to remove the front tires and examine the brake discs and pads. If you are not comfortable with this, take the car to a mechanic. Are the brake discs or pads on one side thicker than those of the other side?",
        handler: props.actionProvider.abnormalBrakingOptions6112,
        id: 1,
      }
    ],

    abnormalBrakingOptions61121: [
      {
        text: "yes",
        handler: props.actionProvider.abnormalBrakingOptions611211,
        id: 1,
      },
      {
        text: "It is likely that you have a front alignment issue. Have the alignment checked. If this is not the problem, then one of the front brake calipers is probably either faulty or leaking. Have a mechanic look at the car right away",
        handler: props.actionProvider.abnormalBrakingOptions611211,
        id: 2,
      }
    ],

    abnormalBrakingOptions611211: [
      {
        text: "Depending on what did not match up from side-to-side (either pads or rotors), the vehicle will need a new, matching set",
        handler: props.actionProvider.abnormalBrakingOptions6112,
        id: 1,
      }
    ],

    abnormalBrakingOptions7: [
      {
        text: "Is the brake pedal sticking when you step on it?",
        handler: props.actionProvider.abnormalBrakingOptions5,
        id: 1,
      },
    ],

    abnormalBrakingOptions71: [
      {
        text: "Yes",
        handler: props.actionProvider.abnormalBrakingOptions5,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.abnormalBrakingOptions5,
        id: 1,
      },
    ],

    abnormalBrakingOptions711: [
      {
        text: "Incomplete retraction of the brake pedal is causing the brakes to drag. Correct whatever it is that is causing the brake pedal to bind (like bunched up floor carpet). If you can't fix it yourself, take this vehicle to a garage as soon as possible",
        handler: props.actionProvider.abnormalBrakingOptions5,
        id: 1,
      }
    ],

    abnormalBrakingOptions712: [
      {
        text: "Have a mechanic inspect this vehicle's master cylinder. A few items you may want check for are: the master cylinder push rod, a swollen primary piston cup and a blocked bypass port",
        handler: props.actionProvider.abnormalBrakingOptions5,
        id: 1,
      }
    ],
    abnormalBrakingOptions8: [
      {
        text: "Is this happening in the front of the car?",
        handler: props.actionProvider.abnormalBrakingOption8,
        id: 1,
      },
    ],

    abnormalBrakingOptions81: [
      {
        text: "Yes",
        handler: props.actionProvider.abnormalBrakingOptions811,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.abnormalBrakingOptions812,
        id: 2,
      },
    ],

    abnormalBrakingOptions811: [
      {
        text: "A front brake caliper or piston is seized. Take this vehicle to a reputable repair shop and ask the mechanic to inspect the front brake unit which doesn't seem to be fully releasing",
        id: 1,
      }
    ],

    abnormalBrakingOptions812: [
      {
        text: "A rear brake caliper or piston is seized. Take this vehicle to a reputable repair shop and ask the mechanic to inspect the rear brake unit which doesn't seem to be fully releasing",
        id: 1,
      }
    ],

    // ----------- Abnormal Steering --------- //

    abnormalSteering1: [
      {
        text: "Constantly, during normal driving",
        handler: props.actionProvider.abnormalSteering11,
        id: 1,
      },
      {
        text: "Only at certain speeds",
        handler: props.actionProvider.abnormalSteering12,
        id: 2,
      },
      {
        text: "Seemingly at random",
        handler: props.actionProvider.abnormalSteering3,
        id: 3,
      },
      {
        text: "The vehicle pulls slightly to the left or right",
        handler: props.actionProvider.abnormalSteering4,
        id: 4,
      },
      {
        text: "When exiting a turn",
        handler: props.actionProvider.abnormalSteering5,
        id: 5,
      },
      {
        text: "When the engine is cold",
        handler: props.actionProvider.abnormalSteering6,
        id: 6,
      }
    ],

    abnormalSteering11: [
      {
        text: "Yes",
        handler: props.actionProvider.abnormalSteering111,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.abnormalSteering112,
        id: 2,
      },
    ],
    abnormalSteering111: [
      {
        text: "Let some air out of each tire. Refer to this vehicle's owner's manual for the correct air pressure. Doing this should improve the steering problem",
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.abnormalSteering1122,
        id: 2,
      },
    ],

    abnormalSteering12: [
      {
        text: 'Only at certain speeds',
        handler: props.actionProvider.abnormalSteering12,
        id: 1,
      }
    ],

    abnormalSteering121: [
      {
        text: "Yes",
        handler: props.actionProvider.abnormalSteering121,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.abnormalSteering122,
        id: 2,
      },
    ],

    abnormalSteering4: [
      {
        text: "Yes",
        handler: props.actionProvider.abnormalSteering41,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.abnormalSteering42,
        id: 2,
      },
    ],

    abnormalSteering5: [
      {
        text: "Yes",
        handler: props.actionProvider.abnormalSteering51,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.abnormalSteering52,
        id: 2,
      },
    ],

    // ----------- Awkward shifting --------- //

    awkwardShifting1: [
      {
        text: "I have one gear that's giving me trouble, but the rest seem fine",
        handler: props.actionProvider.awkwardShifting11,
        id: 1,
      },
      {
        text: "It is holding gears longer than normal and takes too long to shift",
        handler: props.actionProvider.awkwardShifting12,
        id: 2,
      },
      {
        text: "It shifts too early",
        handler: props.actionProvider.awkwardShifting13,
        id: 3,
      },
      {
        text: "When accelerating, the engine sometimes revs wildly before upshifting",
        handler: props.actionProvider.awkwardShifting14,
        id: 4,
      },
      {
        text: "When accelerating, the transmission seems to shift randomly",
        handler: props.actionProvider.awkwardShifting15,
        id: 5,
      },
    ],

    awkwardShifting12: [
      {
        text: "Yes",
        handler: props.actionProvider.awkwardShifting121,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.awkwardShifting122,
        id: 2,
      },
    ],

    awkwardShifting122: [
      {
        text: "A faulty electronic sensor is likely, or there may be an issue with the throttle valve linkage or governor. Take this vehicle to a transmission specialist and have them run some diagnostic tests",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.awkwardShifting1222,
        id: 2,
      },
    ],

    awkwardShifting13: [
      {
        text: "Yes",
        handler: props.actionProvider.awkwardShifting131,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.awkwardShifting132,
        id: 2,
      },
    ],

    awkwardShifting132: [
      {
        text: "I don't know",
        handler: props.actionProvider.awkwardShifting1321,
        id: 1,
      },
      {
        text: "There is either a problem with the throttle valve linkage or a faulty governor. Get the valve linkage adjusted and investigate the governor if issues persist",
        id: 2,
      },
      {
        text: "Yes",
        handler: props.actionProvider.awkwardShifting1323,
        id: 3,
      },
    ],

    awkwardShifting14: [
      {
        text: "Yes",
        handler: props.actionProvider.awkwardShifting141,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.awkwardShifting142,
        id: 2,
      },
    ],

    awkwardShifting142: [
      {
        text: "The first thing to do is to have the bands adjusted (if this vehicle's transmission has bands and further, if they are the adjustable type). This procedure is fairly inexpensive and it may correct the problem. Otherwise, take this vehicle to a transmission repair specialist and have them determine if the fluid pump is the culprit",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.awkwardShifting1422,
        id: 2,
      },
    ],

    awkwardShifting15: [
      {
        text: "Yes",
        handler: props.actionProvider.awkwardShifting151,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.awkwardShifting152,
        id: 2,
      },
    ],

    awkwardShifting152: [
      {
        text: "Chances are there is either a sticking pressure valve or a leaking vacuum hose. Replace the vacuum hose (if the transmission has one) and have a mechanic run some diagnostics if the issue persists",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.awkwardShifting1522,
        id: 2,
      },
    ],

    // ----------- Shaking --------- //

    shaking1: [
      {
        text: "During idle",
        handler: props.actionProvider.shaking11,
        id: 1,
      },
      {
        text: "When accelerating",
        handler: props.actionProvider.shaking12,
        id: 2,
      },
      {
        text: "While braking",
        handler: props.actionProvider.shaking13,
        id: 3,
      },
      {
        text: "While driving at certain speeds",
        handler: props.actionProvider.shaking14,
        id: 4,
      },
    ],

    shaking12: [
      {
        text: "I don't know",
        handler: props.actionProvider.shaking121,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.shaking122,
        id: 2,
      },
      {
        text: "Yes",
        handler: props.actionProvider.shaking123,
        id: 3,
      },
    ],

    shaking122: [
      {
        text: "Take this vehicle to a garage and have the mechanic check the throttle position sensor",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.shaking1222,
        id: 1,
      },
    ],

    shaking13: [
      {
        text: "The brake pedal",
        handler: props.actionProvider.shaking131,
        id: 1,
      },
      {
        text: "The steering wheel shakes",
        handler: props.actionProvider.shaking132,
        id: 2,
      },
      {
        text: "The whole car shakes",
        handler: props.actionProvider.shaking133,
        id: 3,
      },
    ],

    shaking131: [
      {
        text: "I don't know",
        handler: props.actionProvider.shaking1311,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.shaking1312,
        id: 2,
      },
      {
        text: "Yes",
        handler: props.actionProvider.shaking1313,
        id: 3,
      },
    ],

    shaking1312: [
      {
        text: "There is an alignment issue between the rear brake pads and discs. Take this vehicle to a reputable garage and ask the mechanic to first check the rear wheel bearings for wear or looseness",
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.shaking13122,
        id: 2,
      },
    ],

    shaking14: [
      {
        text: "I am unsure where it is coming from",
        handler: props.actionProvider.shaking141,
        id: 1,
      },
      {
        text: "The front of the car",
        handler: props.actionProvider.shaking142,
        id: 2,
      },
      {
        text: "The rear of the car",
        handler: props.actionProvider.shaking143,
        id: 3,
      },
    ],

    // ----------- Vehicle 'rides' uncomfortably --------- //

    ridesUncomfortably1: [
      {
        text: "Always",
        handler: props.actionProvider.vehicleSluggish11,
        id: 1,
      },
      {
        text: "The front of the vehicle dips when braking",
        handler: props.actionProvider.vehicleSluggish12,
        id: 2,
      },
      {
        text: "The front of the vehicle dips when braking",
        handler: props.actionProvider.vehicleSluggish13,
        id: 2,
      },
    ],

    ridesUncomfortably11: [
      {
        text: "Excessively harsh or stiff",
        handler: props.actionProvider.ridesUncomfortably111,
        id: 1,
      },
      {
        text: "Neither of these",
        handler: props.actionProvider.ridesUncomfortably112,
        id: 2,
      },
      {
        text: "Squishy or bouncy",
        handler: props.actionProvider.ridesUncomfortably113,
        id: 3,
      },
    ],

    ridesUncomfortably111: [
      {
        text: "Yes",
        handler: props.actionProvider.ridesUncomfortably1111,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.ridesUncomfortably1112,
        id: 2,
      },
    ],

    // ----------- Vehicle is sluggish --------- //

    vehicleSluggish1: [
      {
        text: "After selecting 'Reverse', there's an annoying delay before the vehicle will actually start moving backwards",
        handler: props.actionProvider.vehicleSluggish11,
        id: 1,
      },
      {
        text: "When I need passing power and press the accelerator to the floor",
        handler: props.actionProvider.vehicleSluggish12,
        id: 2,
      },
      {
        text: "When I take off from a dead stop",
        handler: props.actionProvider.vehicleSluggish13,
        id: 3,
      },
    ],

    vehicleSluggish11: [
      {
        text: "Yes",
        handler: props.actionProvider.vehicleSluggish111,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.vehicleSluggish112,
        id: 2,
      },
    ],

    vehicleSluggish112: [
      {
        text: "Something is causing poor fluid pressure buildup. Have the transmission fluid and filter changed",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.vehicleSluggish1122,
        id: 2,
      },
    ],

    vehicleSluggish12: [
      {
        text: "Yes",
        handler: props.actionProvider.vehicleSluggish121,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.vehicleSluggish122,
        id: 2,
      },
    ],

    vehicleSluggish13: [
      {
        text: "Yes",
        handler: props.actionProvider.vehicleSluggish131,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.vehicleSluggish132,
        id: 2,
      },
    ],

    vehicleSluggish132: [
      {
        text: "If the fluid level looks good, chances are there is something wrong with the fluid itself. Is the fluid milky or black? Does it have bubbles? If so, have the transmission fluid and filter changed",
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.vehicleSluggish1322,
        id: 2,
      },
    ],

    // ---------------------- Looks Like Options ------------------------ //

    // ---------------------- A tire wearing out ----------------------- //


    tireWearingOut1: [
      {
        text: "In the middle of the tire",
        handler: props.actionProvider.tireWearingOut11,
        id: 1,
      },
      {
        text: "On both edges of the tire",
        handler: props.actionProvider.tireWearingOut12,
        id: 2,
      },
      {
        text: "On one edge of the tire",
        handler: props.actionProvider.tireWearingOut13,
        id: 3,
      },
      {
        text: "There is no consistency to the tire wear",
        handler: props.actionProvider.tireWearingOut14,
        id: 4,
      },
    ],

    tireWearingOut13: [
      {
        text: "The inside of the tire",
        handler: props.actionProvider.tireWearingOut131,
        id: 1,
      },
      {
        text: "The outside of the tire",
        handler: props.actionProvider.tireWearingOut132,
        id: 2,
      },
    ],

    // ---------------------- High engine temperature ----------------------- //

    highEngineTemperature1: [
      {
        text: "Always, beginning shortly after the engine is started",
        handler: props.actionProvider.highEngineTemperature11,
        id: 1,
      },
      {
        text: "In hot weather",
        handler: props.actionProvider.highEngineTemperature12,
        id: 2,
      },
      {
        text: "In prolonged, slow traffic",
        handler: props.actionProvider.highEngineTemperature13,
        id: 3,
      },
    ],

    highEngineTemperature11: [
      {
        text: "I don't know",
        handler: props.actionProvider.highEngineTemperature111,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.highEngineTemperature112,
        id: 2,
      },
      {
        text: "Yes",
        handler: props.actionProvider.highEngineTemperature113,
        id: 3,
      },
    ],

    highEngineTemperature12: [
      {
        text: "I don't know",
        handler: props.actionProvider.highEngineTemperature121,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.highEngineTemperature122,
        id: 2,
      },
      {
        text: "Yes",
        handler: props.actionProvider.highEngineTemperature123,
        id: 3,
      },
    ],

    highEngineTemperature13: [
      {
        text: "I don't know",
        handler: props.actionProvider.highEngineTemperature131,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.highEngineTemperature132,
        id: 2,
      },
      {
        text: "Yes",
        handler: props.actionProvider.highEngineTemperature133,
        id: 3,
      },
    ],

    highEngineTemperature111: [
      {
        text: "No",
        handler: props.actionProvider.highEngineTemperature1111,
        id: 1,
      },
      {
        text: "Visit a mechanic for further diagnosis",
        id: 2,
      },
      {
        text: "Yes",
        handler: props.actionProvider.highEngineTemperature1113,
        id: 3,
      },
    ],

    highEngineTemperature112: [
      {
        text: "I don't know",
        handler: props.actionProvider.highEngineTemperature1121,
        id: 1,
      },
      {
        text: "Take this vehicle to a reputable repair garage and ask the mechanic to determine if the problem lies with the water pump or the thermostat. Have the necessary parts replaced",
        id: 2,
      },
      {
        text: "Yes",
        handler: props.actionProvider.highEngineTemperature1123,
        id: 3,
      },
    ],

    // ---------------------- Poor gas mileage ----------------------- //

    poorGasMileage1: [
      {
        text: "I don't know",
        handler: props.actionProvider.poorGasMileage11,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.poorGasMileage12,
        id: 2,
      },
      {
        text: "Yes",
        handler: props.actionProvider.poorGasMileage13,
        id: 3,
      },
    ],

    poorGasMileage11: [
      {
        text: "No",
        handler: props.actionProvider.poorGasMileage111,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.poorGasMileage112,
        id: 2,
      },
    ],

    poorGasMileage12: [
      {
        text: "A clogged PCV system or faulty oxygen system is likely causing poor gas mileage. Have a mechanic check these systems",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.poorGasMileage122,
        id: 2,
      },
    ],

    // ---------------------- Smoke ----------------------- //

    smoke1: [
      {
        text: "Black",
        handler: props.actionProvider.smoke11,
        id: 1,
      },
      {
        text: "Blue",
        handler: props.actionProvider.smoke12,
        id: 2,
      },
      {
        text: "White",
        handler: props.actionProvider.smoke13,
        id: 3,
      },
    ],

    smoke11: [
      {
        text: "It comes from the exhaust while driving",
        handler: props.actionProvider.smoke111,
        id: 1,
      },
      {
        text: "Right after starting the engine, then it stops",
        handler: props.actionProvider.smoke112,
        id: 2,
      },
    ],

    smoke111: [
      {
        text: "I don't know",
        handler: props.actionProvider.smoke1111,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.smoke1112,
        id: 2,
      },
      {
        text: "Yes",
        handler: props.actionProvider.smoke1113,
        id: 3,
      },
    ],

    smoke12: [
      {
        text: "The engine has less power when going up hills",
        handler: props.actionProvider.smoke121,
        id: 1,
      },
      {
        text: "There is blue smoke during acceleration",
        handler: props.actionProvider.smoke122,
        id: 2,
      },
    ],

    smoke13: [
      {
        text: "It comes from the exhaust while driving",
        handler: props.actionProvider.smoke131,
        id: 1,
      },
      {
        text: "Right after starting the engine, then it stops",
        handler: props.actionProvider.smoke132,
        id: 2,
      },
      {
        text: "When it's very cold outside",
        handler: props.actionProvider.smoke133,
        id: 3,
      },
    ],

    smoke131: [
      {
        text: "No, it goes away after it warms up",
        handler: props.actionProvider.smoke1311,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.smoke1312,
        id: 2,
      },
    ],

    // ---------------------- Steam ----------------------- //

    steam1: [
      {
        text: "From the exhaust",
        handler: props.actionProvider.steam11,
        id: 1,
      },
      {
        text: "From under the hood",
        handler: props.actionProvider.steam12,
        id: 2,
      },
    ],

    // ---------------------- Warning light on ----------------------- //

    warningLightOn1: [
      {
        text: "The anti-lock/ABS light",
        handler: props.actionProvider.warningLightOn11,
        id: 1,
      },
      {
        text: "The battery light",
        handler: props.actionProvider.warningLightOn12,
        id: 2,
      },
      {
        text: "The brake light",
        handler: props.actionProvider.warningLightOn13,
        id: 3,
      },
      {
        text: "The Check Engine Light",
        handler: props.actionProvider.warningLightOn14,
        id: 4,
      },
      {
        text: "The oil light",
        handler: props.actionProvider.warningLightOn15,
        id: 5,
      },
    ],

    warningLightOn12: [
      {
        text: "No, it flickered",
        handler: props.actionProvider.warningLightOn121,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.warningLightOn122,
        id: 2,
      },
    ],

    warningLightOn13: [
      {
        text: "No",
        handler: props.actionProvider.warningLightOn131,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.warningLightOn132,
        id: 2,
      },
    ],

    warningLightOn15: [
      {
        text: "No",
        handler: props.actionProvider.warningLightOn151,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.warningLightOn152,
        id: 2,
      },
    ],


    // ---------------------- Not Working Options ------------------------ //

    // ---------------------- Engine feels weak ----------------------- //

    engineFeelsWeak1: [
      {
        text: "No",
        handler: props.actionProvider.engineFeelsWeak11,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.engineFeelsWeak12,
        id: 2,
      },
    ],

    engineFeelsWeak11: [
      {
        text: "Have the fuel injectors cleaned",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.engineFeelsWeak112,
        id: 2,
      },
    ],

    // ---------------------- I can shift, but the vehicle doesn't move ----------------------- //

    vehicleDoesNotMove1: [
      {
        text: "No",
        handler: props.actionProvider.vehicleDoesNotMove11,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.vehicleDoesNotMove12,
        id: 2,
      },
    ],

    // ---------------------- I turn off the car, but the engine keeps running ----------------------- //

    engineKeepsRunning1: [
      {
        text: "During normal driving",
        handler: props.actionProvider.engineKeepsRunning11,
        id: 1,
      },
      {
        text: "While idling",
        handler: props.actionProvider.engineKeepsRunning12,
        id: 2,
      },
    ],

    engineKeepsRunning11: [
      {
        text: "No",
        handler: props.actionProvider.engineKeepsRunning111,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.engineKeepsRunning112,
        id: 2,
      },
    ],

    engineKeepsRunning111: [
      {
        text: "We're sorry, but based on the information provided we are unable to determine the exact cause of your issue. But don't give up hope; we have a panel of mechanics available to help you. Feel free to leverage their wealth of automotive knowledge - it's on us",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.engineKeepsRunning1112,
        id: 2,
      },
    ],

    engineKeepsRunning12: [
      {
        text: "No",
        handler: props.actionProvider.engineKeepsRunning121,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.engineKeepsRunning122,
        id: 2,
      },
    ],

    // ----------------------  Lack of hot/cold air ----------------------- //

    lackOfAir1: [
      {
        text: "No air is coming out of the vents",
        handler: props.actionProvider.lackOfAir11,
        id: 1,
      },
      {
        text: "The air conditioning system",
        handler: props.actionProvider.lackOfAir12,
        id: 2,
      },
      {
        text: "The heating system",
        handler: props.actionProvider.lackOfAir13,
        id: 3,
      },
    ],

    lackOfAir11: [
      {
        text: "My climate control vents barely create any airflow at all, even with the fan cranked",
        handler: props.actionProvider.lackOfAir111,
        id: 1,
      },
      {
        text: "My climate control vents don't offer any airflow, period, at any fan setting",
        handler: props.actionProvider.lackOfAir112,
        id: 2,
      },
    ],

    lackOfAir12: [
      {
        text: "Always",
        handler: props.actionProvider.lackOfAir121,
        id: 1,
      },
      {
        text: "Every once in a while",
        handler: props.actionProvider.lackOfAir122,
        id: 2,
      },
    ],

    lackOfAir121: [
      {
        text: "Slowly over time",
        handler: props.actionProvider.lackOfAir1211,
        id: 1,
      },
      {
        text: "Sudden",
        handler: props.actionProvider.lackOfAir1212,
        id: 2,
      },
    ],

    lackOfAir122: [
      {
        text: "No",
        handler: props.actionProvider.lackOfAir1221,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.lackOfAir1222,
        id: 2,
      },
    ],

    lackOfAir13: [
      {
        text: "No",
        handler: props.actionProvider.lackOfAir131,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.lackOfAir132,
        id: 2,
      },
    ],

    lackOfAir132: [
      {
        text: "No",
        handler: props.actionProvider.lackOfAir1321,
        id: 1,
      },
      {
        text: "Take this vehicle to a specialist for further analysis. It is likely you have a problem with the ambient air sensor or blend door, but we can't be sure",
        id: 2,
      },
    ],

    // ----------------------  My car won't start ----------------------- //

    carWillNotStart1: [
      {
        text: "It makes a clicking sound or no noise whatsoever",
        handler: props.actionProvider.carWillNotStart11,
        id: 1,
      },
      {
        text: "It starts and then dies right away",
        handler: props.actionProvider.carWillNotStart12,
        id: 2,
      },
      {
        text: "It tries to start and makes some noise while doing so",
        handler: props.actionProvider.carWillNotStart13,
        id: 3,
      },
    ],

    carWillNotStart11: [
      {
        text: "No",
        handler: props.actionProvider.carWillNotStart111,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.carWillNotStart112,
        id: 2,
      },
    ],

    carWillNotStart112: [
      {
        text: "Have a mechanic clean the battery terminals. If this doesn't help the issue, have your battery tested. It may be dead",
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.carWillNotStart1122,
        id: 2,
      },
    ],

    carWillNotStart12: [
      {
        text: "No",
        handler: props.actionProvider.carWillNotStart121,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.carWillNotStart122,
        id: 2,
      },
    ],

    carWillNotStart121: [
      {
        text: "Check the air filter. Does it appear to be clogged?",
        handler: props.actionProvider.carWillNotStart1211,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.carWillNotStart1212,
        id: 2,
      },
    ],

    carWillNotStart1211: [
      {
        text: "It is likely you have a damaged timing belt. Have it inspected and replaced if need be",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.carWillNotStart12111,
        id: 2,
      },
    ],

    carWillNotStart13: [
      {
        text: "A grinding sound",
        handler: props.actionProvider.carWillNotStart131,
        id: 1,
      },
      {
        text: "A spinning and whirring sound",
        handler: props.actionProvider.carWillNotStart132,
        id: 2,
      },
      {
        text: "Just a clicking sound",
        handler: props.actionProvider.carWillNotStart133,
        id: 3,
      },
    ],

    carWillNotStart133: [
      {
        text: "No",
        handler: props.actionProvider.carWillNotStart1331,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.carWillNotStart1332,
        id: 2,
      },
    ],

    carWillNotStart1331: [
      {
        text: "Have the battery tested. Chances are it is dead and will need to be replaced. This could also signify an issue with the starter",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.carWillNotStart13312,
        id: 2,
      },
    ],

    // ----------------------  Poor gas mileage ----------------------- //

    poorGasMileageNotWorking1: [
      {
        text: "I don't know",
        handler: props.actionProvider.poorGasMileageNotWorking11,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.poorGasMileageNotWorking12,
        id: 2,
      },
      {
        text: "Yes",
        handler: props.actionProvider.poorGasMileageNotWorking13,
        id: 3,
      },
    ],

    poorGasMileageNotWorking11: [
      {
        text: "No",
        handler: props.actionProvider.poorGasMileageNotWorking111,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.poorGasMileageNotWorking112,
        id: 2,
      },
    ],

    poorGasMileageNotWorking12: [
      {
        text: "A clogged PCV system or faulty oxygen system is likely causing poor gas mileage. Have a mechanic check these systems",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.poorGasMileageNotWorking122,
        id: 2,
      },
    ],

    // ----------------------  The engine stalls ----------------------- //

    engineStalls1: [
      {
        text: "During normal driving",
        handler: props.actionProvider.engineStalls11,
        id: 1,
      },
      {
        text: "While accelerating",
        handler: props.actionProvider.engineStalls12,
        id: 2,
      },
      {
        text: "While idling",
        handler: props.actionProvider.engineStalls13,
        id: 3,
      },
    ],

    engineStalls11: [
      {
        text: "No",
        handler: props.actionProvider.engineStalls111,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.engineStalls112,
        id: 2,
      },
    ],

    engineStalls12: [
      {
        text: "No",
        handler: props.actionProvider.engineStalls121,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.engineStalls122,
        id: 2,
      },
    ],

    engineStalls121: [
      {
        text: "Take this vehicle to a garage and have the mechanic check the throttle position sensor. Tell the mechanic exactly what you learned here. This is very important in that it shows you know something about the nature of this acceleration problem",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.engineStalls1212,
        id: 2,
      },
    ],

    engineStalls13: [
      {
        text: "No",
        handler: props.actionProvider.engineStalls131,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.engineStalls132,
        id: 2,
      },
    ],

    engineStalls131: [
      {
        text: "Yes",
        handler: props.actionProvider.engineStalls1311,
        id: 1,
      },
      {
        text: "You'll need to have a mechanic verify that the fuel pressure regulator is faulty. If this is indeed the case, have it replaced",
        id: 2,
      },
    ],

    // ------------------ Smells Like Options ----------------- //

    rottenEggSmell1: [
      {
        text: "No",
        handler: props.actionProvider.rottenEggSmell11,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.rottenEggSmell12,
        id: 2,
      },
    ],

    // --------------------- Sounds Like Options -------------------- //

    // -------------- A clicking sound -------------- //

    clickingSound1: [
      {
        text: "No",
        handler: props.actionProvider.clickingSound11,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.clickingSound12,
        id: 2,
      },
    ],

    clickingSound11: [
      {
        text: "Have the battery tested. Chances are it is dead and will need to be replaced. This could also signify an issue with the starter",
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.clickingSound112,
        id: 2,
      },
    ],

    // -------------- Brakes make noise -------------- //

    brakesMakeNoise1: [
      {
        text: "My brakes make an odd sort of rattling sound when I use them",
        handler: props.actionProvider.brakesMakeNoise11,
        id: 1,
      },
      {
        text: "My brakes make an unmistakable grinding noise when I use them",
        handler: props.actionProvider.brakesMakeNoise12,
        id: 2,
      },
      {
        text: "There is a kind of 'click' coming from the front of the vehicle",
        handler: props.actionProvider.brakesMakeNoise13,
        id: 3,
      },
    ],

    // -------------- Clunking sound -------------- //

    clunkingSound1: [
      {
        text: "During normal driving",
        handler: props.actionProvider.clunkingSound11,
        id: 1,
      },
      {
        text: "Only while turning",
        handler: props.actionProvider.clunkingSound12,
        id: 2,
      },
      {
        text: "When driving over bumps",
        handler: props.actionProvider.clunkingSound13,
        id: 3,
      },
      {
        text: "When releasing the gas pedal",
        handler: props.actionProvider.clunkingSound14,
        id: 4,
      },
      {
        text: "When shifting from park into drive",
        handler: props.actionProvider.clunkingSound15,
        id: 5,
      },
    ],

    clunkingSound11: [
      {
        text: "No",
        handler: props.actionProvider.clunkingSound111,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.clunkingSound112,
        id: 2,
      },
    ],

    clunkingSound12: [
      {
        text: "I don't know",
        handler: props.actionProvider.clunkingSound121,
        id: 1,
      },
      {
        text: "No",
        handler: props.actionProvider.clunkingSound122,
        id: 2,
      },
      {
        text: "Yes",
        handler: props.actionProvider.clunkingSound123,
        id: 3,
      },
    ],

    clunkingSound13: [
      {
        text: "Front",
        handler: props.actionProvider.clunkingSound131,
        id: 1,
      },
      {
        text: "I don't know",
        handler: props.actionProvider.clunkingSound132,
        id: 2,
      },
      {
        text: "Rear",
        handler: props.actionProvider.clunkingSound133,
        id: 3,
      },
    ],

    clunkingSound15: [
      {
        text: "No",
        handler: props.actionProvider.clunkingSound151,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.clunkingSound152,
        id: 2,
      },
    ],

    // -------------- Pinging -------------- //

    pinging1: [
      {
        text: "Seemingly at random",
        handler: props.actionProvider.pinging11,
        id: 1,
      },
      {
        text: "When driving uphill and the engine temperature begins to climb",
        handler: props.actionProvider.pinging12,
        id: 2,
      },
      {
        text: "While driving at high altitude",
        handler: props.actionProvider.pinging13,
        id: 3,
      },
    ],

    pinging13: [
      {
        text: "No",
        handler: props.actionProvider.pinging131,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.pinging132,
        id: 2,
      },
    ],

    // -------------- Sputter and cough -------------- //

    sputterAndCough1: [
      {
        text: "During idle but not while driving",
        handler: props.actionProvider.sputterAndCough11,
        id: 1,
      },
      {
        text: "During normal driving",
        handler: props.actionProvider.sputterAndCough12,
        id: 2,
      },
    ],

    sputterAndCough12: [
      {
        text: "No",
        handler: props.actionProvider.sputterAndCough121,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.sputterAndCough122,
        id: 2,
      },
    ],

    // -------------- Squealing noise -------------- //

    squealingNoise1: [
      {
        text: "From the tires",
        handler: props.actionProvider.squealingNoise11,
        id: 1,
      },
      {
        text: "The brakes",
        handler: props.actionProvider.squealingNoise12,
        id: 2,
      },
      {
        text: "The engine",
        handler: props.actionProvider.squealingNoise13,
        id: 3,
      },
    ],

    squealingNoise11: [
      {
        text: "No",
        handler: props.actionProvider.squealingNoise111,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.squealingNoise112,
        id: 2,
      },
    ],

    squealingNoise12: [
      {
        text: "No",
        handler: props.actionProvider.squealingNoise121,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.squealingNoise122,
        id: 2,
      },
    ],

    // -------------- The engine backfires -------------- //

    engineBackfires1: [
      {
        text: "During normal driving",
        handler: props.actionProvider.engineBackfires11,
        id: 1,
      },
      {
        text: "Right after starting the car",
        handler: props.actionProvider.engineBackfires12,
        id: 2,
      },
    ],

    engineBackfires11: [
      {
        text: "No",
        handler: props.actionProvider.engineBackfires111,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.engineBackfires112,
        id: 2,
      },
    ],

    engineBackfires12: [
      {
        text: "No",
        handler: props.actionProvider.engineBackfires121,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.engineBackfires122,
        id: 2,
      },
    ],

    // -------------- The engine is running roughly -------------- //

    engineRunningRoughly1: [
      {
        text: "At highway speeds",
        handler: props.actionProvider.engineRunningRoughly11,
        id: 1,
      },
      {
        text: "At idle",
        handler: props.actionProvider.engineRunningRoughly12,
        id: 2,
      },
    ],

    // -------------- Ticking / tapping -------------- //

    tickingAndTapping1: [
      {
        text: "No",
        handler: props.actionProvider.tickingAndTapping11,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.tickingAndTapping12,
        id: 2,
      },
    ],

    tickingAndTapping11: [
      {
        text: "Loose valves or a leaking exhaust manifold are likely the issue",
      },
      {
        text: "Yes",
        handler: props.actionProvider.tickingAndTapping112,
        id: 2,
      },
    ],

    restartOption: [
      {
        text: "No",
        handler: props.actionProvider.endChat,
        id: 1,
      },
      {
        text: "Yes",
        handler: props.actionProvider.startChat,
        id: 2,
      },
    ],

    dynamicOption: [
               
    ]

  }

  const selectedOption = props.option;

  const renderButton = () => {
    let dynamicOptions = getData();
    return (
      <div>
        {dynamicOptions.length > 0 && props.option === 'dynamicOptionRender' ? (
          dynamicOptions?.map((option) => (
            <button key={option.id} onClick={(event) => { props.actionProvider.postUserInput(option, event) }} className="option-button">
              {option.title}
            </button>
          ))
        ) : (
          options && options[selectedOption] && options[selectedOption]?.map((option) => (
            <button key={option.id} onClick={(event) => { option.handler(option, event) }} className="option-button">
              {option.text}
            </button>
          ))
        )}
      </div>
    );
  }

  return (
    <div className="options-container">
      {renderButton()}
    </div>
  );
};

export default Options;
