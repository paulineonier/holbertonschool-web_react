import Subjects from './Subject';

namespace Subjects {
  // Declaration merging: Extending the Teacher interface
  export interface Teacher {
    experienceTeachingC?: number; // New optional attribute
  }

  // Class Cpp extending Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}

export default Subjects;
