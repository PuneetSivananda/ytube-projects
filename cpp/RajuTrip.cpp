#include <iostream>
using namespace std;
using std::string;

class RajuTrip{
private:
  int BusNumber;
public:
  void calculateTripStatus(){
    if (BusNumber % 5 == 0 || BusNumber % 6 == 0){
      cout << "YES";
    }
    else{
      cout << "NO";
    }
  }
  RajuTrip(int busNumber){
    BusNumber = busNumber;
  }
};

int main() {
  int no;
  cin >> no;
  RajuTrip rt = RajuTrip(no);
  rt.calculateTripStatus();
  return 0;
}