#include <iostream>
using namespace std;
using std::string;

class Item{
private:
  int Price;
  int Nos;
  string Name;
public:
  void getPrice(){
    std::cout<<"Price - "<<Price<< std::endl;
  }
  int getCost(){
    return Price*Nos;
  }
  void setPrice(int price){
    Price = price;
  }
  void getName(){
    std::cout<<"Name - "<<Name<< std::endl;
  }
  void setName(string name){
    Name = name;
  }
  Item(string name, int price, int nos){
    Name = name;
    Price = price;
    Nos = nos;
  }
  
};

int main() {
  int p1, n1;
  int p2, n2;
  cin >> n1 >> n2 >> p1 >> p2;
  
  Item I1 = Item("Pen", p1, n1);
  Item I2 = Item("Pencil", p2, n2);
  
  std::cout<< I1.getCost() + I2.getCost()<< std::endl;
  
  return 0;
}