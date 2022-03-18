#include <iostream>
using namespace std;

int main() {
  int angle1, angle2, angle3, sum;
  std::cin >> angle1 >> angle2 >> angle3;
  sum = angle1 + angle2 + angle3;
  (angle1 + angle2 > angle3 || angle1 + angle3 > angle2 || angle3 + angle2 > angle1) && sum == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0  ? std::cout << "YES" : std::cout << "NO";
  return 0;
}