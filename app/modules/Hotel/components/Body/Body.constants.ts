import {
  Icon24,
  IconBell,
  IconCoffeeCup,
  IconForkKnife,
  IconParking,
  IconPaw,
  IconSnowflake,
  IconSwimming,
  IconTreadmill,
  IconWheelchair,
  IconWifi,
} from 'app/assets';

// This is just a mock. It should come from the BE.
export const features = [
  {
    icon: IconWifi,
    description: 'freeWifi',
  },
  {
    icon: IconForkKnife,
    description: 'freeBreakfast',
  },
  {
    icon: IconPaw,
    description: 'animalFriendly',
  },
  {
    icon: Icon24,
    description: '24HourFrontDesk',
  },
  {
    icon: IconWheelchair,
    description: 'disabledGuestsFriendly',
  },
  {
    icon: IconParking,
    description: 'privateParking',
  },
  {
    icon: IconSwimming,
    description: 'indoorPool',
  },
  {
    icon: IconCoffeeCup,
    description: 'teaCoffeeMakerInAllRooms',
  },
  {
    icon: IconTreadmill,
    description: 'fitnessCenter',
  },
  {
    icon: IconBell,
    description: 'roomService',
  },
  {
    icon: IconSnowflake,
    description: 'airConditioned',
  },
] as const;
