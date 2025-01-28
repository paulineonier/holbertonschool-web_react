import Subjects from './Subject';

namespace Subjects {
  // Declaration merging: Extending the Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number; // New optional attribute
  }

  // Class React extending Subject
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}

export default Subjects;
