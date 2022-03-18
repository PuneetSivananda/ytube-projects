#include <iostream>
using namespace std;

class ISBOTH{
private:
  int Num;
public:
  ISBOTH(int num){
    Num = num;
  }
  void getNum(){
    cout << "Number is :" << Num << endl;
  }
  void isDivisible(){
    if(Num % 5 == 0 && Num % 11 == 0 ){
      cout << "BOTH" << endl;
    }
    else if(Num % 5 != 0 && Num % 11 == 0 ){
      cout << "ONE" << endl;
    }
    else if(Num % 5 == 0 && Num % 11 != 0 ){
      cout << "ONE" << endl;
    }
    else{
      cout << "NONE" << endl;
    }
  }
};

int main() {
  int n1;
  cin >> n1;
  ISBOTH i1 = ISBOTH(n1);
  i1.isDivisible();
  return 0;
}