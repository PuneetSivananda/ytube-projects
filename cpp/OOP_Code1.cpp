#include <iostream>
using std::string;
// Abstraction
class AbstractEmployee{
  virtual void AskForPromotion() = 0;
};

class Employee:AbstractEmployee {
private:
  string Company;
  int Age;
protected:
  string Name;
public:
  void AskForPromotion()  {
    // Ask for Promotion logic is added here
    if(Age>30)
      std::cout <<Name <<" Got Promoted!" << std::endl;
    else 
      std::cout <<Name <<" Sorry your not Promoted! " << std::endl;
  }
  void setCompany(string company){
    Company = company;
  }
  string getCompany(){
    return Company;
  }
  void setAge(int age){
    if(age >=18)
    Age = age;
  }
  int getAge(){
    return Age;
  }
  void setName(string name){
    Name = name;
  }
  string getName(){
    return Name;
  }
  void IntroduceYourself(){
    std::cout<<"Name - "<< Name << std::endl;
    std::cout<<"Company - "<< Company << std::endl;
    std::cout<<"Age - "<< Age << std::endl;
  }
  virtual void Work(){
    std::cout<<"Name - "<<Name << " is checking email, task backlog and performing tasks "<< std::endl;
  }
  Employee(string name, string company, int age){
    Name = name;
    Company = company;
    Age = age;  
  }
};


class Developer:public Employee{
public:
  string FavProgrammingLanguage;
  Developer(string name, string company, int age, string favProgrammingLanguage)
    :Employee(name, company, age)  {
      FavProgrammingLanguage = favProgrammingLanguage;
  }

  void FixBug(){
    std::cout<< Name << " fixed the bug using " << FavProgrammingLanguage << std::endl;
  }

  void Work(){
    std::cout<<"Name - "<<Name << " is Writing, "<< FavProgrammingLanguage << " code."<< std::endl;
  }

};


class Teacher:public Employee{
public:
  string Subject;
  void PrepareLesson(){
    std::cout<< Name << " is Preparing " << Subject << " lesson" << std::endl;
  }
  void Work(){
    std::cout<<"Name - "<<Name << " is Teaching, "<< Subject << std::endl;
  }
  Teacher(string name, string company, int age, string subject)
    :Employee(name, company, age)
  {
    Subject = subject;
  }
};

int main(){
  /* Employee Class and object functionalities
  Employee employee1 = Employee("Greco", "Texas", 25); 
  employee1.IntroduceYourself();
  
  Employee employee2 = Employee("John", "Amazon", 35);
  employee2.IntroduceYourself();
  
  employee1.AskForPromotion();
  employee2.AskForPromotion();
  */
  //Developer Functionalities
  Developer dev1 = Developer("Dev1","YT" , 25,"Python");
 
  //Teacher Functionalities
  Teacher t = Teacher("Jack", "cShchool", 35, "History");


  // dev1.FixBug();
  // dev1.AskForPromotion();

  // t.PrepareLesson();
  // t.AskForPromotion();

  // dev1.Work();
  // t.Work();

  // Parent class pointer for a derived class object/
  Employee* emp1= &dev1;
  Employee* emp2= &t;
  // for pointers use the -> notation
  emp1->Work();
  emp2->Work();

  return 0;
}