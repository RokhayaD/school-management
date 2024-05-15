import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private classes = [
    { id: 1, name: 'Terminal S1' },
    { id: 2, name: 'Terminal S2' },
    { id: 3, name: 'Terminal L1a' },
    { id: 4, name: 'Terminal L2b' }
  ];

  private students = [
    { id: 1, name: 'Penda Sarr', classId: 2 }
  ];

  constructor() { }

  getClasses() {
    return this.classes;
  }

  addClass(newClass) {
    this.classes.push(newClass);
  }

  updateClass(updatedClass) {
    const index = this.classes.findIndex(c => c.id === updatedClass.id);
    if (index !== -1) {
      this.classes[index] = updatedClass;
    }
  }

  deleteClass(id) {
    this.classes = this.classes.filter(c => c.id !== id);
  }

  getStudents() {
    return this.students;
  }

  addStudent(newStudent) {
    this.students.push(newStudent);
  }

  updateStudent(updatedStudent) {
    const index = this.students.findIndex(s => s.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }

  deleteStudent(id) {
    this.students = this.students.filter(s => s.id !== id);
  }
}
