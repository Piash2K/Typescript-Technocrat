interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

// type brandCharaWatch= {
//   heartRate: string;
//   stopWatch: boolean;
// }
interface brandCharaWatch {
  heartRate: string;
  stopWatch: boolean;
}
interface brandAppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}
const poorDeveloper: Developer<
  brandCharaWatch,
  { brand: "Yamaha"; engineCapacity: "200CC" }
> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "Lenovo",
    model: "A21",
    releasedYear: "2010",
  },
  smartWatch: {
    heartRate: "120",
    stopWatch: true,
  },
};
const richDeveloper: Developer<brandAppleWatch> = {
  name: "Mr. Rich",
  salary: 100,
  device: {
    brand: "hp",
    model: "X34",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "120",
    callSupport: true,
    calculator: true,
    AiFeature: true,
  },
  bike: null,
};

const add = (num1: number, num2: number = 0): number => num1 + num2;
