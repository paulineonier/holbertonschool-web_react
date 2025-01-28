import Subjects from './Subject';

namespace Subjects {
  // Declaration merging: Extending the Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number; // New optional attribute
  }

  // Class Java extending Subject
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}

export default Subjects;
