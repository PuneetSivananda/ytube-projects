#include <iostream>
using namespace std;
using std::string;

class RangeOdd{
private:
  int Start, End;
public:
  void printRange(){
    for (int i=Start; i<= End; i++){
      if(i%2 == 1){
        cout << i << " ";
      }
    }
  }
  RangeOdd(int start, int end){
    Start = start;
    End = end;
  }
  
};

int main() {
  int n1, n2;
  cin >> n1 >>n2;
  RangeOdd r = RangeOdd(n1, n2);
  r.printRange();
  return 0;
}