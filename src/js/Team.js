export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    const isExist = [...this.members].some((item) =>
      Object.values(member).every((key) => Object.values(item).includes(key))
    );
    if (isExist) {
      throw new Error('Такой персонаж уже есть в команде');
    }
    this.members.add(member);
  }

  addAll(...members) {
    members.forEach((member) => {
      try {
        this.add(member);
      } catch (error) {
        console.log(error.message);
      }
    });
  }

  toArray() {
    return [...this.members];
  }
}
