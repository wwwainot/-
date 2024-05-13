// 1 задание
const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

const giveParcel = () => {
  const deletedPerson = peopleWaiting.splice(0, 1);

  alert(
    `${deletedPerson} получил(а) посылку.В очереди осталось ${peopleWaiting.length} человек`
  );
};
console.log(giveParcel(peopleWaiting));
console.log(giveParcel(peopleWaiting));
console.log(giveParcel(peopleWaiting));

const leaveQueueWithoutParcel = () => {
  const leavePerson = peopleWaiting.pop();
  alert(`${leavePerson} не получил(а) посылку и ушел`);
};

console.log(leaveQueueWithoutParcel(peopleWaiting));
console.log(leaveQueueWithoutParcel(peopleWaiting));
console.log(leaveQueueWithoutParcel(peopleWaiting));
console.log(leaveQueueWithoutParcel(peopleWaiting));
console.log(peopleWaiting.length);
