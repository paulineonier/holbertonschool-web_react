import Subjects from './Teacher';

namespace Subjects {
  export class Subject {
    private teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

export default Subjects;
