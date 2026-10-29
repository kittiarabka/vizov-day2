const guardian = {
  name: "Кристальный Страж",
  protocol: "Не пропускать никого",
  trust: 15,
  trustThreshold: 80
};

const signals = [
  {
    id: 1,
    title: "Багги опускает оружие",
    trustPoints: 20,
    priority: 3,
    isSafe: true
  },
  {
    id: 2,
    title: "Багги говорит спокойным голосом",
    trustPoints: 15,
    priority: 2,
    isSafe: true
  },
  {
    id: 3,
    title: "Багги делает резкое движение",
    trustPoints: 30,
    priority: 5,
    isSafe: false
  },
  {
    id: 4,
    title: "Багги протягивает открытую ладонь",
    trustPoints: 25,
    priority: 4,
    isSafe: true
  },
  {
    id: 5,
    title: "Багги пытается пройти силой",
    trustPoints: 40,
    priority: 5,
    isSafe: false
  },
  {
    id: 6,
    title: "Багги остаётся на расстоянии",
    trustPoints: 10,
    priority: 1,
    isSafe: true
  }
];

function getSafeSignals(signalList) {
  return signalList.filter((signal) => signal.isSafe === true);
}

function sortByPriority(signalList) {
  return signalList.slice().sort((first, second) => second.priority - first.priority);
}

function getSignalTitles(signalList) {
  return signalList.map((signal) => signal.title);
}

function calculateTrust(signalList, initialTrust) {
  let totalTrust = initialTrust;

  for (let index = 0; index < signalList.length; index += 1) {
    totalTrust += signalList[index].trustPoints;
  }

  return totalTrust;
}

function updateGuardianProtocol(guardianState, totalTrust) {
  if (totalTrust >= guardianState.trustThreshold) {
    guardianState.protocol = "Доверять";
  }

  return guardianState.protocol;
}

const safeSignals = getSafeSignals(signals);
const signalsByPriority = sortByPriority(safeSignals);
const signalTitles = getSignalTitles(signalsByPriority);
const trustLevel = calculateTrust(safeSignals, guardian.trust);

updateGuardianProtocol(guardian, trustLevel);

console.log("Безопасные сигналы:", safeSignals);
console.log("Сигналы по приоритету:", signalsByPriority);
console.log("Названия сигналов:", signalTitles);
console.log("Уровень доверия:", trustLevel);
console.log("Новый протокол Стража:", guardian.protocol);
